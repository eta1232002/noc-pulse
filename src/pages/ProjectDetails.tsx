import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, Circle, Clock } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = {
    id,
    name: "Digital Transformation Initiative",
    completion: 75,
    description: "Modernizing HR processes through digital solutions and automation",
    tasks: [
      { id: 1, name: "Requirements gathering", status: "completed", assignee: "You" },
      { id: 2, name: "System design review", status: "completed", assignee: "Team" },
      { id: 3, name: "Implementation phase 1", status: "in-progress", assignee: "You" },
      { id: 4, name: "Testing and QA", status: "pending", assignee: "QA Team" },
      { id: 5, name: "User training", status: "pending", assignee: "Training Team" },
      { id: 6, name: "Go-live", status: "pending", assignee: "All" },
    ],
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-600" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/10 text-green-700 border-green-500/20">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-500/10 text-blue-700 border-blue-500/20">In Progress</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 rounded-b-3xl">
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 mb-4 -ml-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
        <p className="text-blue-100">{project.description}</p>
      </div>

      <div className="px-4 space-y-6 -mt-4">
        {/* Progress Card */}
        <Card className="gradient-card card-shadow border-border/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-muted-foreground">Overall Progress</span>
                <span className="text-2xl font-bold text-primary">{project.completion}%</span>
              </div>
              <Progress value={project.completion} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground pt-2">
                <span>2 of 6 tasks completed</span>
                <span>1 in progress</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks List */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Project Tasks</h2>
          <div className="space-y-3 pb-4">
            {project.tasks.map((task) => (
              <Card key={task.id} className="gradient-card card-shadow hover:card-shadow-hover transition-all border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(task.status)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold">{task.name}</h3>
                        {getStatusBadge(task.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">Assigned to: {task.assignee}</p>
                    </div>
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

export default ProjectDetails;
