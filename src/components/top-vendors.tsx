import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import Link from "next/link";

const vendors = [
  {
    id: 1,
    name: "Tomi Store",
    description: "Premium electronics and gadgets",
    rating: 4.8,
    reviews: 1250,
    products: 340,
    location: "New York, USA",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
  },
  {
    id: 2,
    name: "Fashion Forward",
    description: "Trendy clothing and accessories",
    rating: 4.9,
    reviews: 890,
    products: 520,
    location: "Los Angeles, USA",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
  },
  {
    id: 3,
    name: "Home Essentials",
    description: "Quality home and garden products",
    rating: 4.7,
    reviews: 650,
    products: 280,
    location: "Chicago, USA",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
  },
  {
    id: 4,
    name: "Sports Central",
    description: "Athletic gear and equipment",
    rating: 4.6,
    reviews: 420,
    products: 190,
    location: "Miami, USA",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
  },
];

export function TopVendors() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Top Rated Vendors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Shop with confidence from our highest-rated vendors who consistently
            deliver quality products and excellent service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <Card
              key={vendor.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={vendor.image || "/placeholder.svg"}
                      alt={vendor.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    {vendor.verified && (
                      <Badge className="absolute -top-1 -right-1 bg-primary text-primary-foreground">
                        ✓
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-bold text-lg mb-2">{vendor.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {vendor.description}
                  </p>

                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{vendor.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({vendor.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-1 mb-4 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{vendor.location}</span>
                  </div>

                  <div className="text-sm text-muted-foreground mb-4">
                    {vendor.products} Products
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/vendor/${vendor.id}`}>Visit Store</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/vendors">View All Vendors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
