import { Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface BadgeCardProps {
  name: string;
  description: string;
  dateAchieved: string;
  issuer: string;
}

const BadgeCard = ({ name, description, dateAchieved, issuer }: BadgeCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="min-w-[160px] gradient-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-all duration-200 border border-border/50 hover:scale-[1.02] active:scale-[0.98]">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 line-clamp-1">{name}</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            {name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">Description</h4>
            <p className="text-sm">{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Date Achieved</h4>
              <p className="text-sm font-medium">{dateAchieved}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Issued By</h4>
              <p className="text-sm font-medium">{issuer}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BadgeCard;
