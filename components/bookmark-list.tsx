"use client"

import { useBookmarks } from "@/hooks/use-bookmarks"
import BookmarkCard from "@/components/bookmark-card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function BookmarkList() {
  const { bookmarks } = useBookmarks()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Get all unique tags from bookmarks
  const allTags = Array.from(new Set(bookmarks.flatMap((bookmark) => bookmark.tags)))

  // Filter bookmarks based on search term and active tag
  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesSearch =
      searchTerm === "" ||
      bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.url.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTag = activeTag === null || bookmark.tags.includes(activeTag)

    return matchesSearch && matchesTag
  })

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag)
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
          {(searchTerm || activeTag) && (
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters</p>
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

