"use client"; // Ensures this file runs as a client component in Next.js

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "sonner";

interface Props {
  children: ReactNode; // Type for React children
}

const AppProvider = ({ children }: Props) => {
  // Create a new QueryClient instance for React Query
  const queryClient = new QueryClient();

  return (
    // Wrap the app with QueryClientProvider so React Query can be used globally
    <QueryClientProvider client={queryClient}>
      {children}

      {/* Global toast notifications using Sonner */}
      <Toaster richColors position="top-right" />

      {/* Example: If you use NextAuth, you can wrap children with SessionProvider here */}
      {/* </SessionProvider> */}
    </QueryClientProvider>
  );
};

export default AppProvider;
