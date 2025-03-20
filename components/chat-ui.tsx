"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"
import { useBookmarks } from "@/hooks/use-bookmarks"
import ChatMessage from "@/components/chat-message"
import { useChat } from "@ai-sdk/react"

export default function ChatUI() {
    const { bookmarks } = useBookmarks()
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Use the AI SDK's useChat hook
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
      api: "/api/chat",
      body: {
        bookmarks,
      },
      initialMessages: [
        {
          id: "welcome",
          role: "assistant",
          content:
            "Hi! I'm Mark's AI assistant. Ask me about your bookmarks and I'll help you find what you're looking for.",
        },
      ],
    })

    // Scroll to bottom when messages change
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
      <div className="flex flex-col h-[70vh]">
        <Card className="flex-1 overflow-hidden flex flex-col">
          <CardContent className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={{
                    id: message.id,
                    role: message.role,
                    content: message.content,
                  }}
                />
              ))}
              {isLoading && (
                <ChatMessage
                  message={{
                    id: "loading",
                    role: "assistant",
                    content: "Thinking...",
                    isLoading: true,
                  }}
                />
              )}
              {error && (
                <div className="p-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/20 rounded-md">
                  Error: {error.message || "Something went wrong. Please try again."}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <div className="relative flex-1">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ask about your bookmarks..."
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    )
  }
