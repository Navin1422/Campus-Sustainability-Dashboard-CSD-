import { Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  participants: number;
  progress: number;
  daysLeft: number;
  category: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const categoryColors: Record<string, string> = {
    recycling: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    energy: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    water: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    transport: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <Card className="hover-elevate transition-all" data-testid={`card-challenge-${challenge.id}`}>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge 
            variant="outline" 
            className={categoryColors[challenge.category] || ""}
            data-testid={`badge-category-${challenge.id}`}
          >
            {challenge.category}
          </Badge>
          <Badge variant="secondary" className="font-mono font-bold" data-testid={`badge-points-${challenge.id}`}>
            +{challenge.points} pts
          </Badge>
        </div>
        <CardTitle className="text-xl font-display" data-testid={`text-title-${challenge.id}`}>
          {challenge.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground" data-testid={`text-description-${challenge.id}`}>
          {challenge.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{challenge.progress}%</span>
          </div>
          <Progress value={challenge.progress} className="h-2" data-testid={`progress-${challenge.id}`} />
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{challenge.participants} joined</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{challenge.daysLeft} days left</span>
          </div>
        </div>

        <Button className="w-full" variant={challenge.progress > 0 ? "secondary" : "default"} data-testid={`button-join-${challenge.id}`}>
          {challenge.progress > 0 ? "Continue" : "Join Challenge"}
        </Button>
      </CardContent>
    </Card>
  );
}
