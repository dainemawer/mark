import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookmarkForm from "@/components/bookmark-form"
import BookmarkList from "@/components/bookmark-list"
import ChatUI from "@/components/chat-ui"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">Mark</span> - AI Bookmark Manager
        </h1>
        <ModeToggle />
      </div>

      <Tabs defaultValue="bookmarks" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          <TabsTrigger value="chat">AI Chat</TabsTrigger>
        </TabsList>
        <TabsContent value="bookmarks">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <BookmarkForm />
            </div>
            <div className="lg:col-span-2">
              <BookmarkList />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="chat">
          <ChatUI />
        </TabsContent>
      </Tabs>
    </main>
  )
}

