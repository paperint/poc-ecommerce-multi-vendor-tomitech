import { VendorSidebar } from "@/components/vendor-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  CreditCard,
  Download,
  AlertCircle,
} from "lucide-react";

const paymentStats = [
  {
    title: "Available Balance",
    value: "$2,847.50",
    description: "Ready for withdrawal",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Pending Balance",
    value: "$1,234.75",
    description: "Processing payments",
    icon: Calendar,
    color: "text-yellow-600",
  },
  {
    title: "Total Earnings",
    value: "$45,892.25",
    description: "All time earnings",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "This Month",
    value: "$12,847.00",
    description: "January earnings",
    icon: Calendar,
    color: "text-purple-600",
  },
];

const recentPayments = [
  {
    id: "PAY-001",
    amount: "$1,247.50",
    status: "completed",
    method: "Bank Transfer",
    date: "2024-01-15",
    reference: "TXN123456789",
  },
  {
    id: "PAY-002",
    amount: "$892.25",
    status: "processing",
    method: "PayPal",
    date: "2024-01-10",
    reference: "TXN987654321",
  },
  {
    id: "PAY-003",
    amount: "$2,156.75",
    status: "completed",
    method: "Bank Transfer",
    date: "2024-01-05",
    reference: "TXN456789123",
  },
  {
    id: "PAY-004",
    amount: "$634.50",
    status: "failed",
    method: "Bank Transfer",
    date: "2024-01-01",
    reference: "TXN789123456",
  },
];

const paymentMethods = [
  {
    type: "Bank Account",
    details: "****1234 - Chase Bank",
    primary: true,
    verified: true,
  },
  {
    type: "PayPal",
    details: "contact@tomi.com",
    primary: false,
    verified: true,
  },
  {
    type: "Stripe",
    details: "Connected Account",
    primary: false,
    verified: true,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
    case "processing":
      return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
    case "failed":
      return <Badge variant="destructive">Failed</Badge>;
    case "pending":
      return <Badge variant="secondary">Pending</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function VendorPayments() {
  return (
    <div className="min-h-screen bg-muted/30">
      <VendorSidebar />

      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Payments</h1>
              <p className="text-muted-foreground">
                Manage your earnings and payment methods
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <DollarSign className="h-4 w-4 mr-2" />
                Request Withdrawal
              </Button>
            </div>
          </div>

          {/* Payment Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentStats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.description}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Payments */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Payments</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPayments.map((payment) => (
                      <div
                        key={payment.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-medium">{payment.id}</span>
                            {getStatusBadge(payment.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {payment.method}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Ref: {payment.reference}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{payment.amount}</p>
                          <p className="text-sm text-muted-foreground">
                            {payment.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods & Withdrawal */}
            <div className="space-y-6">
              {/* Quick Withdrawal */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Withdrawal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-muted/50 rounded-lg">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-primary">$2,847.50</p>
                    <p className="text-sm text-muted-foreground">
                      Available for withdrawal
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing fee (2.5%)</span>
                      <span>-$71.19</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>{`You'll receive`}</span>
                      <span className="text-green-600">$2,776.31</span>
                    </div>
                  </div>

                  <Button className="w-full">Withdraw to Bank Account</Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Funds typically arrive in 1-3 business days
                  </p>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm">{method.type}</p>
                          <p className="text-xs text-muted-foreground">
                            {method.details}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {method.primary && (
                          <Badge variant="secondary" className="text-xs">
                            Primary
                          </Badge>
                        )}
                        {method.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            ✓
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full bg-transparent">
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Automatic Payouts</p>
                      <p className="text-xs text-muted-foreground">
                        Weekly on Fridays when balance exceeds $100
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Next payout</span>
                      <span className="font-medium">Friday, Jan 19</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Estimated amount</span>
                      <span className="font-medium text-green-600">
                        $2,847.50
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    Manage Schedule
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Earnings Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      This Month Progress
                    </span>
                    <span className="text-sm text-muted-foreground">
                      $12,847 / $15,000
                    </span>
                  </div>
                  <Progress value={85.6} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    85.6% of monthly goal
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Average Order Value
                    </span>
                    <span className="text-sm font-medium">$82.35</span>
                  </div>
                  <Progress value={75} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    +12% from last month
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Commission Rate</span>
                    <span className="text-sm font-medium">5.5%</span>
                  </div>
                  <Progress value={55} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Platform fee
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
