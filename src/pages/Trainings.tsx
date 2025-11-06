import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, CheckCircle2 } from "lucide-react";

const Trainings = () => {
  const runningTrainings = [
    {
      id: 1,
      name: "Leadership Development Program",
      progress: 65,
      nextSession: "Tomorrow, 10:00 AM",
      instructor: "Dr. Fahad Al-Mutairi",
    },
    {
      id: 2,
      name: "Advanced Excel for HR",
      progress: 45,
      nextSession: "Friday, 2:00 PM",
      instructor: "Sara Ahmed",
    },
    {
      id: 3,
      name: "Conflict Resolution Workshop",
      progress: 80,
      nextSession: "Next Monday, 9:00 AM",
      instructor: "Mohammed Hassan",
    },
  ];

  const scheduledTrainings = [
    {
      id: 4,
      name: "Performance Management Essentials",
      startDate: "June 15, 2025",
      duration: "3 weeks",
    },
    {
      id: 5,
      name: "HR Analytics & Reporting",
      startDate: "July 1, 2025",
      duration: "4 weeks",
    },
    {
      id: 6,
      name: "Employee Engagement Strategies",
      startDate: "July 20, 2025",
      duration: "2 weeks",
    },
  ];

  const completedTrainings = [
    {
      id: 7,
      name: "HR Fundamentals",
      completedDate: "March 10, 2025",
      score: 95,
    },
    {
      id: 8,
      name: "Recruitment Best Practices",
      completedDate: "February 20, 2025",
      score: 88,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">Training Dashboard</h1>
        <p className="text-blue-100">Track your learning journey</p>
      </div>

      <div className="px-4 space-y-6 -mt-4">
        {/* Overall Progress */}
        <Card className="gradient-card card-shadow border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={68} className="h-3" />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">10 courses completed</span>
                <span className="font-medium text-primary">68%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Running Trainings */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Running Training</h2>
          </div>
          <div className="space-y-3">
            {runningTrainings.map((training) => (
              <Card key={training.id} className="gradient-card card-shadow hover:card-shadow-hover transition-all border-border/50">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold mb-1">{training.name}</h3>
                      <p className="text-sm text-muted-foreground">by {training.instructor}</p>
                    </div>
                    <div className="space-y-2">
                      <Progress value={training.progress} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-primary">{training.progress}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Next: {training.nextSession}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scheduled Trainings */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Scheduled Training</h2>
          </div>
          <div className="space-y-3">
            {scheduledTrainings.map((training) => (
              <Card key={training.id} className="gradient-card card-shadow border-border/50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{training.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Starts: {training.startDate}</span>
                    </div>
                    <Badge variant="secondary">{training.duration}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Completed Trainings */}
        <section className="pb-4">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Completed Training</h2>
          </div>
          <div className="space-y-3">
            {completedTrainings.map((training) => (
              <Card key={training.id} className="gradient-card card-shadow border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{training.name}</h3>
                      <p className="text-sm text-muted-foreground">{training.completedDate}</p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      Score: {training.score}%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trainings;
