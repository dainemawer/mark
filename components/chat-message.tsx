"use client"

import type { Message } from "@/types/chat"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"
  const isSystem = message.role === "system"

  // Don't render system messages
  if (isSystem) return null

  return (
    <div className={cn("flex items-start gap-3 text-sm", isUser ? "flex-row-reverse" : "flex-row")}>
      <Avatar className={cn("h-8 w-8", isUser ? "bg-primary" : "bg-muted")}>
        <AvatarFallback>{isUser ? "U" : "AI"}</AvatarFallback>
      </Avatar>

      <div
        className={cn("rounded-lg px-4 py-3 max-w-[80%]", isUser ? "bg-primary text-primary-foreground" : "bg-muted")}
      >
        {message.isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Thinking...</span>
          </div>
        ) : (
          <ReactMarkdown
            components={{
              a: ({ ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" />
              ),
              p: ({ ...props }) => <p {...props} className="mb-2" />,
              strong: ({ ...props }) => <strong {...props} className="font-semibold" />,
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}

