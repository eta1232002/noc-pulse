import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, GraduationCap, User, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: GraduationCap, label: "Trainings", path: "/trainings" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: MoreHorizontal, label: "More", path: "/more" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full pb-20">
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border card-shadow z-50">
        <div className="flex justify-around items-center h-16 max-w-2xl mx-auto px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "scale-110")} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
