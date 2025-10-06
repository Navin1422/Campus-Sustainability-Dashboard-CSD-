import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Droplets, Trash2, Recycle, Leaf } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import React from 'react';


const energyData = [
  { month: "Jan", consumption: 4500, savings: 240 },
  { month: "Feb", consumption: 4200, savings: 300 },
  { month: "Mar", consumption: 4800, savings: 200 },
  { month: "Apr", consumption: 4100, savings: 278 },
  { month: "May", consumption: 3900, savings: 189 },
  { month: "Jun", consumption: 4300, savings: 239 },
  { month: "Jul", consumption: 4600, savings: 349 },
];

const waterData = [
  { date: "Week 1", usage: 22000 },
  { date: "Week 2", usage: 25000 },
  { date: "Week 3", usage: 21000 },
  { date: "Week 4", usage: 27000 },
  { date: "Week 5", usage: 24000 },
  { date: "Week 6", usage: 29000 },
];

const wasteData = [
  { name: "Recycled", value: 45, color: "#4ade80" }, // green-400
  { name: "Landfill", value: 35, color: "#f87171" }, // red-400
  { name: "Composted", value: 20, color: "#fb923c" }, // orange-400
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50/50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sustainability Dashboard</h1>
          <p className="text-gray-600 mt-1">Analytics and insights for campus resource management.</p>
        </header>

        {/* Key Metrics Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Energy Consumption</CardTitle>
              <Zap className="h-5 w-5 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,300 kWh</div>
              <p className="text-xs text-green-600">-3.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
              <Droplets className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">29,000 L</div>
              <p className="text-xs text-red-600">+1.5% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Recycling Rate</CardTitle>
              <Recycle className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">65%</div>
              <p className="text-xs text-green-600">+5% from last month</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Carbon Footprint</CardTitle>
              <Leaf className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5 tCO₂e</div>
              <p className="text-xs text-green-600">-0.5 tCO₂e from last month</p>
            </CardContent>
          </Card>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Energy Consumption Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Monthly Energy Consumption (kWh)</CardTitle>
              <CardDescription>Tracking electricity usage and savings over the last 7 months.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="consumption" stroke="#f59e0b" name="Consumption" />
                  <Line type="monotone" dataKey="savings" stroke="#10b981" name="Savings" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Waste Composition Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Waste Composition</CardTitle>
              <CardDescription>Breakdown of waste generated this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={wasteData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {wasteData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Water Usage Chart */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Weekly Water Usage (Litres)</CardTitle>
              <CardDescription>Overview of water consumption across campus.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={waterData}>
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
                   <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                   <Tooltip />
                   <Legend />
                   <Bar dataKey="usage" fill="#3b82f6" name="Usage (L)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
