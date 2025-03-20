import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
      // Extract bookmark ID from params
      const { id } = await params;

      if (!id) {
        return NextResponse.json({ error: "Bookmark ID is required" }, { status: 400 });
      }

      // Initialize Supabase Server Client
      const cookieStore = await cookies();
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            get(name: string) {
              return cookieStore.get(name)?.value ?? null;
            },
          },
        }
      );

      // Get the current user session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      // Delete the bookmark (ensure it belongs to the logged-in user)
      const { error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("id", id)
        .eq("user_id", session.user.id);

      if (error) {
        throw error;
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Error deleting bookmark:", error);
      return NextResponse.json({ error: "Failed to delete bookmark" }, { status: 500 });
    }
  }

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
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

  // Get the request body
  const body = await request.json()
  const { url, title, description, tags } = body

  // Update the bookmark
  const { data, error } = await supabase
    .from("bookmarks")
    .update({
      url,
      title,
      description,
      tags,
    })
    .eq("id", id)
    .eq("user_id", session.user.id)
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ bookmark: data[0] })
}

