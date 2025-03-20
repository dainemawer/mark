"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useBookmarks } from "@/hooks/use-bookmarks"

export default function BookmarkForm() {
  const { addBookmark } = useBookmarks()
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    description: "",
    tags: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.url) {
      toast.error('URL is required', {
        description: "Please enter a URL to save a bookmark",
      })
      return
    }

    // Create tags array from comma-separated string
    const tags = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "")

    addBookmark({
      id: Date.now().toString(),
      url: formData.url,
      title: formData.title || formData.url,
      description: formData.description,
      tags,
      createdAt: new Date().toISOString(),
    })

    toast('Bookmark added', {
      description: "Your bookmark has been saved successfully",
    })

    // Reset form
    setFormData({
      url: "",
      title: "",
      description: "",
      tags: "",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Bookmark</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">
              URL <span className="text-red-500">*</span>
            </Label>
            <Input
              id="url"
              name="url"
              type="url"
              placeholder="https://example.com"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title (optional)</Label>
            <Input id="title" name="title" placeholder="Website title" value={formData.title} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="What's this bookmark about?"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (optional, comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              placeholder="css, webdev, tutorial"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Save Bookmark
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

