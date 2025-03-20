"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Bookmark } from "@/types/bookmark"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

interface BookmarksContextType {
  bookmarks: Bookmark[]
  isLoading: boolean
  addBookmark: (bookmark: Omit<Bookmark, "id" | "createdAt">) => Promise<void>
  removeBookmark: (id: string) => Promise<void>
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined)

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  // Fetch bookmarks from Supabase when user changes
  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!user) {
        setBookmarks([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      try {
        const { data, error } = await supabase.from("bookmarks").select("*").order("created_at", { ascending: false })

        if (error) {
          throw error
        }

        // Transform the data to match our Bookmark type
        const transformedBookmarks: Bookmark[] = data.map((item) => ({
          id: item.id,
          url: item.url,
          title: item.title,
          description: item.description || "",
          tags: item.tags || [],
          createdAt: item.created_at,
        }))

        setBookmarks(transformedBookmarks)
      } catch (error) {
        console.error("Error fetching bookmarks:", error)
        toast.error('Error fetching bookmarks',{
          description: "There was a problem loading your bookmarks.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookmarks()

    // Set up real-time subscription for bookmarks
    const subscription = supabase
      .channel("bookmarks_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "bookmarks",
          filter: `user_id=eq.${user?.id}`,
        },
        (payload) => {
          // Handle different events
          if (payload.eventType === "INSERT") {
            const newBookmark = payload.new as Bookmark
            setBookmarks((prev) => [
              {
                id: newBookmark.id,
                url: newBookmark.url,
                title: newBookmark.title,
                description: newBookmark.description || "",
                tags: newBookmark.tags || [],
                createdAt: newBookmark.createdAt,
              },
              ...prev,
            ])
          } else if (payload.eventType === "DELETE") {
            const deletedId = payload.old.id
            setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== deletedId))
          }
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [user])

  const addBookmark = async (bookmarkData: Omit<Bookmark, "id" | "createdAt">) => {
    if (!user) return

    try {
      const { data, error } = await supabase.from("bookmarks").insert({
        url: bookmarkData.url,
        title: bookmarkData.title,
        description: bookmarkData.description,
        tags: bookmarkData.tags,
        user_id: user.id,
      }).select("*")
      .single();

      if (error) {
        throw error
      }

      if (data) {
        setBookmarks((prev) => [data, ...prev]);
      }

      toast('Bookmark added', {
        description: "Your bookmark has been saved successfully",
      })
    } catch (error) {
      console.error("Error adding bookmark:", error)
      toast.error('Error adding bookmark', {
        description: "There was a problem saving your bookmark.",
      })
    }
  }

  const removeBookmark = async (id: string) => {
    if (!user) return

    try {
      const { error } = await supabase.from("bookmarks").delete().eq("id", id)

      if (error) {
        throw error
      }

      toast('Bookmark removed',{
        description: "Your bookmark has been removed successfully",
      })
    } catch (error) {
      console.error("Error removing bookmark:", error)
      toast.error('Error removing bookmark', {
        description: "There was a problem removing your bookmark.",
      })
    }
  }

  return (
    <BookmarksContext.Provider value={{ bookmarks, isLoading, addBookmark, removeBookmark }}>
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarksContext)
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarksProvider")
  }
  return context
}

