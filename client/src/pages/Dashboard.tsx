import ImpactMetrics from "@/components/ImpactMetrics";
import Leaderboard from "@/components/Leaderboard";
import ChallengeCard from "@/components/ChallengeCard";
import BadgeDisplay from "@/components/BadgeDisplay";
import ActivityLogger from "@/components/ActivityLogger";
import ImpactChart from "@/components/ImpactChart";
import heroImage from "@assets/generated_images/Sustainable_campus_hero_illustration_135d180f.png";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Dashboard() {
  const challenges = [
    {
      id: "1",
      title: "Zero Waste Week",
      description: "Reduce your waste to zero for 7 consecutive days.",
      points: 500,
      participants: 142,
      progress: 45,
      daysLeft: 4,
      category: "recycling",
    },
    {
      id: "2",
      title: "Energy Conservation Month",
      description: "Save 100 kWh this month by turning off unused devices.",
      points: 750,
      participants: 203,
      progress: 0,
      daysLeft: 28,
      category: "energy",
    },
    {
      id: "3",
      title: "Bike to Campus Challenge",
      description: "Bike or walk to campus instead of driving for 2 weeks.",
      points: 600,
      participants: 87,
      progress: 30,
      daysLeft: 10,
      category: "transport",
    },
  ];

  return (
    <div className="min-h-screen pb-12">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-3/10 mb-8">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <div className="container mx-auto px-6 py-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                Transform Your Campus,<br />
                <span className="text-primary">One Action at a Time</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Join 2,500+ students making real environmental impact through gamified sustainability activities.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="rounded-full" data-testid="button-get-started">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm" data-testid="button-view-impact">
                  View Impact
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <div className="font-mono text-3xl font-bold text-foreground">3.2T</div>
                  <div className="text-sm text-muted-foreground">CO₂ Reduced</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-foreground">1,247</div>
                  <div className="text-sm text-muted-foreground">Trees Planted</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-foreground">2,500+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage} 
                alt="Sustainable campus activities" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 space-y-8">
        <ImpactMetrics />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-3xl mb-4">Active Challenges</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {challenges.map((challenge) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
              </div>
            </div>

            <ImpactChart />
          </div>

          <div className="space-y-8">
            <ActivityLogger />
            <Leaderboard />
          </div>
        </div>

        <BadgeDisplay />
      </div>
    </div>
  );
}
