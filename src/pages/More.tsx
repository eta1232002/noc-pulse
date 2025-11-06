import { Card, CardContent } from "@/components/ui/card";
import { Settings, HelpCircle, FileText, LogOut, Bell, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Settings, label: "Settings", action: () => {} },
    { icon: Bell, label: "Notifications", action: () => {} },
    { icon: FileText, label: "Documents", action: () => {} },
    { icon: Shield, label: "Privacy Policy", action: () => {} },
    { icon: HelpCircle, label: "Help & Support", action: () => {} },
    { icon: LogOut, label: "Logout", action: () => {}, danger: true },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">More</h1>
        <p className="text-blue-100">Settings and options</p>
      </div>

      <div className="px-4 space-y-3 -mt-4 pb-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.label}
              className="gradient-card card-shadow hover:card-shadow-hover transition-all border-border/50 cursor-pointer"
              onClick={item.action}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${item.danger ? "bg-red-500/10" : "bg-primary/10"}`}>
                    <Icon className={`h-5 w-5 ${item.danger ? "text-red-600" : "text-primary"}`} />
                  </div>
                  <span className={`font-medium ${item.danger ? "text-red-600" : ""}`}>
                    {item.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* App Info */}
        <div className="text-center pt-8 pb-4">
          <p className="text-sm text-muted-foreground">NOC HR v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">© 2025 NOC Company</p>
        </div>
      </div>
    </div>
  );
};

export default More;
