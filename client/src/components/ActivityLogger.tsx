import { useState } from "react";
import { Plus, Recycle, Zap, Droplets, TreePine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Activity {
  id: string;
  type: string;
  description: string;
  points: number;
  timestamp: string;
}

export default function ActivityLogger() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      type: "recycling",
      description: "Recycled 5 plastic bottles",
      points: 25,
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      type: "energy",
      description: "Used stairs instead of elevator",
      points: 10,
      timestamp: "5 hours ago",
    },
    {
      id: "3",
      type: "transport",
      description: "Biked to campus",
      points: 50,
      timestamp: "1 day ago",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [activityType, setActivityType] = useState("");
  const [quantity, setQuantity] = useState("");
  const { toast } = useToast();

  const activityTypes = [
    { value: "recycling", label: "Recycling", icon: Recycle, points: 5 },
    { value: "energy", label: "Energy Saving", icon: Zap, points: 10 },
    { value: "water", label: "Water Conservation", icon: Droplets, points: 8 },
    { value: "planting", label: "Tree Planting", icon: TreePine, points: 100 },
  ];

  const handleLogActivity = () => {
    if (!activityType || !quantity) return;

    const type = activityTypes.find(t => t.value === activityType);
    const points = (type?.points || 0) * parseInt(quantity);

    const newActivity: Activity = {
      id: Date.now().toString(),
      type: activityType,
      description: `${type?.label}: ${quantity} ${quantity === "1" ? "item" : "items"}`,
      points,
      timestamp: "Just now",
    };

    setActivities([newActivity, ...activities]);
    setOpen(false);
    setActivityType("");
    setQuantity("");

    toast({
      title: "Activity Logged!",
      description: `You earned ${points} points! 🎉`,
    });
  };

  const getIcon = (type: string) => {
    const activity = activityTypes.find(a => a.value === type);
    if (!activity) return <Recycle className="w-5 h-5" />;
    const Icon = activity.icon;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <CardTitle className="text-2xl font-display font-bold">Recent Activities</CardTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" data-testid="button-log-activity">
              <Plus className="w-4 h-4 mr-2" />
              Log Activity
            </Button>
          </DialogTrigger>
          <DialogContent data-testid="dialog-log-activity">
            <DialogHeader>
              <DialogTitle>Log Sustainability Activity</DialogTitle>
              <DialogDescription>
                Track your eco-friendly actions and earn points!
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="activity-type">Activity Type</Label>
                <Select value={activityType} onValueChange={setActivityType}>
                  <SelectTrigger id="activity-type" data-testid="select-activity-type">
                    <SelectValue placeholder="Select activity type" />
                  </SelectTrigger>
                  <SelectContent>
                    {activityTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label} ({type.points} pts each)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  placeholder="How many?"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  data-testid="input-quantity"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleLogActivity} data-testid="button-submit-activity">
                Log Activity
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            data-testid={`activity-${activity.id}`}
            className="flex items-center gap-4 p-3 rounded-md bg-muted/30 hover-elevate"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {getIcon(activity.type)}
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">{activity.description}</div>
              <div className="text-xs text-muted-foreground">{activity.timestamp}</div>
            </div>
            <div className="font-mono font-bold text-primary">+{activity.points}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
