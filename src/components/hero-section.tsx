import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Discover Amazing Products from
            <span className="text-primary"> Trusted Vendors</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Shop from thousands of verified vendors offering quality products at competitive prices. Find everything you
            need in one place.
          </p>

          {/* Hero Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="What are you looking for today?" className="pl-12 pr-4 h-14 text-lg" />
              <Button className="absolute right-2 top-2 h-10">Search</Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Shopping
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Become a Vendor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
