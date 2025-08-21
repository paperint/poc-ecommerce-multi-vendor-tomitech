import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminSidebar } from "@/components/admin-sidebar";
import {
  Users,
  Store,
  Package,
  DollarSign,
  TrendingUp,
  ShoppingCart,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Vendors",
      value: "1,234",
      change: "+8%",
      icon: Store,
      color: "text-emerald-600",
    },
    {
      title: "Total Products",
      value: "45,678",
      change: "+15%",
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "$234,567",
      change: "+23%",
      icon: DollarSign,
      color: "text-green-600",
    },
  ];

  const recentOrders = [
    {
      id: "#12345",
      customer: "John Doe",
      vendor: "Tech Store",
      amount: "$299.99",
      status: "completed",
    },
    {
      id: "#12346",
      customer: "Jane Smith",
      vendor: "Fashion Hub",
      amount: "$89.50",
      status: "processing",
    },
    {
      id: "#12347",
      customer: "Mike Johnson",
      vendor: "Home Goods",
      amount: "$156.75",
      status: "shipped",
    },
    {
      id: "#12348",
      customer: "Sarah Wilson",
      vendor: "Electronics Plus",
      amount: "$445.20",
      status: "pending",
    },
  ];

  const pendingActions = [
    { type: "Vendor Applications", count: 12, priority: "high" },
    { type: "Product Reviews", count: 45, priority: "medium" },
    { type: "Dispute Reports", count: 3, priority: "high" },
    { type: "Refund Requests", count: 8, priority: "medium" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Overview of your marketplace performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-600">
                        {order.customer} • {order.vendor}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.amount}</p>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.status === "shipped"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Pending Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingActions.map((action) => (
                  <div
                    key={action.type}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {action.priority === "high" ? (
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-yellow-500" />
                      )}
                      <span className="font-medium">{action.type}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        action.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {action.count} pending
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
