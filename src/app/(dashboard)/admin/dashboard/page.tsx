// app/(dashboard)/vendor/dashboard/page.tsx
import React from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart2,
  User,
  LogOut,
} from "lucide-react";

const AdminDashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">Vendor Panel</div>
        <nav className="flex-1 px-4">
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 bg-gray-700 rounded">
                <LayoutDashboard className="mr-3" /> Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <Package className="mr-3" /> Product Management
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <ShoppingCart className="mr-3" /> Order Management
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <BarChart2 className="mr-3" /> Sales Analytics
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <User className="mr-3" /> Profile Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <LogOut className="mr-3" /> Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500">Total Revenue</h3>
            <p className="text-3xl font-bold">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500">Total Orders</h3>
            <p className="text-3xl font-bold">250</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500">New Customers</h3>
            <p className="text-3xl font-bold">32</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500">Pending Products</h3>
            <p className="text-3xl font-bold">5</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Date</th>
                <th className="p-2">Total</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Row */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-2">#12345</td>
                <td className="p-2">John Doe</td>
                <td className="p-2">2025-08-21</td>
                <td className="p-2">$199.99</td>
                <td className="p-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">
                    Shipped
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-2">#12346</td>
                <td className="p-2">Jane Smith</td>
                <td className="p-2">2025-08-20</td>
                <td className="p-2">$49.99</td>
                <td className="p-2">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">
                    Processing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
