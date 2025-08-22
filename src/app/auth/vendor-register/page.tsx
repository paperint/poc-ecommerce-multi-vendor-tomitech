"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { ShoppingBag, Store, CheckCircle } from "lucide-react";

export default function VendorRegisterPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleVendorRegister = (data: any) => {
    console.log("Vendor register data:", data);
    // Handle vendor registration logic here
  };

  const benefits = [
    "Reach thousands of customers",
    "Easy product management",
    "Secure payment processing",
    "Marketing and promotional tools",
    "24/7 customer support",
    "Detailed sales analytics",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 mb-8"
          >
            <ShoppingBag className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">
              Tomitech MarketPlace
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Start Selling Today
          </h1>
          <p className="text-xl text-gray-600">
            Join thousands of successful vendors on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Store className="h-6 w-6 text-emerald-600" />
                Why Choose Our Platform?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="font-semibold text-emerald-900 mb-2">
                Application Process
              </h3>
              <ol className="text-sm text-emerald-800 space-y-1">
                <li>1. Fill out the registration form</li>
                <li>2. Submit required business documents</li>
                <li>3. Wait for approval (usually 2-3 business days)</li>
                <li>4. Start listing your products!</li>
              </ol>
            </div>
          </div>

          {/* Registration Form */}
          <div>
            <AuthForm type="vendor-register" onSubmit={handleVendorRegister} />

            <div className="text-center mt-6 space-y-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Sign in
                </Link>
              </p>
              <p className="text-sm text-gray-600">
                Just want to shop?{" "}
                <Link
                  href="/auth/register"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Create customer account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
