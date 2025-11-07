import { Clock, Calendar, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TrainingCardProps {
  type: "running" | "scheduled" | "progress";
  title: string;
  count?: number;
  progress?: number;
}

const TrainingCard = ({ type, title, count, progress }: TrainingCardProps) => {
  const icons = {
    running: Clock,
    scheduled: Calendar,
    progress: TrendingUp,
  };

  const Icon = icons[type];

  const colors = {
    running: "primary",
    scheduled: "secondary",
    progress: "accent",
  };

  const color = colors[type];

  return (
    <div className="gradient-card rounded-2xl p-4 card-shadow border border-border/50">
      <div className="flex items-center justify-center mb-3">
        <div className={`p-2.5 rounded-xl bg-${color}/10`}>
          <Icon className={`h-4 w-4 text-${color}`} />
        </div>
      </div>
      <h4 className="text-xs font-medium text-muted-foreground mb-2 text-center">{title}</h4>
      {type === "progress" && progress !== undefined ? (
        <div className="space-y-2">
          <Progress value={progress} className="h-1.5" />
          <p className="text-xl font-bold text-center">{progress}%</p>
        </div>
      ) : (
        <p className="text-2xl font-bold text-center">{count || 0}</p>
      )}
    </div>
  );
};

export default TrainingCard;
