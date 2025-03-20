"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Bookmark } from "@/types/bookmark"

interface BookmarksContextType {
  bookmarks: Bookmark[]
  addBookmark: (bookmark: Bookmark) => void
  removeBookmark: (id: string) => void
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined)

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks")
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks))
      } catch (error) {
        console.error("Failed to parse bookmarks:", error)
      }
    }
  }, [])

  // Save bookmarks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks((prev) => [bookmark, ...prev])
  }

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id))
  }

  return (
    <BookmarksContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>{children}</BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarksContext)
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarksProvider")
  }
  return context
}

