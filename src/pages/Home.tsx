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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-primary text-white p-6 pb-12 rounded-b-[2rem]">
        <h1 className="text-3xl font-bold mb-1">NOC HR</h1>
        <p className="text-white/80 text-sm">Welcome back, Ahmed!</p>
      </div>

      <div className="px-4 -mt-8 space-y-5 pb-6">
        {/* QR Scanner - Featured Action */}
        <QRScannerButton />

        {/* Quick Access Grid */}
        <section>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate("/org-chart")}
              className="gradient-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Map className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm mb-0.5">Org Chart</h3>
                  <p className="text-xs text-muted-foreground">View hierarchy</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => navigate("/competency")}
              className="gradient-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm mb-0.5">Competency</h3>
                  <p className="text-xs text-muted-foreground">View skills</p>
                </div>
              </div>
            </button>
          </div>
        </section>

        {/* Current Projects */}
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Current Projects
            </h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary hover:text-primary h-8 text-xs -mr-2"
            >
              View All <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* Training Summary */}
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Training Summary
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary h-8 text-xs -mr-2"
              onClick={() => navigate("/trainings")}
            >
              View All <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <TrainingCard type="running" title="Running" count={3} />
            <TrainingCard type="scheduled" title="Scheduled" count={5} />
            <TrainingCard type="progress" title="Progress" progress={68} />
          </div>
        </section>

        {/* Badges */}
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              My Badges
            </h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {badges.map((badge) => (
              <BadgeCard key={badge.name} {...badge} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
