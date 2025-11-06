import QRScannerButton from "@/components/QRScannerButton";
import ProjectCard from "@/components/ProjectCard";
import TrainingCard from "@/components/TrainingCard";
import BadgeCard from "@/components/BadgeCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Map, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const projects = [
    { id: "1", name: "Digital Transformation Initiative", completion: 75 },
    { id: "2", name: "Customer Portal Redesign", completion: 45 },
    { id: "3", name: "Data Analytics Platform", completion: 90 },
  ];

  const badges = [
    {
      name: "Leadership Excellence",
      description: "Demonstrated exceptional leadership skills in managing cross-functional teams",
      dateAchieved: "March 15, 2025",
      issuer: "NOC Academy",
    },
    {
      name: "Innovation Award",
      description: "Recognized for innovative solutions that improved operational efficiency",
      dateAchieved: "February 28, 2025",
      issuer: "NOC Management",
    },
    {
      name: "Safety Champion",
      description: "Outstanding commitment to workplace safety standards",
      dateAchieved: "January 10, 2025",
      issuer: "NOC Safety Board",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">NOC HR</h1>
        <p className="text-blue-100">Welcome back, Ahmed!</p>
      </div>

      <div className="px-4 space-y-6 -mt-4">
        {/* QR Scanner */}
        <QRScannerButton />

        {/* Current Projects */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Current Projects</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* Training Summary */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Training Summary</h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary"
              onClick={() => navigate("/trainings")}
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <TrainingCard type="running" title="Running Training" count={3} />
            <TrainingCard type="scheduled" title="Scheduled Training" count={5} />
            <TrainingCard type="progress" title="Overall Progress" progress={68} />
          </div>
        </section>

        {/* Badges */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">My Badges</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {badges.map((badge) => (
              <BadgeCard key={badge.name} {...badge} />
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid grid-cols-2 gap-3 pb-4">
          <button
            onClick={() => navigate("/org-chart")}
            className="gradient-card rounded-xl p-4 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50 hover:scale-[1.02]"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Map className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Map Me in NOC</h3>
              <p className="text-xs text-muted-foreground">View org chart</p>
            </div>
          </button>

          <button
            onClick={() => navigate("/competency")}
            className="gradient-card rounded-xl p-4 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50 hover:scale-[1.02]"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Competency</h3>
              <p className="text-xs text-muted-foreground">View skills</p>
            </div>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
