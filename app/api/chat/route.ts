import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Create a Supabase server client
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      },
    )

    // Get the current user
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch the user's bookmarks
    const { data: bookmarks, error } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching bookmarks:", error)
      return NextResponse.json({ error: "Failed to fetch bookmarks" }, { status: 500 })
    }

    // Create a context from the bookmarks for the AI to reference
    const bookmarksContext = bookmarks
      .map((bookmark: { title: string; url: string; description?: string; tags?: string[]; created_at: string }) => {
        return `
Title: ${bookmark.title}
URL: ${bookmark.url}
Description: ${bookmark.description || "No description"}
Tags: ${bookmark.tags?.join(", ") || "No tags"}
Added: ${bookmark.created_at}
      `
      })
      .join("\n---\n")

    // Create a system prompt that includes the bookmarks context
    const systemPrompt = `
You are Mark, an AI assistant for a bookmark manager application.
Your task is to help users find and retrieve information from their saved bookmarks.

Here are the user's bookmarks:
${bookmarksContext}

When responding:
1. If the user asks about a specific topic, search through the bookmarks and return relevant ones.
2. If you find matching bookmarks, format them nicely with markdown, including the title, description, tags, and URL.
3. If no bookmarks match the query, politely inform the user and suggest they add more bookmarks or try different search terms.
4. Keep your responses concise and focused on the bookmarks.
5. If the user asks something unrelated to bookmarks, gently redirect them to bookmark-related queries.
`

    // Use streamText to enable streaming responses
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages: messages.filter((m: { role: string }) => m.role !== "system"),
    })

    // Return the response as a stream
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat route:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

