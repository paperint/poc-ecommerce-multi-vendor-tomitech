import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminSidebar } from "@/components/admin-sidebar";
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Calendar,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminAnalytics() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$234,567",
      change: "+23%",
      period: "vs last month",
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: "12,543",
      change: "+15%",
      period: "vs last month",
      icon: ShoppingCart,
    },
    {
      title: "New Customers",
      value: "1,234",
      change: "+8%",
      period: "vs last month",
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5%",
      period: "vs last month",
      icon: TrendingUp,
    },
  ];

  const topCategories = [
    { name: "Electronics", sales: "$45,678", percentage: 35 },
    { name: "Fashion", sales: "$32,456", percentage: 25 },
    { name: "Home & Garden", sales: "$28,901", percentage: 22 },
    { name: "Sports", sales: "$15,432", percentage: 12 },
    { name: "Books", sales: "$8,100", percentage: 6 },
  ];

  const topVendors = [
    { name: "Tech Store Pro", revenue: "$12,345", orders: 234 },
    { name: "Fashion Hub", revenue: "$9,876", orders: 189 },
    { name: "Home Goods Plus", revenue: "$8,920", orders: 156 },
    { name: "Electronics World", revenue: "$7,654", orders: 134 },
    { name: "Sports Central", revenue: "$6,543", orders: 112 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Analytics & Reports
              </h1>
              <p className="text-gray-600 mt-2">
                Comprehensive marketplace performance insights
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Last 30 days
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {metric.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {metric.value}
                      </p>
                      <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3" />
                        {metric.change} {metric.period}
                      </p>
                    </div>
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Top Categories by Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCategories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {category.sales}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Vendors */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topVendors.map((vendor, index) => (
                  <div
                    key={vendor.name}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-emerald-700">
                          #{index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {vendor.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {vendor.orders} orders
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        {vendor.revenue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                Revenue chart would be displayed here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
