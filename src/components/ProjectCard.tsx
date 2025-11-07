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
    <div className="min-w-[260px] gradient-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50 hover:scale-[1.02] active:scale-[0.98]">
      <h3 className="font-semibold text-base mb-4 line-clamp-2">{name}</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-muted-foreground font-medium">Progress</span>
            <span className="font-semibold text-primary">{completion}%</span>
          </div>
          <Progress value={completion} className="h-1.5" />
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 h-9 text-xs font-semibold"
          onClick={() => navigate(`/project/${id}`)}
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
