"use client"

import { useEffect } from "react"
import { useBookmarks } from "@/hooks/use-bookmarks"
import BookmarkCard from "@/components/bookmark-card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

export default function BookmarkList() {
  const { bookmarks, isLoading } = useBookmarks()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [filteredBookmarks, setFilteredBookmarks] = useState(bookmarks);

  useEffect(() => {
    setFilteredBookmarks(bookmarks.filter((bookmark) => {
      const matchesSearch =
        searchTerm === "" ||
        bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bookmark.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bookmark.url.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTag = activeTag === null || bookmark.tags.includes(activeTag)

      return matchesSearch && matchesTag
    }));
  }, [bookmarks, bookmarks.length, searchTerm, activeTag]);

  // Get all unique tags from bookmarks
  const allTags = Array.from(new Set(bookmarks.flatMap((bookmark) => bookmark.tags)))

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <Input
          placeholder="Search bookmarks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {filteredBookmarks.length === 0 ? (
        <div className="text-center py-12 border border-dashed rounded-lg">
          <p className="text-muted-foreground">No bookmarks found</p>
          {searchTerm || activeTag ? (
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters</p>
          ) : (
            <p className="text-sm text-muted-foreground mt-2">Add your first bookmark using the form</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>
      )}
    </div>
  )
}

