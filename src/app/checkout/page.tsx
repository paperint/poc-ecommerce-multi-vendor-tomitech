/* eslint-disable @next/next/no-img-element */
// app/(main)/checkout/page.tsx
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Forms */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
            {/* Shipping Details */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="p-3 border rounded-md w-full md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="p-3 border rounded-md w-full"
                />
              </div>
            </section>

            <hr className="my-8" />

            {/* Billing Details */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Billing Details</h2>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Same as shipping
                </label>
              </div>
            </section>

            <hr className="my-8" />

            {/* Payment Method */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="border p-4 rounded-md">
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-3" />
                    Credit Card
                  </label>
                </div>
                <div className="border p-4 rounded-md">
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-3" />
                    PayPal
                  </label>
                </div>
                <div className="border p-4 rounded-md">
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-3" />
                    Bank Transfer
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              {/* Product Item */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/60x60"
                    alt=""
                    className="rounded"
                  />
                  <div>
                    <p className="font-semibold">Wireless Headphones</p>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                  </div>
                </div>
                <p>$199.99</p>
              </div>
              {/* ... more items */}
              <hr className="my-4" />
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$499.97</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>$514.97</span>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-blue-700">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
