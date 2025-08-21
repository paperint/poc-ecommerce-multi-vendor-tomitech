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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MoreHorizontal,
  Eye,
  MessageCircle,
  Package,
  Truck,
} from "lucide-react";

const orders = [
  {
    id: "#ORD-001",
    customer: {
      name: "John Smith",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    products: [{ name: "Wireless Headphones", quantity: 1, price: 89.99 }],
    total: 89.99,
    status: "completed",
    paymentStatus: "paid",
    shippingAddress: "123 Main St, New York, NY 10001",
    orderDate: "2024-01-15",
    shippedDate: "2024-01-16",
    trackingNumber: "TRK123456789",
  },
  {
    id: "#ORD-002",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    products: [{ name: "Gaming Keyboard", quantity: 1, price: 129.99 }],
    total: 129.99,
    status: "processing",
    paymentStatus: "paid",
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90210",
    orderDate: "2024-01-14",
    shippedDate: null,
    trackingNumber: null,
  },
  {
    id: "#ORD-003",
    customer: {
      name: "Mike Chen",
      email: "mike@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    products: [{ name: "4K Webcam", quantity: 1, price: 199.99 }],
    total: 199.99,
    status: "shipped",
    paymentStatus: "paid",
    shippingAddress: "789 Pine St, Chicago, IL 60601",
    orderDate: "2024-01-13",
    shippedDate: "2024-01-14",
    trackingNumber: "TRK987654321",
  },
  {
    id: "#ORD-004",
    customer: {
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    products: [{ name: "Wireless Charger", quantity: 2, price: 39.99 }],
    total: 79.98,
    status: "pending",
    paymentStatus: "pending",
    shippingAddress: "321 Elm St, Miami, FL 33101",
    orderDate: "2024-01-12",
    shippedDate: null,
    trackingNumber: null,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
    case "processing":
      return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
    case "shipped":
      return <Badge className="bg-purple-100 text-purple-800">Shipped</Badge>;
    case "pending":
      return <Badge variant="secondary">Pending</Badge>;
    case "cancelled":
      return <Badge variant="destructive">Cancelled</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getPaymentBadge = (status: string) => {
  switch (status) {
    case "paid":
      return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    case "failed":
      return <Badge variant="destructive">Failed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function VendorOrders() {
  return (
    <div className="min-h-screen bg-muted/30">
      <VendorSidebar />

      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Orders</h1>
              <p className="text-muted-foreground">
                Manage and track your customer orders
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Export Orders</Button>
              <Button>Process Orders</Button>
            </div>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search orders..." className="pl-10" />
                </div>

                <div className="flex gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Payment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Payments</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="recent">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Recent</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders ({orders.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-6 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Order Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          {getStatusBadge(order.status)}
                          {getPaymentBadge(order.paymentStatus)}
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage
                              src={order.customer.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback>
                              {order.customer.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{order.customer.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {order.customer.email}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-1">
                          {order.products.map((product, index) => (
                            <p key={index} className="text-sm">
                              {product.quantity}x {product.name} - $
                              {product.price}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Order Details */}
                      <div className="lg:text-right space-y-2">
                        <p className="text-2xl font-bold text-primary">
                          ${order.total}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Ordered: {order.orderDate}
                        </p>
                        {order.shippedDate && (
                          <p className="text-sm text-muted-foreground">
                            Shipped: {order.shippedDate}
                          </p>
                        )}
                        {order.trackingNumber && (
                          <p className="text-sm font-medium">
                            Tracking: {order.trackingNumber}
                          </p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex lg:flex-col gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>

                        {order.status === "processing" && (
                          <Button size="sm">
                            <Package className="h-4 w-4 mr-2" />
                            Ship
                          </Button>
                        )}

                        {order.status === "shipped" && (
                          <Button size="sm" variant="outline">
                            <Truck className="h-4 w-4 mr-2" />
                            Track
                          </Button>
                        )}

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Message Customer
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Package className="h-4 w-4 mr-2" />
                              Update Status
                            </DropdownMenuItem>
                            <DropdownMenuItem>Print Invoice</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Shipping Address:</strong>{" "}
                        {order.shippingAddress}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="default">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
