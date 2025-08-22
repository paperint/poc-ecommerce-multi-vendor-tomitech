/* eslint-disable @next/next/no-img-element */
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, Award, MessageCircle } from "lucide-react";

const vendor = {
  id: 1,
  name: "Tomi Store",
  description:
    "Premium electronics and gadgets retailer specializing in cutting-edge technology products. We've been serving customers worldwide since 2018 with a commitment to quality and customer satisfaction.",
  rating: 4.8,
  reviews: 1250,
  products: 340,
  location: "New York, USA",
  joinDate: "2018-03-15",
  avatar: "/placeholder.svg?height=120&width=120",
  banner: "/placeholder.svg?height=300&width=1200",
  verified: true,
  badges: ["Top Seller", "Fast Shipping", "Excellent Service"],
  stats: {
    totalSales: "50K+",
    responseTime: "< 2 hours",
    shippingTime: "1-3 days",
    returnRate: "< 1%",
  },
};

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones Premium",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Tomi Store",
    badge: "Best Seller",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 7,
    name: "Mechanical Gaming Keyboard RGB",
    price: 129.99,
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Tomi Store",
    badge: "Gaming",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 9,
    name: "4K Webcam for Streaming",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Tomi Store",
    badge: "Sale",
    badgeColor: "bg-destructive text-destructive-foreground",
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    price: 39.99,
    rating: 4.4,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Tomi Store",
    badge: "New",
    badgeColor: "bg-accent text-accent-foreground",
  },
];

const recentReviews = [
  {
    id: 1,
    user: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Excellent service and fast shipping. Product exactly as described!",
    product: "Wireless Headphones",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-12",
    comment: "Great communication from seller. Highly recommend this store!",
    product: "Gaming Keyboard",
  },
  {
    id: 3,
    user: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-10",
    comment: "Good quality products and reasonable prices. Will shop again.",
    product: "4K Webcam",
  },
];

export default function VendorPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Vendor Banner */}
        <section className="relative">
          <div className="h-64 bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden">
            <img
              src={vendor.banner || "/placeholder.svg"}
              alt={`${vendor.name} banner`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4">
            <div className="relative -mt-16 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Avatar className="w-24 h-24">
                        <AvatarImage
                          src={vendor.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback className="text-2xl">
                          {vendor.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h1 className="text-2xl font-bold">
                              {vendor.name}
                            </h1>
                            {vendor.verified && (
                              <Badge className="bg-primary text-primary-foreground">
                                ✓ Verified
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">
                                {vendor.rating}
                              </span>
                              <span>({vendor.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{vendor.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                Joined {new Date(vendor.joinDate).getFullYear()}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {vendor.badges.map((badge) => (
                              <Badge key={badge} variant="secondary">
                                <Award className="h-3 w-3 mr-1" />
                                {badge}
                              </Badge>
                            ))}
                          </div>

                          <p className="text-muted-foreground">
                            {vendor.description}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Button>
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact Seller
                          </Button>
                          <Button variant="outline">Follow Store</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Vendor Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {vendor.stats.totalSales}
                </div>
                <div className="text-sm text-muted-foreground">Total Sales</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {vendor.stats.responseTime}
                </div>
                <div className="text-sm text-muted-foreground">
                  Response Time
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {vendor.stats.shippingTime}
                </div>
                <div className="text-sm text-muted-foreground">
                  Shipping Time
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {vendor.stats.returnRate}
                </div>
                <div className="text-sm text-muted-foreground">Return Rate</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Store Products ({vendor.products})
                </h2>
                <Button variant="outline">View All Products</Button>
              </div>
              <ProductGrid products={products} columns={2} />
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            src={review.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>{review.user[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">
                              {review.user}
                            </span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {review.comment}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {review.product} • {review.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
