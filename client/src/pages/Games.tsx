import MiniGameRecycling from "@/components/MiniGameRecycling";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Gamepad2 } from "lucide-react";

export default function Games() {
  const games = [
    {
      id: "recycling",
      title: "Recycling Sorter",
      description: "Test your recycling knowledge by sorting items correctly.",
      unlocked: true,
      component: <MiniGameRecycling />,
    },
    {
      id: "energy-quiz",
      title: "Energy Saver Quiz",
      description: "Answer questions about energy conservation.",
      unlocked: false,
      requirement: "Reach level 5 to unlock",
    },
    {
      id: "carbon-calculator",
      title: "Carbon Footprint Challenge",
      description: "Calculate and reduce your daily carbon footprint.",
      unlocked: false,
      requirement: "Complete 5 challenges to unlock",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="font-display font-bold text-4xl mb-2">Mini-Games</h1>
        <p className="text-muted-foreground">
          Learn about sustainability while having fun and earning points!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {games.map((game) => (
          game.unlocked ? (
            <div key={game.id}>
              {game.component}
            </div>
          ) : (
            <Card key={game.id} className="opacity-60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    {game.title}
                  </CardTitle>
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardDescription>{game.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{game.requirement}</p>
                <Button disabled className="w-full">
                  Locked
                </Button>
              </CardContent>
            </Card>
          )
        ))}
      </div>
    </div>
  );
}
