import { Leaf, Zap, Droplets, Recycle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  change: string;
  color: string;
}

function MetricCard({ icon, value, label, change, color }: MetricCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
        <div className="text-right flex-1">
          <div className="font-mono text-4xl font-bold text-foreground mb-1">{value}</div>
          <div className="text-sm text-muted-foreground mb-2">{label}</div>
          <div className="text-xs text-primary font-medium">{change}</div>
        </div>
      </div>
    </Card>
  );
}

export default function ImpactMetrics() {
  const metrics = [
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      value: "1,247",
      label: "Trees Planted",
      change: "+23 this week",
      color: "bg-primary/10",
    },
    {
      icon: <Zap className="w-6 h-6 text-chart-4" />,
      value: "3.2T",
      label: "CO₂ Reduced (kg)",
      change: "+180kg this week",
      color: "bg-chart-4/10",
    },
    {
      icon: <Droplets className="w-6 h-6 text-chart-2" />,
      value: "890L",
      label: "Water Saved",
      change: "+45L this week",
      color: "bg-chart-2/10",
    },
    {
      icon: <Recycle className="w-6 h-6 text-chart-3" />,
      value: "2,450",
      label: "Items Recycled",
      change: "+312 this week",
      color: "bg-chart-3/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
