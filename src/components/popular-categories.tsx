import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const categories = [
  {
    name: "Electronics",
    count: "2,450",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Fashion",
    count: "3,200",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-pink-100 text-pink-800",
  },
  {
    name: "Home & Garden",
    count: "1,800",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Sports",
    count: "950",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Books",
    count: "1,200",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "Beauty",
    count: "1,600",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-rose-100 text-rose-800",
  },
]

export function PopularCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our most popular product categories and discover amazing deals from trusted vendors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-center mb-2">{category.name}</h3>
                  <div className="flex justify-center">
                    <Badge variant="secondary" className={category.color}>
                      {category.count} items
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
