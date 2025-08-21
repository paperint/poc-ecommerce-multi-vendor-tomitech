"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CartItem } from "@/components/cart-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Truck, Shield, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const initialCartItems = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones Premium Quality",
    price: 89.99,
    originalPrice: 129.99,
    image: "/placeholder.svg?height=80&width=80",
    vendor: "TechHub Store",
    vendorId: 1,
    quantity: 1,
    inStock: true,
    maxQuantity: 15,
    attributes: {
      color: "Black",
      variant: "Premium",
    },
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard RGB",
    price: 129.99,
    image: "/placeholder.svg?height=80&width=80",
    vendor: "TechHub Store",
    vendorId: 1,
    quantity: 1,
    inStock: true,
    maxQuantity: 8,
    attributes: {
      color: "Black",
      variant: "RGB",
    },
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=80&width=80",
    vendor: "Fashion Forward",
    vendorId: 2,
    quantity: 2,
    inStock: true,
    maxQuantity: 25,
    attributes: {
      color: "Navy",
      size: "L",
    },
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "/placeholder.svg?height=80&width=80",
    vendor: "Electronics Plus",
    vendorId: 3,
    quantity: 1,
    inStock: false,
    maxQuantity: 0,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleMoveToWishlist = (id: number) => {
    // In a real app, this would move the item to wishlist
    handleRemoveItem(id);
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo("SAVE10");
      setPromoCode("");
    }
  };

  // Group items by vendor
  const itemsByVendor = cartItems.reduce((acc, item) => {
    const vendorKey = `${item.vendorId}-${item.vendor}`;
    if (!acc[vendorKey]) {
      acc[vendorKey] = {
        vendor: item.vendor,
        vendorId: item.vendorId,
        items: [],
      };
    }
    acc[vendorKey].items.push(item);
    return acc;
  }, {} as Record<string, { vendor: string; vendorId: number; items: typeof cartItems }>);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const promoDiscount = appliedPromo === "SAVE10" ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              {`Looks like you haven't added any items to your cart yet. Start
              shopping to fill it up!`}
            </p>
            <Button size="lg" asChild>
              <Link href="/marketplace">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {Object.entries(itemsByVendor).map(([vendorKey, vendorGroup]) => (
                <Card key={vendorKey}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        <Link
                          href={`/vendor/${vendorGroup.vendorId}`}
                          className="hover:text-primary transition-colors"
                        >
                          {vendorGroup.vendor}
                        </Link>
                      </CardTitle>
                      <Badge variant="outline">
                        {vendorGroup.items.length}{" "}
                        {vendorGroup.items.length === 1 ? "item" : "items"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {vendorGroup.items.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemoveItem}
                        onMoveToWishlist={handleMoveToWishlist}
                      />
                    ))}

                    {/* Vendor-specific shipping info */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
                      <Truck className="h-4 w-4" />
                      <span>Ships from {vendorGroup.vendor}</span>
                      <span>•</span>
                      <span>Free shipping on orders over $50</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Continue Shopping */}
              <div className="flex justify-between items-center">
                <Button variant="outline" asChild>
                  <Link href="/marketplace">Continue Shopping</Link>
                </Button>
                <Button variant="ghost" onClick={() => setCartItems([])}>
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>

                    {appliedPromo && (
                      <div className="flex justify-between text-green-600">
                        <span>Promo ({appliedPromo})</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={handleApplyPromo}>
                        <Tag className="h-4 w-4 mr-1" />
                        Apply
                      </Button>
                    </div>
                    {appliedPromo && (
                      <p className="text-sm text-green-600">
                        Promo code {appliedPromo} applied! You saved $
                        {promoDiscount.toFixed(2)}
                      </p>
                    )}
                  </div>

                  <Button size="lg" className="w-full" asChild>
                    <Link href="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>

                  {/* Security badges */}
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Secure Checkout</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-primary" />
                      <span className="font-medium">
                        Free shipping on orders over $50
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="font-medium">30-day return policy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
