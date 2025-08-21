/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { VendorSidebar } from "@/components/vendor-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Copy,
  Grid3X3,
  List,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones Premium Quality",
    sku: "WBH-001",
    price: 89.99,
    stock: 15,
    status: "active",
    category: "Electronics",
    image: "/placeholder.svg?height=80&width=80",
    sales: 45,
    views: 1234,
    rating: 4.8,
    created: "2024-01-10",
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard RGB",
    sku: "MGK-002",
    price: 129.99,
    stock: 8,
    status: "active",
    category: "Electronics",
    image: "/placeholder.svg?height=80&width=80",
    sales: 32,
    views: 892,
    rating: 4.7,
    created: "2024-01-08",
  },
  {
    id: 3,
    name: "4K Webcam for Streaming",
    sku: "4KW-003",
    price: 199.99,
    stock: 0,
    status: "out_of_stock",
    category: "Electronics",
    image: "/placeholder.svg?height=80&width=80",
    sales: 28,
    views: 756,
    rating: 4.6,
    created: "2024-01-05",
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    sku: "WCP-004",
    price: 39.99,
    stock: 25,
    status: "draft",
    category: "Electronics",
    image: "/placeholder.svg?height=80&width=80",
    sales: 0,
    views: 45,
    rating: 0,
    created: "2024-01-15",
  },
];

export default function VendorProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      case "out_of_stock":
        return <Badge variant="destructive">Out of Stock</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { color: "text-red-600", text: "Out of stock" };
    if (stock < 10) return { color: "text-yellow-600", text: "Low stock" };
    return { color: "text-green-600", text: "In stock" };
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <VendorSidebar />

      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Products</h1>
              <p className="text-muted-foreground">
                Manage your product inventory and listings
              </p>
            </div>
            <Button asChild>
              <Link href="/vendor/products/new">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Link>
            </Button>
          </div>

          {/* Filters and Search */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex gap-1">
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products List */}
          <Card>
            <CardHeader>
              <CardTitle>Your Products ({products.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {viewMode === "list" ? (
                <div className="space-y-4">
                  {products.map((product) => {
                    const stockStatus = getStockStatus(product.stock);
                    return (
                      <div
                        key={product.id}
                        className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50"
                      >
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold truncate">
                              {product.name}
                            </h3>
                            {getStatusBadge(product.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            SKU: {product.sku}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="font-medium">
                              ${product.price}
                            </span>
                            <span className={stockStatus.color}>
                              {product.stock} units • {stockStatus.text}
                            </span>
                            <span className="text-muted-foreground">
                              {product.sales} sold
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-muted-foreground mb-1">
                            {product.views} views
                          </p>
                          <p className="text-sm font-medium">
                            Rating: {product.rating || "N/A"}
                          </p>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/product/${product.id}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Product
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/vendor/products/${product.id}/edit`}
                              >
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="h-4 w-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => {
                    const stockStatus = getStockStatus(product.stock);
                    return (
                      <Card
                        key={product.id}
                        className="group hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="p-4">
                          <div className="relative mb-4">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                            <div className="absolute top-2 left-2">
                              {getStatusBadge(product.status)}
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link href={`/product/${product.id}`}>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/vendor/products/${product.id}/edit`}
                                  >
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Copy className="h-4 w-4 mr-2" />
                                  Duplicate
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-semibold line-clamp-2">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              SKU: {product.sku}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-primary">
                                ${product.price}
                              </span>
                              <span className={`text-sm ${stockStatus.color}`}>
                                {product.stock} units
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{product.sales} sold</span>
                              <span>{product.views} views</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
