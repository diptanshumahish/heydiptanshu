"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();
export default function Providers({ children }: React.PropsWithChildren) {
  useEffect(() => {
    var tempScroll = 0;
    const theme = localStorage.getItem("themeMode");
    if (theme === "true") {
      document.body.classList.add("dark");
    }

    const handleScroll = () => {
      var currentScroll = window.scrollY;
      if (tempScroll > currentScroll) {
        document.getElementById("flt")?.classList.remove("hidden");
      } else {
        document.getElementById("flt")?.classList.add("hidden");
      }
      tempScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("cleaned");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
