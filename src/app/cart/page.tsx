/* eslint-disable @next/next/no-img-element */
// app/(main)/cart/page.tsx
import React from "react";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Your Shopping Cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            {/* Vendor 1's Order */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="p-4 border-b">
                <h2 className="font-semibold">
                  Order from: <span className="text-blue-600">Tech World</span>
                </h2>
              </div>
              {/* Item 1 */}
              <div className="flex items-center p-4 gap-4 border-b">
                <img
                  src="https://placehold.co/100x100?text=Product"
                  alt="Product"
                  className="w-24 h-24 rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">Wireless Headphones</h3>
                  <p className="text-sm text-gray-500">Color: Black</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border rounded">-</button>
                  <input
                    type="text"
                    value="1"
                    className="w-12 text-center border rounded"
                  />
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
                <p className="font-bold w-24 text-right">$199.99</p>
                <button className="text-gray-500 hover:text-red-600">
                  <Trash2 size={20} />
                </button>
              </div>
              {/* Item 2 */}
              <div className="flex items-center p-4 gap-4">
                <img
                  src="https://placehold.co/100x100?text=Product"
                  alt="Product"
                  className="w-24 h-24 rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">Smartwatch</h3>
                  <p className="text-sm text-gray-500">Strap: Leather</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border rounded">-</button>
                  <input
                    type="text"
                    value="1"
                    className="w-12 text-center border rounded"
                  />
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
                <p className="font-bold w-24 text-right">$249.99</p>
                <button className="text-gray-500 hover:text-red-600">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {/* Vendor 2's Order */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <h2 className="font-semibold">
                  Order from: <span className="text-blue-600">Fashionista</span>
                </h2>
              </div>
              <div className="flex items-center p-4 gap-4">
                <img
                  src="https://placehold.co/100x100?text=Product"
                  alt="Product"
                  className="w-24 h-24 rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">Summer Dress</h3>
                  <p className="text-sm text-gray-500">Size: M</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border rounded">-</button>
                  <input
                    type="text"
                    value="1"
                    className="w-12 text-center border rounded"
                  />
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
                <p className="font-bold w-24 text-right">$49.99</p>
                <button className="text-gray-500 hover:text-red-600">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Price Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$499.97</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Tax</span>
                <span>$35.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>$549.97</span>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
