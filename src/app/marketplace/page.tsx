/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ShoppingCart } from "lucide-react";

const MarketplacePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar: Category Menu & Filters */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Fashion
                </a>
              </li>
              {/* ... more categories */}
            </ul>
            <hr className="my-6" />
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            {/* Price Range */}
            <div>
              <h4 className="font-semibold mb-2">Price Range</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full border p-2 rounded"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>
            {/* Brand */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Brand</h4>
              {["Apple", "Samsung", "Nike"].map((brand) => (
                <div key={brand} className="flex items-center">
                  <input type="checkbox" id={brand} className="mr-2" />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content: Product Listings */}
        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">All Products</h1>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="border p-2 rounded">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={`https://placehold.co/400x300?text=Product+${i + 1}`}
                  alt={`Product ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    Awesome Product {i + 1}
                  </h3>
                  <p className="text-sm text-gray-500">Vendor Name</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-blue-600">
                      $129.99
                    </span>
                    <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketplacePage;
