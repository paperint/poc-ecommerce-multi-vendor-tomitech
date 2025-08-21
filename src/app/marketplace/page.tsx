"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductFilters } from "@/components/product-filters";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Grid3X3, List, SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones Premium Quality",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "TechHub Store",
    badge: "Best Seller",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt Comfortable Fit",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Fashion Forward",
    badge: "Sale",
    badgeColor: "bg-destructive text-destructive-foreground",
  },
  {
    id: 3,
    name: "Smart Home Security Camera HD",
    price: 149.99,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Home Essentials",
    badge: "New",
    badgeColor: "bg-accent text-accent-foreground",
  },
  {
    id: 4,
    name: "Professional Yoga Mat Non-Slip",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Sports Central",
    badge: "Eco-Friendly",
    badgeColor: "bg-secondary text-secondary-foreground",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle Insulated",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 312,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Sports Central",
    badge: "Top Rated",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 6,
    name: "Organic Skincare Set Natural Ingredients",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 145,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Beauty Essentials",
    badge: "Limited",
    badgeColor: "bg-accent text-accent-foreground",
  },
  {
    id: 7,
    name: "Mechanical Gaming Keyboard RGB",
    price: 129.99,
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "TechHub Store",
    badge: "Gaming",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 8,
    name: "Designer Sunglasses UV Protection",
    price: 89.99,
    originalPrice: 120.99,
    rating: 4.3,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Fashion Forward",
    badge: "Designer",
    badgeColor: "bg-accent text-accent-foreground",
  },
];

export default function MarketplacePage() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">
            Discover amazing products from trusted vendors
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>

            {/* Sort */}
            <Select defaultValue="relevance">
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="font-medium">1-{products.length}</span>{" "}
              of <span className="font-medium">2,847</span> results
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Electronics</Badge>
              <Badge variant="secondary">$0 - $1000</Badge>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`w-80 space-y-6 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <ProductFilters />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={products} columns={4} />

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <span className="px-2">...</span>
                <Button variant="outline">24</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
