import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AdminSidebar } from "@/components/admin-sidebar";
import { Settings, CreditCard, Mail, Shield } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600 mt-2">
            Configure marketplace settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" defaultValue="Tomitech MarketPlace Pro" />
              </div>
              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input
                  id="siteDescription"
                  defaultValue="Your trusted multi-vendor marketplace"
                />
              </div>
              <div>
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  defaultValue="admin@marketplace.com"
                />
              </div>
              <div>
                <Label htmlFor="supportPhone">Support Phone</Label>
                <Input id="supportPhone" defaultValue="+1 (555) 123-4567" />
              </div>
            </CardContent>
          </Card>

          {/* Payment Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="commissionRate">Commission Rate (%)</Label>
                <Input id="commissionRate" type="number" defaultValue="5" />
              </div>
              <div>
                <Label htmlFor="minWithdraw">Minimum Withdrawal Amount</Label>
                <Input id="minWithdraw" type="number" defaultValue="50" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable Stripe Payments</Label>
                  <p className="text-sm text-gray-600">
                    Accept credit card payments
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable PayPal</Label>
                  <p className="text-sm text-gray-600">
                    Accept PayPal payments
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="smtpHost">SMTP Host</Label>
                <Input id="smtpHost" defaultValue="smtp.gmail.com" />
              </div>
              <div>
                <Label htmlFor="smtpPort">SMTP Port</Label>
                <Input id="smtpPort" type="number" defaultValue="587" />
              </div>
              <div>
                <Label htmlFor="smtpUser">SMTP Username</Label>
                <Input id="smtpUser" defaultValue="noreply@marketplace.com" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Order Confirmation Emails</Label>
                  <p className="text-sm text-gray-600">
                    Send emails for new orders
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600">
                    Require 2FA for admin accounts
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Verification</Label>
                  <p className="text-sm text-gray-600">
                    Require email verification for new users
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Vendor Approval</Label>
                  <p className="text-sm text-gray-600">
                    Manually approve new vendors
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div>
                <Label htmlFor="sessionTimeout">
                  Session Timeout (minutes)
                </Label>
                <Input id="sessionTimeout" type="number" defaultValue="60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <Button size="lg">Save All Settings</Button>
        </div>
      </div>
    </div>
  );
}
