import ChallengeCard from "@/components/ChallengeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Challenges() {
  const activeChallenges = [
    {
      id: "1",
      title: "Zero Waste Week",
      description: "Reduce your waste to zero for 7 consecutive days by recycling and composting.",
      points: 500,
      participants: 142,
      progress: 45,
      daysLeft: 4,
      category: "recycling",
    },
    {
      id: "2",
      title: "Energy Conservation Month",
      description: "Save 100 kWh this month by turning off unused devices and using natural light.",
      points: 750,
      participants: 203,
      progress: 30,
      daysLeft: 28,
      category: "energy",
    },
    {
      id: "3",
      title: "Bike to Campus Challenge",
      description: "Bike or walk to campus instead of driving for 2 weeks straight.",
      points: 600,
      participants: 87,
      progress: 50,
      daysLeft: 10,
      category: "transport",
    },
  ];

  const availableChallenges = [
    {
      id: "4",
      title: "Water Warrior",
      description: "Reduce water usage by 50L per day for one month.",
      points: 800,
      participants: 56,
      progress: 0,
      daysLeft: 30,
      category: "water",
    },
    {
      id: "5",
      title: "Plastic-Free February",
      description: "Avoid single-use plastics for the entire month.",
      points: 1000,
      participants: 124,
      progress: 0,
      daysLeft: 30,
      category: "recycling",
    },
    {
      id: "6",
      title: "Green Commute",
      description: "Use public transport or carpool for all campus trips this month.",
      points: 650,
      participants: 78,
      progress: 0,
      daysLeft: 30,
      category: "transport",
    },
  ];

  const completedChallenges = [
    {
      id: "7",
      title: "Reusable Cup Challenge",
      description: "Used a reusable cup for all beverages for 30 days.",
      points: 400,
      participants: 210,
      progress: 100,
      daysLeft: 0,
      category: "recycling",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="font-display font-bold text-4xl mb-2">Challenges</h1>
        <p className="text-muted-foreground">
          Join sustainability challenges and earn points while making a real impact!
        </p>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="active" data-testid="tab-active">Active</TabsTrigger>
          <TabsTrigger value="available" data-testid="tab-available">Available</TabsTrigger>
          <TabsTrigger value="completed" data-testid="tab-completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
