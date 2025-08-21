/* eslint-disable @next/next/no-img-element */
// app/(main)/product/[slug]/page.tsx
import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <img
              src="https://placehold.co/600x600?text=Main+Product+Image"
              alt="Main Product"
              className="w-full rounded-lg mb-4"
            />
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://placehold.co/150x150?text=Thumb+${i}`}
                  alt={`Thumbnail ${i}`}
                  className="w-full rounded cursor-pointer border-2 border-transparent hover:border-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-2">
              High-Quality Wireless Headphones
            </h1>
            <p className="text-gray-500 mb-4">Category: Electronics</p>

            {/* Reviews */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
                <Star size={20} />
              </div>
              <span className="ml-2 text-gray-600">(150 Reviews)</span>
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              Experience immersive sound with these noise-cancelling headphones.
              Long-lasting battery and comfortable fit for all-day use.
            </p>

            {/* Price & Availability */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-blue-600">$199.99</span>
              <span className="text-green-600 font-semibold ml-4">
                In Stock
              </span>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4">
              <input
                type="number"
                defaultValue="1"
                className="w-20 border-2 p-3 rounded-lg text-center"
              />
              <button className="flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                <ShoppingCart /> Add to Cart
              </button>
            </div>

            <hr className="my-8" />

            {/* Vendor Details */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Sold By</h3>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <img
                  src="https://placehold.co/60x60"
                  alt="Vendor"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <a
                    href="#"
                    className="font-bold text-lg text-blue-700 hover:underline"
                  >
                    Tech World
                  </a>
                  <p className="text-gray-600">98% Positive Feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
