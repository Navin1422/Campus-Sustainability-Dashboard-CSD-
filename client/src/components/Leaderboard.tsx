import { Trophy, Medal, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}

export default function Leaderboard() {
  const entries: LeaderboardEntry[] = [
    { rank: 1, name: "Sarah Chen", points: 2840 },
    { rank: 2, name: "Alex Rodriguez", points: 2635 },
    { rank: 3, name: "Maya Patel", points: 2420 },
    { rank: 4, name: "Jordan Kim", points: 2180, isCurrentUser: true },
    { rank: 5, name: "Taylor Swift", points: 2065 },
    { rank: 6, name: "Chris Johnson", points: 1895 },
    { rank: 7, name: "Emma Wilson", points: 1750 },
    { rank: 8, name: "Ryan Martinez", points: 1640 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-chart-4" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-muted-foreground" />;
    if (rank === 3) return <Award className="w-5 h-5 text-chart-4/60" />;
    return null;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <CardTitle className="text-2xl font-display font-bold">Top Contributors</CardTitle>
        <Badge variant="secondary" data-testid="badge-leaderboard-period">This Month</Badge>
      </CardHeader>
      <CardContent className="space-y-2">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            data-testid={`row-leaderboard-${entry.rank}`}
            className={`flex items-center gap-4 p-3 rounded-md transition-colors ${
              entry.isCurrentUser
                ? "bg-primary/10 border border-primary/20"
                : "hover-elevate"
            }`}
          >
            <div className="flex items-center justify-center w-8 font-mono font-bold text-lg">
              {getRankIcon(entry.rank) || entry.rank}
            </div>
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                {entry.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold text-foreground" data-testid={`text-name-${entry.rank}`}>
                {entry.name}
                {entry.isCurrentUser && (
                  <span className="ml-2 text-xs text-primary">(You)</span>
                )}
              </div>
            </div>
            <div className="font-mono font-bold text-lg text-primary" data-testid={`text-points-${entry.rank}`}>
              {entry.points.toLocaleString()}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
