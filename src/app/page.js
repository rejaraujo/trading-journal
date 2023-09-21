"use client";

import { useEffect } from "react";
import { Appbar, HomePage, AppDrawer } from "../app";
import { ThemeProvider } from "@mui/system";
import theme from "@/styles/theme";

export default function Home() {
  // title the page

  useEffect(() => {
    document.title = "Trading Journal - HomePage";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <HomePage />
      <AppDrawer />
    </ThemeProvider>
  );
}
