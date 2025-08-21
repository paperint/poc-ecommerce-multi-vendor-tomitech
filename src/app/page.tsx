/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* 1. Hero Banner */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Your Marketplace</h1>
        <p className="text-xl mb-8">
          Find everything you need, from trusted vendors worldwide.
        </p>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for products, brands, or vendors..."
            className="w-full p-4 rounded-full text-gray-800"
          />
        </div>
      </section>

      {/* 2. Popular Categories */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "Electronics",
            "Fashion",
            "Home & Garden",
            "Health & Beauty",
            "Toys & Games",
            "Sports",
          ].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center cursor-pointer"
            >
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={`https://placehold.co/400x300?text=Product+${i}`}
                  alt={`Product ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Amazing Product {i}</h3>
                  <p className="text-sm text-gray-500">Sold by: Vendor Name</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-blue-600">
                      $99.99
                    </span>
                    <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Top Vendors */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Top Vendors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Tech World", "Fashionista", "Home Goods Hub", "Beauty Bliss"].map(
            (vendor) => (
              <div
                key={vendor}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src="https://placehold.co/100x100/EFEFEF/AAAAAA&text=Logo"
                  alt="Vendor Logo"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{vendor}</h3>
                <div className="flex justify-center items-center text-yellow-500 mt-2">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} />
                  <span className="text-gray-600 ml-2">(123 Reviews)</span>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Alice", "Bob", "Charlie"].map((name) => (
              <div key={name} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">
                  {`"This is the best marketplace I've ever used. The quality and
                  service are outstanding!"`}
                </p>
                <div className="flex items-center mt-6">
                  <img
                    src="https://placehold.co/50x50"
                    alt="Customer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
