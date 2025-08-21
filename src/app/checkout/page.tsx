/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CheckoutSteps } from "@/components/checkout-steps";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Shield, Lock, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const checkoutSteps = ["Shipping", "Payment", "Review"];

const orderItems = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    quantity: 1,
    vendor: "TechHub Store",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    quantity: 1,
    vendor: "TechHub Store",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    quantity: 2,
    vendor: "Fashion Forward",
    image: "/placeholder.svg?height=60&width=60",
  },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingForm, setShippingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });
  const [billingForm, setBillingForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping =
    shippingMethod === "express"
      ? 12.99
      : shippingMethod === "overnight"
      ? 24.99
      : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleNextStep = () => {
    if (currentStep < checkoutSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = () => {
    // In a real app, this would process the order
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-muted-foreground">
              Complete your purchase securely
            </p>
          </div>

          {/* Progress Steps */}
          <CheckoutSteps currentStep={currentStep} steps={checkoutSteps} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={shippingForm.firstName}
                          onChange={(e) =>
                            setShippingForm({
                              ...shippingForm,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={shippingForm.lastName}
                          onChange={(e) =>
                            setShippingForm({
                              ...shippingForm,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={shippingForm.email}
                        onChange={(e) =>
                          setShippingForm({
                            ...shippingForm,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={shippingForm.phone}
                        onChange={(e) =>
                          setShippingForm({
                            ...shippingForm,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={shippingForm.address}
                        onChange={(e) =>
                          setShippingForm({
                            ...shippingForm,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="apartment">
                        Apartment, suite, etc. (optional)
                      </Label>
                      <Input
                        id="apartment"
                        value={shippingForm.apartment}
                        onChange={(e) =>
                          setShippingForm({
                            ...shippingForm,
                            apartment: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={shippingForm.city}
                          onChange={(e) =>
                            setShippingForm({
                              ...shippingForm,
                              city: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Select
                          value={shippingForm.state}
                          onValueChange={(value) =>
                            setShippingForm({ ...shippingForm, state: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={shippingForm.zipCode}
                          onChange={(e) =>
                            setShippingForm({
                              ...shippingForm,
                              zipCode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="space-y-3">
                      <Label>Shipping Method</Label>
                      <RadioGroup
                        value={shippingMethod}
                        onValueChange={setShippingMethod}
                      >
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard">
                              Standard Shipping (5-7 days)
                            </Label>
                          </div>
                          <span className="font-medium">$5.99</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="express" id="express" />
                            <Label htmlFor="express">
                              Express Shipping (2-3 days)
                            </Label>
                          </div>
                          <span className="font-medium">$12.99</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="overnight" id="overnight" />
                            <Label htmlFor="overnight">
                              Overnight Shipping
                            </Label>
                          </div>
                          <span className="font-medium">$24.99</span>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                      >
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <Label
                            htmlFor="card"
                            className="flex items-center gap-2"
                          >
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="apple" id="apple" />
                          <Label htmlFor="apple">Apple Pay</Label>
                        </div>
                      </RadioGroup>

                      {paymentMethod === "card" && (
                        <div className="space-y-4 mt-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Billing Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="sameAsShipping"
                          checked={sameAsShipping}
                          onCheckedChange={() =>
                            setSameAsShipping(!sameAsShipping)
                          }
                        />
                        <Label htmlFor="sameAsShipping">
                          Same as shipping address
                        </Label>
                      </div>

                      {!sameAsShipping && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="billingFirstName">
                                First Name
                              </Label>
                              <Input
                                id="billingFirstName"
                                value={billingForm.firstName}
                                onChange={(e) =>
                                  setBillingForm({
                                    ...billingForm,
                                    firstName: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="billingLastName">Last Name</Label>
                              <Input
                                id="billingLastName"
                                value={billingForm.lastName}
                                onChange={(e) =>
                                  setBillingForm({
                                    ...billingForm,
                                    lastName: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          {/* Add more billing fields as needed */}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Review Your Order</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Order Items */}
                    <div className="space-y-4">
                      {orderItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 p-4 border rounded-lg"
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Sold by {item.vendor}
                            </p>
                            <p className="text-sm">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Shipping Information */}
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Address</h3>
                      <div className="text-sm text-muted-foreground">
                        <p>
                          {shippingForm.firstName} {shippingForm.lastName}
                        </p>
                        <p>{shippingForm.address}</p>
                        {shippingForm.apartment && (
                          <p>{shippingForm.apartment}</p>
                        )}
                        <p>
                          {shippingForm.city}, {shippingForm.state}{" "}
                          {shippingForm.zipCode}
                        </p>
                        <p>{shippingForm.phone}</p>
                      </div>
                    </div>

                    <Separator />

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-semibold mb-2">Payment Method</h3>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        <span className="text-sm">
                          {paymentMethod === "card"
                            ? "Credit/Debit Card"
                            : paymentMethod === "paypal"
                            ? "PayPal"
                            : "Apple Pay"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>

                {currentStep < checkoutSteps.length ? (
                  <Button onClick={handleNextStep}>
                    Continue
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handlePlaceOrder} size="lg">
                    <Lock className="h-4 w-4 mr-2" />
                    Place Order
                  </Button>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal ({orderItems.length} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
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

                  {/* Security badges */}
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Secure Checkout</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Items Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Items in Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.vendor}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">${item.price}</p>
                          <p className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Back to Cart */}
              <Button
                variant="outline"
                className="w-full bg-transparent"
                asChild
              >
                <Link href="/cart">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Cart
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
