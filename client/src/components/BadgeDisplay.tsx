import { ShieldCheck, Star, Flame, Sprout, Zap, Droplets, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BadgeItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  unlocked: boolean;
  description: string;
  color: string;
}

export default function BadgeDisplay() {
  const badges: BadgeItem[] = [
    {
      id: "1",
      name: "Eco Warrior",
      icon: <ShieldCheck className="w-8 h-8" />,
      unlocked: true,
      description: "Complete 10 challenges",
      color: "text-primary",
    },
    {
      id: "2",
      name: "Rising Star",
      icon: <Star className="w-8 h-8" />,
      unlocked: true,
      description: "Reach top 10 on leaderboard",
      color: "text-chart-4",
    },
    {
      id: "3",
      name: "On Fire",
      icon: <Flame className="w-8 h-8" />,
      unlocked: true,
      description: "7-day activity streak",
      color: "text-chart-4",
    },
    {
      id: "4",
      name: "Green Thumb",
      icon: <Sprout className="w-8 h-8" />,
      unlocked: true,
      description: "Plant 10 trees",
      color: "text-chart-3",
    },
    {
      id: "5",
      name: "Energy Saver",
      icon: <Zap className="w-8 h-8" />,
      unlocked: false,
      description: "Save 1000 kWh",
      color: "text-muted-foreground",
    },
    {
      id: "6",
      name: "Water Guardian",
      icon: <Droplets className="w-8 h-8" />,
      unlocked: false,
      description: "Save 5000L water",
      color: "text-muted-foreground",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-display font-bold">Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              data-testid={`badge-achievement-${badge.id}`}
              className="relative group"
            >
              <div
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${
                  badge.unlocked
                    ? "bg-card hover-elevate cursor-pointer"
                    : "bg-muted/30 opacity-50"
                }`}
              >
                <div className={`relative ${badge.color}`}>
                  {badge.icon}
                  {!badge.unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <span className="text-xs text-center font-medium text-foreground">
                  {badge.name}
                </span>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                <div className="bg-popover border border-popover-border text-popover-foreground text-xs rounded-md px-3 py-2 whitespace-nowrap shadow-lg">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
