import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function ImpactChart() {
  const weeklyData = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 78 },
    { day: "Wed", value: 82 },
    { day: "Thu", value: 91 },
    { day: "Fri", value: 95 },
    { day: "Sat", value: 88 },
    { day: "Sun", value: 100 },
  ];

  const maxValue = Math.max(...weeklyData.map(d => d.value));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <CardTitle className="text-2xl font-display font-bold">Weekly Impact</CardTitle>
        <div className="flex items-center gap-1 text-primary text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          <span>+12% vs last week</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-2 h-48">
          {weeklyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full relative" style={{ height: "160px" }}>
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-chart-2 rounded-t-md transition-all hover-elevate cursor-pointer"
                  style={{ height: `${(data.value / maxValue) * 100}%` }}
                  data-testid={`bar-${data.day.toLowerCase()}`}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono font-bold text-foreground">
                    {data.value}
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground">{data.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
