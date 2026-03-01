import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

const About = React.lazy(() => import("./pages/About"));
const Programmes = React.lazy(() => import("./pages/Programmes"));
const ForParents = React.lazy(() => import("./pages/ForParents"));
const Contact = React.lazy(() => import("./pages/Contact"));
const LearningBuddy = React.lazy(() => import("./pages/LearningBuddy"));
const CookiesPolicy = React.lazy(() => import("./pages/CookiesPolicy"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const AccessControl = React.lazy(() => import("./pages/AccessControl"));
const WhatsNew = React.lazy(() => import("./pages/WhatsNew"));
const JoinOurTeam = React.lazy(() => import("./pages/JoinOurTeam"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Centres = React.lazy(() => import("./pages/Centres"));
const TrialClass = React.lazy(() => import("./pages/TrialClass"));
const OurMethodology = React.lazy(() => import("./pages/OurMethodology"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageLayout>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programmes" element={<Programmes />} />
              <Route path="/programmes/for-parents" element={<ForParents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/learning-buddy" element={<LearningBuddy />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/policies/access-control" element={<AccessControl />} />
              <Route path="/whats-new" element={<WhatsNew />} />
              <Route path="/join-our-team" element={<JoinOurTeam />} />
              <Route path="/centres" element={<Centres />} />
              <Route path="/trial-class" element={<TrialClass />} />
              <Route path="/our-methodology" element={<OurMethodology />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
