
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Donations from "./pages/Donations";
import QBanks from "./pages/QBanks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
                <BrowserRouter>
          {/* Skip links for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <a href="#navigation" className="sr-only focus:not-sr-only">
            Skip to navigation
          </a>

          {/* Live regions for screen readers */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            <div id="page-title"></div>
          </div>
          <div aria-live="assertive" aria-atomic="true" className="sr-only">
            <div id="notifications"></div>
          </div>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/qbanks" element={<QBanks />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;
