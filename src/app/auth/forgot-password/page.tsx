"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { ShoppingBag, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleForgotPassword = (data: any) => {
    console.log("Forgot password data:", data);
    // Handle forgot password logic here
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

        <AuthForm type="forgot-password" onSubmit={handleForgotPassword} />

        <div className="text-center space-y-4">
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
