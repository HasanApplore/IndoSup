import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Home from "@/pages/home";
import About from "@/pages/about";
import Solutions from "@/pages/solutions";
import Products from "@/pages/products";
import SteelProducts from "@/pages/steel-products";
import NonSteelProducts from "@/pages/non-steel-products";
import NotFound from "@/pages/not-found";

// Main App component following Next.js patterns
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/products" component={Products} />
          <Route path="/products/steel" component={SteelProducts} />
          <Route path="/products/non-steel" component={NonSteelProducts} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
