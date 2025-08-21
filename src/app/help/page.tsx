import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  User,
  Store,
  CreditCard,
  Truck,
  RotateCcw,
  Shield,
  Star,
} from "lucide-react";

export default function HelpPage() {
  const helpCategories = [
    {
      icon: ShoppingCart,
      title: "Shopping & Orders",
      description: "Learn how to browse, search, and place orders",
      topics: [
        "How to search for products",
        "Adding items to cart",
        "Checkout process",
        "Order confirmation",
        "Modifying orders",
      ],
    },
    {
      icon: User,
      title: "Account Management",
      description: "Manage your profile and account settings",
      topics: [
        "Creating an account",
        "Profile settings",
        "Password reset",
        "Email preferences",
        "Account security",
      ],
    },
    {
      icon: Store,
      title: "For Vendors",
      description: "Everything you need to know about selling",
      topics: [
        "Vendor registration",
        "Product listings",
        "Order management",
        "Payment processing",
        "Store analytics",
      ],
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      description: "Payment methods and billing information",
      topics: [
        "Accepted payment methods",
        "Payment security",
        "Billing issues",
        "Refund process",
        "Payment history",
      ],
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description: "Shipping options and delivery information",
      topics: [
        "Shipping methods",
        "Delivery times",
        "Tracking orders",
        "International shipping",
        "Shipping costs",
      ],
    },
    {
      icon: RotateCcw,
      title: "Returns & Exchanges",
      description: "Return policy and exchange process",
      topics: [
        "Return policy",
        "How to return items",
        "Exchange process",
        "Refund timeline",
        "Return shipping",
      ],
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Keep your account and data secure",
      topics: [
        "Account security",
        "Safe shopping tips",
        "Fraud protection",
        "Privacy policy",
        "Data protection",
      ],
    },
    {
      icon: Star,
      title: "Reviews & Ratings",
      description: "How to leave and manage reviews",
      topics: [
        "Writing reviews",
        "Rating products",
        "Review guidelines",
        "Managing reviews",
        "Vendor ratings",
      ],
    },
  ];

  const quickLinks = [
    "Track Your Order",
    "Return an Item",
    "Contact Support",
    "Become a Vendor",
    "Payment Issues",
    "Account Problems",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find guides, tutorials, and answers to common questions
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Links
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <Button key={index} variant="outline" className="bg-white">
                {link}
              </Button>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {helpCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                        >
                          {topic}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Help Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How to Track Your Order
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how to track your order status and delivery progress
                  using your order number or account dashboard.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Return & Refund Policy
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Understand our 30-day return policy and how to process returns
                  for eligible items.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Becoming a Vendor
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guide to joining our marketplace as a vendor and
                  start selling your products.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Payment Methods & Security
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about accepted payment methods and how we keep your
                  payment information secure.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need More Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our support
                team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Contact Support</Button>
                <Button size="lg" variant="outline">
                  Browse FAQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
