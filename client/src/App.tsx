import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import FallingPetals from "@/components/FallingPetals";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Letter from "@/pages/Letter";
import Timeline from "@/pages/Timeline";
import Reasons from "@/pages/Reasons";
import Wishes from "@/pages/Wishes";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen romantic-gradient font-inter relative overflow-x-hidden">
      <FloatingHearts />
      <FallingPetals />
      <Navbar />
      <main className="relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/letter" component={Letter} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/reasons" component={Reasons} />
          <Route path="/wishes" component={Wishes} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
