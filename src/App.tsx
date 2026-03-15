import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import SolucoesHub from "./pages/SolucoesHub";
import ServicosHub from "./pages/ServicosHub";
import SolutionPage from "./pages/SolutionPage";
import ServicePage from "./pages/ServicePage";
import MindrayHub from "./pages/MindrayHub";
import MindrayProductPage from "./pages/MindrayProductPage";
import Estrutura from "./pages/Estrutura";
import Contato from "./pages/Contato";
import BlogHub from "./pages/BlogHub";
import Apoio from "./pages/Apoio";
import HexAIPage from "./pages/HexAIPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solucoes" element={<SolucoesHub />} />
            <Route path="/servicos" element={<ServicosHub />} />
            <Route path="/solucoes/:slug" element={<SolutionPage />} />
            <Route path="/servicos/:slug" element={<ServicePage />} />
            <Route path="/produtos-mindray" element={<MindrayHub />} />
            <Route path="/produtos-mindray/:slug" element={<MindrayProductPage />} />
            <Route path="/estrutura" element={<Estrutura />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/apoio" element={<Apoio />} />
            <Route path="/hexai" element={<HexAIPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
