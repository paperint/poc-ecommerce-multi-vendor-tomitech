import { VendorSidebar } from "@/components/vendor-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  Package,
  ShoppingCart,
  DollarSign,
  Users,
  Eye,
  Star,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total Revenue",
    value: "$12,847",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Products",
    value: "34",
    change: "+2",
    trend: "up",
    icon: Package,
    color: "text-purple-600",
  },
  {
    title: "Customers",
    value: "1,247",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    color: "text-orange-600",
  },
];

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "John Smith",
    product: "Wireless Headphones",
    amount: "$89.99",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#ORD-002",
    customer: "Sarah Johnson",
    product: "Gaming Keyboard",
    amount: "$129.99",
    status: "processing",
    date: "2024-01-14",
  },
  {
    id: "#ORD-003",
    customer: "Mike Chen",
    product: "4K Webcam",
    amount: "$199.99",
    status: "shipped",
    date: "2024-01-13",
  },
  {
    id: "#ORD-004",
    customer: "Emily Davis",
    product: "Wireless Charger",
    amount: "$39.99",
    status: "pending",
    date: "2024-01-12",
  },
];

const topProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    sales: 45,
    revenue: "$4,049.55",
    views: 1234,
    rating: 4.8,
  },
  {
    name: "Mechanical Gaming Keyboard",
    sales: 32,
    revenue: "$4,159.68",
    views: 892,
    rating: 4.7,
  },
  {
    name: "4K Webcam for Streaming",
    sales: 28,
    revenue: "$5,599.72",
    views: 756,
    rating: 4.6,
  },
];

const alerts = [
  {
    type: "warning",
    message: "Low stock alert: Wireless Headphones (5 remaining)",
    action: "Restock",
  },
  {
    type: "info",
    message: "New review received for Gaming Keyboard",
    action: "View",
  },
  {
    type: "success",
    message: "Payment of $1,247.50 has been processed",
    action: "Details",
  },
];

export default function VendorDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <VendorSidebar />

      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                {`Welcome back! Here's what's happening with your store.`}
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/vendor/products/new">Add Product</Link>
              </Button>
              <Button asChild>
                <Link href="/vendor/orders">View Orders</Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <div className="flex items-center mt-1">
                        {stat.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                        )}
                        <span
                          className={`text-sm ${
                            stat.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/vendor/orders">View All</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-medium">{order.id}</span>
                            <Badge
                              variant={
                                order.status === "completed"
                                  ? "default"
                                  : order.status === "processing"
                                  ? "secondary"
                                  : order.status === "shipped"
                                  ? "outline"
                                  : "destructive"
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {order.customer}
                          </p>
                          <p className="text-sm">{order.product}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{order.amount}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alerts & Notifications */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.map((alert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 border rounded-lg"
                      >
                        {alert.type === "warning" && (
                          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        )}
                        {alert.type === "info" && (
                          <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                        )}
                        {alert.type === "success" && (
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{alert.message}</p>
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-xs"
                          >
                            {alert.action}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Store Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Goal</span>
                      <span>$12,847 / $15,000</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Customer Satisfaction</span>
                      <span>4.8/5.0</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Order Fulfillment</span>
                      <span>98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Products */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Top Performing Products</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/vendor/analytics">View Analytics</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topProducts.map((product, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-3 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sales:</span>
                        <span className="font-medium">{product.sales}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revenue:</span>
                        <span className="font-medium text-green-600">
                          {product.revenue}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Views:</span>
                        <span className="font-medium">{product.views}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
