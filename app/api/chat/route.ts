import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { NextResponse } from "next/server"
import { errorHandler } from '@/lib/utils'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, bookmarks } = await req.json()

    // Create a context from the bookmarks for the AI to reference
    const bookmarksContext = bookmarks
      .map((bookmark: { title: string; url: string; description?: string; tags: string[]; createdAt: string }) => {
        return `
Title: ${bookmark.title}
URL: ${bookmark.url}
Description: ${bookmark.description || "No description"}
Tags: ${bookmark.tags.join(", ") || "No tags"}
Added: ${bookmark.createdAt}
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

  try {
    // Use streamText to enable streaming responses
    const result = await streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages,
    });

    // Return the response as a stream
    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (aiError) {
    console.error("Error with OpenAI API:", aiError);
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 });
  }
  } catch (error) {
    console.error("Error in chat route:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

