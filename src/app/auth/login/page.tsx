"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { ShoppingBag } from "lucide-react";

export default function LoginPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (data: any) => {
    console.log("Login data:", data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 mb-8"
          >
            <ShoppingBag className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">
              MarketPlace
            </span>
          </Link>
        </div>

        <AuthForm type="login" onSubmit={handleLogin} />

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            {`Don't have an account?`}
            <Link
              href="/auth/register"
              className="font-medium text-emerald-600 hover:text-emerald-500"
            >
              Sign up
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            <Link
              href="/auth/forgot-password"
              className="font-medium text-emerald-600 hover:text-emerald-500"
            >
              Forgot your password?
            </Link>
          </p>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600">
              Want to sell on our platform?{" "}
              <Link
                href="/auth/vendor-register"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Become a vendor
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
