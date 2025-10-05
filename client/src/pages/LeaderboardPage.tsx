import Leaderboard from "@/components/Leaderboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="font-display font-bold text-4xl mb-2">Leaderboard</h1>
        <p className="text-muted-foreground">
          See how you rank among fellow sustainability champions!
        </p>
      </div>

      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="weekly" data-testid="tab-weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly" data-testid="tab-monthly">Monthly</TabsTrigger>
          <TabsTrigger value="alltime" data-testid="tab-alltime">All-Time</TabsTrigger>
        </TabsList>
        <TabsContent value="weekly" className="mt-6">
          <Leaderboard />
        </TabsContent>
        <TabsContent value="monthly" className="mt-6">
          <Leaderboard />
        </TabsContent>
        <TabsContent value="alltime" className="mt-6">
          <Leaderboard />
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
            <Badge variant="secondary">#4</Badge>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-3xl font-bold text-primary">2,180 pts</div>
            <p className="text-xs text-muted-foreground mt-1">
              +240 points this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points to Next Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-3xl font-bold text-chart-4">240</div>
            <p className="text-xs text-muted-foreground mt-1">
              To reach rank #3
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-3xl font-bold text-chart-3">7 days</div>
            <p className="text-xs text-muted-foreground mt-1">
              Keep it up! 🔥
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
