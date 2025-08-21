/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Minus,
  Plus,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

const product = {
  id: 1,
  name: "Wireless Bluetooth Headphones Premium Quality",
  price: 89.99,
  originalPrice: 129.99,
  rating: 4.5,
  reviews: 234,
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  vendor: {
    id: 1,
    name: "TechHub Store",
    rating: 4.8,
    reviews: 1250,
    verified: true,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  badge: "Best Seller",
  badgeColor: "bg-primary text-primary-foreground",
  inStock: true,
  stockCount: 15,
  description:
    "Experience premium audio quality with these wireless Bluetooth headphones. Featuring advanced noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Quick charge: 5 min = 3 hours",
    "Premium comfort fit",
    "High-resolution audio",
    "Built-in microphone",
  ],
  specifications: {
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    Impedance: "32 ohms",
    "Battery Life": "30 hours",
    "Charging Time": "2 hours",
    Weight: "250g",
  },
};

const reviews = [
  {
    id: 1,
    user: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Excellent sound quality and very comfortable to wear for long periods. The noise cancellation works great!",
    helpful: 12,
  },
  {
    id: 2,
    user: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Good headphones overall. Battery life is impressive and the build quality feels premium.",
    helpful: 8,
  },
  {
    id: 3,
    user: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-05",
    comment:
      "Best headphones I've owned. Worth every penny. Fast shipping from TechHub Store too!",
    helpful: 15,
  },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/marketplace" className="hover:text-primary">
            Marketplace
          </Link>
          <span className="mx-2">/</span>
          <Link href="/category/electronics" className="hover:text-primary">
            Electronics
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={product.badgeColor}>{product.badge}</Badge>
                {product.inStock ? (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    In Stock
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800"
                  >
                    Out of Stock
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="font-semibold ml-2">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </Badge>
                )}
              </div>
            </div>

            {/* Vendor Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={product.vendor.avatar || "/placeholder.svg"}
                      />
                      <AvatarFallback>{product.vendor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/vendor/${product.vendor.id}`}
                          className="font-semibold hover:text-primary"
                        >
                          {product.vendor.name}
                        </Link>
                        {product.vendor.verified && (
                          <Badge className="bg-primary text-primary-foreground">
                            ✓
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>
                          {product.vendor.rating} ({product.vendor.reviews}{" "}
                          reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/vendor/${product.vendor.id}`}>
                      Visit Store
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.stockCount} items available
                </span>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Secure Payment</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Fast Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b"
                      >
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage
                          src={review.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold">{review.user}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {review.comment}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <button className="text-muted-foreground hover:text-primary">
                            Helpful ({review.helpful})
                          </button>
                          <button className="text-muted-foreground hover:text-primary">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
