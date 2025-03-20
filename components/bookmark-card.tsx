"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Bookmark } from "@/types/bookmark"
import { ExternalLink, Trash2 } from "lucide-react"
import { useBookmarks } from "@/hooks/use-bookmarks"
import { formatDistanceToNow } from "@/lib/utils"

interface BookmarkCardProps {
  bookmark: Bookmark
}

export default function BookmarkCard({ bookmark }: BookmarkCardProps) {
  const { removeBookmark } = useBookmarks()

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-semibold text-lg line-clamp-1">{bookmark.title}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeBookmark(bookmark.id)}
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>

          {bookmark.description && <p className="text-muted-foreground text-sm line-clamp-2">{bookmark.description}</p>}

          <div className="flex items-center text-sm text-muted-foreground">
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary truncate max-w-full"
            >
              <ExternalLink className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">{bookmark.url}</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {bookmark.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-3 bg-muted/50 text-xs text-muted-foreground">
        Added {formatDistanceToNow(new Date(bookmark.createdAt))} ago
      </CardFooter>
    </Card>
  )
}

