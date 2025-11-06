import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  name: string;
  completion: number;
}

const ProjectCard = ({ id, name, completion }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-w-[280px] gradient-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50">
      <h3 className="font-semibold text-lg mb-3">{name}</h3>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-primary">{completion}%</span>
          </div>
          <Progress value={completion} className="h-2" />
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between text-primary hover:text-primary hover:bg-accent"
          onClick={() => navigate(`/project/${id}`)}
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
