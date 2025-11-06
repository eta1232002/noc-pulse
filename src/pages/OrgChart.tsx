import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Employee {
  id: string;
  name: string;
  title: string;
  initials: string;
  reports?: Employee[];
}

const orgData: Employee = {
  id: "1",
  name: "Abdullah Al-Saud",
  title: "Chairman",
  initials: "AS",
  reports: [
    {
      id: "2",
      name: "Khalid Al-Fahad",
      title: "CEO",
      initials: "KF",
      reports: [
        {
          id: "3",
          name: "Fatima Al-Zahrani",
          title: "VP of HR",
          initials: "FZ",
          reports: [
            {
              id: "4",
              name: "Sarah Al-Otaibi",
              title: "HR Director",
              initials: "SO",
              reports: [
                {
                  id: "5",
                  name: "Ahmed Al-Rashid",
                  title: "Senior HR Specialist",
                  initials: "AM",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const EmployeeNode = ({ employee, level = 0 }: { employee: Employee; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(level < 3);
  const hasReports = employee.reports && employee.reports.length > 0;
  const isCurrentUser = employee.id === "5";

  return (
    <div className="space-y-2">
      <Card
        className={cn(
          "gradient-card card-shadow transition-all duration-200 border-border/50",
          isCurrentUser && "border-2 border-primary shadow-lg"
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            {hasReports && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-accent rounded transition-colors"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-primary" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            )}
            <Avatar className={cn("h-12 w-12", !hasReports && "ml-5")}>
              <AvatarFallback
                className={cn(
                  "text-sm font-semibold",
                  isCurrentUser ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}
              >
                {employee.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className={cn("font-semibold", isCurrentUser && "text-primary")}>
                {employee.name}
                {isCurrentUser && " (You)"}
              </h3>
              <p className="text-sm text-muted-foreground">{employee.title}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {hasReports && isExpanded && (
        <div className="ml-8 pl-4 border-l-2 border-border space-y-2">
          {employee.reports!.map((report) => (
            <EmployeeNode key={report.id} employee={report} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const OrgChart = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">Map Me in NOC</h1>
        <p className="text-blue-100">Organizational Reporting Tree</p>
      </div>

      <div className="px-4 py-6">
        <EmployeeNode employee={orgData} />
      </div>
    </div>
  );
};

export default OrgChart;
