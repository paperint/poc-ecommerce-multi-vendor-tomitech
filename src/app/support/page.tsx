import { FAQSection } from "@/components/faq-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Book,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Video,
  Users,
} from "lucide-react";

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click the 'Sign Up' button in the top right corner of any page. Fill out the required information including your name, email, and password. You'll receive a confirmation email to verify your account.",
      category: "account",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is placed, you'll receive an email with a tracking number. You can also track your order by logging into your account and visiting the 'My Orders' section.",
      category: "orders",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our encrypted payment system.",
      category: "payment",
    },
    {
      question: "How do I become a vendor?",
      answer:
        "To become a vendor, click 'Become a Vendor' in the footer or navigation menu. Fill out the vendor application form with your business information. Our team will review your application within 2-3 business days.",
      category: "vendor",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some restrictions apply for certain categories like electronics and personal care items.",
      category: "returns",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team through live chat, email at support@marketplace.com, or phone at +1 (555) 123-4567. Our support hours are Monday-Friday 9AM-6PM EST.",
      category: "support",
    },
    {
      question: "Are there any seller fees?",
      answer:
        "Yes, we charge a 5% commission on each sale plus payment processing fees. There are no monthly fees or listing fees. You only pay when you make a sale.",
      category: "vendor",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary by vendor and location. Most orders are processed within 1-2 business days and delivered within 3-7 business days. Express shipping options are available at checkout.",
      category: "shipping",
    },
  ];

  const supportResources = [
    {
      icon: Book,
      title: "User Guide",
      description: "Complete guide to using our platform",
      link: "#",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video instructions",
      link: "#",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Technical documentation and APIs",
      link: "#",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and vendors",
      link: "#",
    },
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "support@marketplace.com",
      action: "Send Email",
      available: true,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+1 (555) 123-4567",
      action: "Call Now",
      available: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to your questions and get the help you need
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles, FAQs, and more..."
              className="pl-12 py-3 text-lg"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <Button
                    className="w-full"
                    variant={option.available ? "default" : "outline"}
                    disabled={!option.available}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Support Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {resource.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>

        {/* Still Need Help */}
        <div className="mt-16 text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Can&apos;t find what you&apos;re looking for? Our support team
                is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Contact Support</Button>
                <Button size="lg" variant="outline">
                  Submit a Ticket
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
