import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, User, Shield, Palette } from "lucide-react";

export default function Settings() {
  return (
    <div className="container mx-auto px-6 py-8 space-y-8 max-w-4xl">
      <div>
        <h1 className="font-display font-bold text-4xl mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and notifications
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <CardTitle>Profile</CardTitle>
          </div>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" defaultValue="Jordan Kim" data-testid="input-name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jordan.kim@campus.edu" data-testid="input-email" />
          </div>
          <Button data-testid="button-save-profile">Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            <CardTitle>Notifications</CardTitle>
          </div>
          <CardDescription>Configure how you receive updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="challenge-notifications">Challenge Updates</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about new challenges and deadlines
              </p>
            </div>
            <Switch id="challenge-notifications" defaultChecked data-testid="switch-challenge-notifications" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="achievement-notifications">Achievement Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications when you unlock new badges
              </p>
            </div>
            <Switch id="achievement-notifications" defaultChecked data-testid="switch-achievement-notifications" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="leaderboard-notifications">Leaderboard Updates</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about your rank changes
              </p>
            </div>
            <Switch id="leaderboard-notifications" data-testid="switch-leaderboard-notifications" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="tips-notifications">Daily Sustainability Tips</Label>
              <p className="text-sm text-muted-foreground">
                Receive daily tips for eco-friendly living
              </p>
            </div>
            <Switch id="tips-notifications" defaultChecked data-testid="switch-tips-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            <CardTitle>Appearance</CardTitle>
          </div>
          <CardDescription>Customize how the dashboard looks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">
                Use dark theme for better visibility
              </p>
            </div>
            <Switch id="dark-mode" data-testid="switch-dark-mode" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <CardTitle>Privacy & Security</CardTitle>
          </div>
          <CardDescription>Manage your data and privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="profile-visibility">Public Profile</Label>
              <p className="text-sm text-muted-foreground">
                Allow others to see your profile and achievements
              </p>
            </div>
            <Switch id="profile-visibility" defaultChecked data-testid="switch-profile-visibility" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="leaderboard-visibility">Show on Leaderboard</Label>
              <p className="text-sm text-muted-foreground">
                Display your name and rank on public leaderboards
              </p>
            </div>
            <Switch id="leaderboard-visibility" defaultChecked data-testid="switch-leaderboard-visibility" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
