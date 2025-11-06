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

  return (
    <div className="flex-1 min-w-[140px] gradient-card rounded-xl p-4 card-shadow border border-border/50">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      <h4 className="text-sm font-medium text-muted-foreground mb-2">{title}</h4>
      {type === "progress" && progress !== undefined ? (
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-lg font-semibold text-primary">{progress}%</p>
        </div>
      ) : (
        <p className="text-2xl font-bold">{count || 0}</p>
      )}
    </div>
  );
};

export default TrainingCard;
