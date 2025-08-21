import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  vendor: string
  badge?: string
  badgeColor?: string
}

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4 | 5 | 6
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6",
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-4">
            <div className="relative mb-4">
              <Link href={`/product/${product.id}`}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              {product.badge && (
                <Badge
                  className={`absolute top-2 left-2 ${product.badgeColor || "bg-primary text-primary-foreground"}`}
                >
                  {product.badge}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 hover:bg-background"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
              </Link>

              <Link href={`/vendor/${product.vendor.toLowerCase().replace(/\s+/g, "-")}`}>
                <p className="text-sm text-muted-foreground hover:text-primary transition-colors">{product.vendor}</p>
              </Link>

              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews})</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>

              <Button className="w-full">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
