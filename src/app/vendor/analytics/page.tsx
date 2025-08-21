import { VendorSidebar } from "@/components/vendor-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Eye,
  Star,
} from "lucide-react";
import { BarChart3 } from "lucide-react"; // Import BarChart3

const stats = [
  {
    title: "Total Revenue",
    value: "$12,847",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    description: "vs last month",
  },
  {
    title: "Customers",
    value: "1,247",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Page Views",
    value: "8,432",
    change: "-2.1%",
    trend: "down",
    icon: Eye,
    description: "vs last month",
  },
];

const topProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    revenue: "$4,049.55",
    sales: 45,
    views: 1234,
    conversion: 3.6,
    rating: 4.8,
  },
  {
    name: "Mechanical Gaming Keyboard",
    revenue: "$4,159.68",
    sales: 32,
    views: 892,
    conversion: 3.6,
    rating: 4.7,
  },
  {
    name: "4K Webcam for Streaming",
    revenue: "$5,599.72",
    sales: 28,
    views: 756,
    conversion: 3.7,
    rating: 4.6,
  },
  {
    name: "Wireless Charging Pad",
    revenue: "$999.75",
    sales: 25,
    views: 543,
    conversion: 4.6,
    rating: 4.4,
  },
];

const categoryPerformance = [
  { name: "Electronics", revenue: "$8,450", percentage: 65.8, growth: "+12%" },
  { name: "Accessories", revenue: "$2,890", percentage: 22.5, growth: "+8%" },
  { name: "Gaming", revenue: "$1,507", percentage: 11.7, growth: "+15%" },
];

const monthlyData = [
  { month: "Jan", revenue: 8500, orders: 120 },
  { month: "Feb", revenue: 9200, orders: 135 },
  { month: "Mar", revenue: 10800, orders: 148 },
  { month: "Apr", revenue: 11500, orders: 162 },
  { month: "May", revenue: 12100, orders: 171 },
  { month: "Jun", revenue: 12847, orders: 156 },
];

export default function VendorAnalytics() {
  return (
    <div className="min-h-screen bg-muted/30">
      <VendorSidebar />

      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Analytics</h1>
              <p className="text-muted-foreground">
                Track your store performance and sales metrics
              </p>
            </div>
            <div className="flex gap-3">
              <Select defaultValue="30days">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="1year">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export Report</Button>
            </div>
          </div>

          {/* Key Metrics */}
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
                        <span className="text-sm text-muted-foreground ml-1">
                          {stat.description}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-full bg-muted">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Revenue chart would be displayed here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Monthly revenue: $
                      {monthlyData[
                        monthlyData.length - 1
                      ].revenue.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Category Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryPerformance.map((category) => (
                    <div key={category.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{category.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-green-600">
                            {category.growth}
                          </span>
                          <span className="font-semibold">
                            {category.revenue}
                          </span>
                        </div>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {category.percentage}% of total revenue
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{product.sales} sales</span>
                        <span>{product.views} views</span>
                        <span>{product.conversion}% conversion</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-green-600">
                        {product.revenue}
                      </p>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Goals */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Monthly Revenue Goal</span>
                    <span className="text-sm">$12,847 / $15,000</span>
                  </div>
                  <Progress value={85.6} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    85.6% completed
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Orders Target</span>
                    <span className="text-sm">156 / 200</span>
                  </div>
                  <Progress value={78} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    78% completed
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Customer Satisfaction</span>
                    <span className="text-sm">4.8 / 5.0</span>
                  </div>
                  <Progress value={96} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    96% rating
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
