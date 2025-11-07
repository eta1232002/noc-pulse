import { ArrowLeft, Search, Filter, Calendar, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Projects = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const allProjects = [
    {
      id: "1",
      name: "Digital Transformation Initiative",
      completion: 75,
      status: "active",
      team: 12,
      dueDate: "Mar 30, 2025",
      priority: "high",
    },
    {
      id: "2",
      name: "Customer Portal Redesign",
      completion: 45,
      status: "active",
      team: 8,
      dueDate: "Apr 15, 2025",
      priority: "medium",
    },
    {
      id: "3",
      name: "Data Analytics Platform",
      completion: 90,
      status: "active",
      team: 15,
      dueDate: "Mar 20, 2025",
      priority: "high",
    },
    {
      id: "4",
      name: "Mobile App Development",
      completion: 60,
      status: "active",
      team: 10,
      dueDate: "May 10, 2025",
      priority: "medium",
    },
    {
      id: "5",
      name: "Cloud Migration Project",
      completion: 30,
      status: "active",
      team: 6,
      dueDate: "Jun 01, 2025",
      priority: "low",
    },
    {
      id: "6",
      name: "Security Enhancement",
      completion: 100,
      status: "completed",
      team: 5,
      dueDate: "Feb 28, 2025",
      priority: "high",
    },
    {
      id: "7",
      name: "Website Optimization",
      completion: 100,
      status: "completed",
      team: 4,
      dueDate: "Feb 15, 2025",
      priority: "medium",
    },
  ];

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || project.status === filter;
    return matchesSearch && matchesFilter;
  });

  const activeCount = allProjects.filter((p) => p.status === "active").length;
  const completedCount = allProjects.filter((p) => p.status === "completed").length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20 h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">All Projects</h1>
            <p className="text-white/80 text-sm">
              {activeCount} active · {completedCount} completed
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 h-12 bg-white/95 border-0 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Filter Tabs */}
        <div className="gradient-card rounded-2xl p-2 card-shadow border border-border/50 flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
              filter === "active"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
              filter === "completed"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="gradient-card rounded-2xl p-4 card-shadow border border-border/50">
            <div className="flex items-center justify-center mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
            </div>
            <p className="text-2xl font-bold text-center">{allProjects.length}</p>
            <p className="text-xs text-muted-foreground text-center mt-1">Total</p>
          </div>
          <div className="gradient-card rounded-2xl p-4 card-shadow border border-border/50">
            <div className="flex items-center justify-center mb-2">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Calendar className="h-4 w-4 text-secondary" />
              </div>
            </div>
            <p className="text-2xl font-bold text-center">{activeCount}</p>
            <p className="text-xs text-muted-foreground text-center mt-1">Active</p>
          </div>
          <div className="gradient-card rounded-2xl p-4 card-shadow border border-border/50">
            <div className="flex items-center justify-center mb-2">
              <div className="p-2 rounded-lg bg-accent/50">
                <Users className="h-4 w-4 text-accent-foreground" />
              </div>
            </div>
            <p className="text-2xl font-bold text-center">
              {allProjects.reduce((sum, p) => sum + p.team, 0)}
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1">Members</p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-3">
          {filteredProjects.length === 0 ? (
            <div className="gradient-card rounded-2xl p-8 card-shadow border border-border/50 text-center">
              <p className="text-muted-foreground">No projects found</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="gradient-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 pr-3">
                    <h3 className="font-semibold text-base mb-1 line-clamp-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant={getPriorityColor(project.priority)} className="text-xs">
                        {project.priority}
                      </Badge>
                      {project.status === "completed" && (
                        <Badge variant="outline" className="text-xs">
                          ✓ Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{project.completion}%</p>
                  </div>
                </div>

                <Progress value={project.completion} className="h-1.5 mb-3" />

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    <span>{project.team} members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{project.dueDate}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
