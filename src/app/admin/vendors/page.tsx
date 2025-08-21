import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminSidebar } from "@/components/admin-sidebar";
import {
  Search,
  Filter,
  MoreHorizontal,
  Store,
  Clock,
  CheckCircle,
  XCircle,
  Star,
} from "lucide-react";

export default function AdminVendors() {
  const vendors = [
    {
      id: 1,
      name: "Tech Store Pro",
      owner: "John Smith",
      email: "john@techstore.com",
      status: "approved",
      joinDate: "2024-01-15",
      products: 45,
      rating: 4.8,
      revenue: "$12,345",
    },
    {
      id: 2,
      name: "Fashion Hub",
      owner: "Sarah Johnson",
      email: "sarah@fashionhub.com",
      status: "pending",
      joinDate: "2024-03-20",
      products: 0,
      rating: 0,
      revenue: "$0",
    },
    {
      id: 3,
      name: "Home Goods Plus",
      owner: "Mike Wilson",
      email: "mike@homegoods.com",
      status: "approved",
      joinDate: "2024-02-10",
      products: 78,
      rating: 4.6,
      revenue: "$8,920",
    },
    {
      id: 4,
      name: "Electronics World",
      owner: "Lisa Brown",
      email: "lisa@electronics.com",
      status: "suspended",
      joinDate: "2024-01-05",
      products: 23,
      rating: 3.2,
      revenue: "$2,156",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Vendor Management
          </h1>
          <p className="text-gray-600 mt-2">
            Manage vendor accounts and applications
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Store className="h-8 w-8 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Vendors</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold">1,156</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <XCircle className="h-8 w-8 text-red-600" />
                <div>
                  <p className="text-sm text-gray-600">Suspended</p>
                  <p className="text-2xl font-bold">33</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vendors Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Vendors</CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search vendors..."
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Vendor
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Join Date
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Products
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Rating
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Revenue
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr
                      key={vendor.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-gray-900">
                            {vendor.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {vendor.owner} • {vendor.email}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            vendor.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : vendor.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">
                        {vendor.joinDate}
                      </td>
                      <td className="py-4 px-4 text-gray-600">
                        {vendor.products}
                      </td>
                      <td className="py-4 px-4">
                        {vendor.rating > 0 ? (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-gray-900">
                              {vendor.rating}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-400">No ratings</span>
                        )}
                      </td>
                      <td className="py-4 px-4 font-medium text-gray-900">
                        {vendor.revenue}
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
