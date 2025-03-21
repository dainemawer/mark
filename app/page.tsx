import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Bookmark, Search, MessageSquare, Brain, Tag, Clock } from "lucide-react"
import Image from "next/image"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Organize Your Bookmarks with AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Mark.ai helps you save, organize, and find your bookmarks using the power of artificial intelligence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="px-8">
                  <Link href="/auth/signup">Get Started Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative aspect-video rounded-xl overflow-hidden border shadow-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Mark.ai Dashboard"
                width={1280}
                height={720}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">10k+</h2>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">1M+</h2>
              <p className="text-sm text-muted-foreground">Bookmarks Saved</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">99%</h2>
              <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">24/7</h2>
              <p className="text-sm text-muted-foreground">AI Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to organize your online resources and boost your productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-2 border-muted">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <Bookmark className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Bookmarking</h3>
                <p className="text-muted-foreground">
                  Save any webpage with a single click. Mark.ai automatically extracts the title, description, and
                  relevant tags.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-muted">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Intelligent Search</h3>
                <p className="text-muted-foreground">
                  Find what you&apos;re looking for instantly with our powerful search that understands context and meaning.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-muted">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Assistant</h3>
                <p className="text-muted-foreground">
                  Ask questions about your bookmarks in natural language and get instant, relevant answers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-muted">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Automatic Tagging</h3>
                <p className="text-muted-foreground">
                  Our AI automatically suggests relevant tags for your bookmarks, making organization effortless.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-muted">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Content Summarization</h3>
                <p className="text-muted-foreground">
                  Get AI-generated summaries of your bookmarked pages so you can quickly recall what&apos;s important.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-muted">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cross-Device Sync</h3>
                <p className="text-muted-foreground">
                  Access your bookmarks from any device with real-time synchronization across all your platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Thousands of professionals trust Mark.ai to organize their digital life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-primary">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Jane Doe</h4>
                    <p className="text-sm text-muted-foreground">Product Designer</p>
                  </div>
                </div>
                <p className="italic">
                &quot;Mark.ai has completely transformed how I organize my research. The AI assistant feels like having a
                  personal librarian who knows exactly where everything is.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-primary">MS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Smith</h4>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <p className="italic">
                  &quot;As a developer, I&apos;m constantly saving documentation and code examples. Mark.ai helps me find exactly
                  what I need when I need it, saving me hours every week.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-primary">AL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Alex Lee</h4>
                    <p className="text-sm text-muted-foreground">Content Creator</p>
                  </div>
                </div>
                <p className="italic">
                  &quot;The automatic tagging and organization features are game-changers. I can focus on creating content
                  while Mark.ai handles keeping my research organized.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that&apos;s right for you and start organizing your bookmarks with AI assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <CardContent className="p-6 flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Perfect for getting started with basic bookmark management.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Up to 50 bookmarks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Basic AI assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Tag organization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Search functionality</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="flex flex-col border-primary relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                MOST POPULAR
              </div>
              <CardContent className="p-6 flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For power users who need more storage and advanced features.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Unlimited bookmarks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Advanced AI assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Bookmark collections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>No ads</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href="/auth/signup?plan=pro">Try Pro Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Team Plan */}
            <Card className="flex flex-col">
              <CardContent className="p-6 flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Team</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">$19</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For teams who want to share and collaborate on bookmarks.
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Shared collections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Team analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Admin controls</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/auth/signup?plan=team">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about Mark.ai.
            </p>
          </div>
          <div className="grid gap-6 max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">How does Mark.ai&apos;s AI assistant work?</h3>
                <p className="text-muted-foreground">
                  Mark.ai uses advanced natural language processing to understand your bookmarks and your questions. It
                  can search through your bookmarks, understand their content, and provide relevant answers based on
                  your saved information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Can I import bookmarks from my browser?</h3>
                <p className="text-muted-foreground">
                  Yes! Mark.ai supports importing bookmarks from all major browsers including Chrome, Firefox, Safari,
                  and Edge. You can also import from other bookmark managers like Pocket or Raindrop.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Is my data secure and private?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We use industry-standard encryption and security practices to protect your data. Your
                  bookmarks are only accessible to you, and we never share your data with third parties without your
                  explicit consent.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Can I use Mark.ai on my mobile device?</h3>
                <p className="text-muted-foreground">
                  Yes, Mark.ai is fully responsive and works on all devices. We also offer native mobile apps for iOS
                  and Android for an even better mobile experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  What happens if I exceed my bookmark limit on the free plan?
                </h3>
                <p className="text-muted-foreground">
                  If you reach your 50 bookmark limit on the free plan, you&apos;ll need to upgrade to a paid plan to add
                  more bookmarks. Your existing bookmarks will remain accessible, but you won&apos;t be able to add new ones
                  until you upgrade or remove some existing bookmarks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Stay Updated</h2>
            <p className="text-muted-foreground md:text-xl mb-8">
              Subscribe to our newsletter for the latest features, tips, and special offers.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to Organize Your Bookmarks?
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl mb-8">
            Join thousands of professionals who use Mark.ai to manage their digital knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link href="/auth/signup">Get Started Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

