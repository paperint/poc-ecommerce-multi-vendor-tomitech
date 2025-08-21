"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  User,
  CreditCard,
  Settings,
  Menu,
  X,
  Store,
  Bell,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/vendor/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/vendor/products", icon: Package, badge: "12" },
  { name: "Orders", href: "/vendor/orders", icon: ShoppingCart, badge: "3" },
  { name: "Analytics", href: "/vendor/analytics", icon: BarChart3 },
  { name: "Profile", href: "/vendor/profile", icon: User },
  { name: "Payments", href: "/vendor/payment", icon: CreditCard },
];

export function VendorSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const vendor = {
    name: "TechHub Store",
    email: "contact@techhub.com",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Store className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Vendor Portal</span>
            </div>

            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={vendor.avatar || "/placeholder.svg"} />
                <AvatarFallback>{vendor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium truncate">{vendor.name}</p>
                  {vendor.verified && (
                    <Badge className="bg-primary text-primary-foreground text-xs">
                      ✓
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {vendor.email}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <Badge
                      variant={isActive ? "secondary" : "default"}
                      className="text-xs"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/vendor/settings">
                <Settings className="h-4 w-4 mr-3" />
                Settings
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start mt-2">
              <Bell className="h-4 w-4 mr-3" />
              Notifications
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
