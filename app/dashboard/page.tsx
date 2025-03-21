import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookmarkForm from "@/components/bookmark-form"
import BookmarkList from "@/components/bookmark-list"
import ChatUI from "@/components/chat-ui"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
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
    </div>
  )
}

