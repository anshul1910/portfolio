import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/contexts/theme-context";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import LoadingScreen from "@/components/shared/LoadingScreen";
import CommandPalette from "@/components/shared/CommandPalette";

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const queryClient = new QueryClient();

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-accent-500 border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LoadingScreen />
        <BrowserRouter>
          <CommandPalette />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="*"
                element={
                  <Suspense fallback={<PageFallback />}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster richColors position="bottom-right" theme="system" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
