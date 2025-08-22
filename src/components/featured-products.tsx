import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 234,
    image: "/placeholder.svg?height=250&width=250",
    vendor: "Tomi Store",
    badge: "Best Seller",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=250&width=250",
    vendor: "Fashion Forward",
    badge: "Sale",
    badgeColor: "bg-destructive text-destructive-foreground",
  },
  {
    id: 3,
    name: "Smart Home Security Camera",
    price: 149.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=250&width=250",
    vendor: "Home Essentials",
    badge: "New",
    badgeColor: "bg-accent text-accent-foreground",
  },
  {
    id: 4,
    name: "Professional Yoga Mat",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=250&width=250",
    vendor: "Sports Central",
    badge: "Eco-Friendly",
    badgeColor: "bg-secondary text-secondary-foreground",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 312,
    image: "/placeholder.svg?height=250&width=250",
    vendor: "Sports Central",
    badge: "Top Rated",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 6,
    name: "Organic Skincare Set",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 145,
    image: "/placeholder.svg?height=250&width=250",
    vendor: "Beauty Essentials",
    badge: "Limited",
    badgeColor: "bg-accent text-accent-foreground",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of trending products from verified
            vendors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge
                    className={`absolute top-2 left-2 ${product.badgeColor}`}
                  >
                    {product.badge}
                  </Badge>
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
                    <h3 className="font-semibold text-sm hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-muted-foreground">
                    {product.vendor}
                  </p>

                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button size="sm" className="w-full">
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/marketplace">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
