import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categoryData = {
  electronics: {
    name: "Electronics",
    description:
      "Discover the latest in technology with our comprehensive electronics collection. From smartphones and laptops to smart home devices and gaming gear.",
    image: "/placeholder.svg?height=300&width=1200",
    productCount: 2450,
    subcategories: [
      "Smartphones",
      "Laptops",
      "Headphones",
      "Smart Home",
      "Gaming",
      "Cameras",
    ],
  },
};

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    price: 1199.99,
    rating: 4.8,
    reviews: 1234,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "TechHub Store",
    badge: "Latest",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 2,
    name: "MacBook Air M2 13-inch",
    price: 999.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 856,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Apple Store",
    badge: "Sale",
    badgeColor: "bg-destructive text-destructive-foreground",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: 349.99,
    rating: 4.7,
    reviews: 567,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Audio Pro",
    badge: "Best Seller",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    id: 4,
    name: 'Samsung 4K Smart TV 55"',
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.6,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    vendor: "Electronics Plus",
    badge: "Deal",
    badgeColor: "bg-accent text-accent-foreground",
  },
];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("slug: ", slug);

  const category =
    categoryData[slug as keyof typeof categoryData] || categoryData.electronics;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Category Banner */}
        <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {category.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                {category.description}
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {category.productCount.toLocaleString()} Products Available
              </Badge>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Subcategories */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shop by Subcategory</h2>
            <div className="flex flex-wrap gap-3">
              {category.subcategories.map((subcategory) => (
                <Button
                  key={subcategory}
                  variant="outline"
                  className="rounded-full bg-transparent"
                >
                  {subcategory}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort and Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium">1-{products.length}</span>{" "}
              of{" "}
              <span className="font-medium">
                {category.productCount.toLocaleString()}
              </span>{" "}
              products
            </p>

            <div className="flex gap-4">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-48">
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
            </div>
          </div>

          {/* Products Grid */}
          <ProductGrid products={products} columns={4} />

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Load More Products
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
