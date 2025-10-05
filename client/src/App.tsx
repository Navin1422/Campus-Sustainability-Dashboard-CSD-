import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/hooks/use-theme";
import ThemeToggle from "@/components/ThemeToggle";
import Dashboard from "@/pages/Dashboard";
import Games from "@/pages/Games";
import LeaderboardPage from "@/pages/LeaderboardPage";
import Challenges from "@/pages/Challenges";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/not-found";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/leaderboard" component={LeaderboardPage} />
      <Route path="/challenges" component={Challenges} />
      <Route path="/games" component={Games} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between gap-4 px-6 py-3 border-b border-border bg-background">
                  <div className="flex items-center gap-2">
                    <SidebarTrigger data-testid="button-sidebar-toggle" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="gap-2 px-3 py-1.5" data-testid="badge-user-points">
                      <Flame className="w-4 h-4 text-chart-4" />
                      <span className="font-mono font-bold">2,180 pts</span>
                    </Badge>
                    <ThemeToggle />
                    <Avatar className="h-9 w-9" data-testid="avatar-user">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        JK
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </header>
                <main className="flex-1 overflow-auto">
                  <Router />
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
