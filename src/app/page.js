"use client";

import { useEffect } from "react";
import { AppDrawer, Appbar, HomePage } from "../app";
import { ThemeProvider } from "@mui/system";
import theme from "@/styles/theme";
export default function App() {
  //title the page
  useEffect(() => {
    document.title = "Trading Journal - HomePage";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {/* Navbar page component*/}
      <Appbar />
      {/*MainGrid  & Footer page components*/}
      <HomePage />
      {/* Mobile Menu */}
      <AppDrawer />
    </ThemeProvider>
  );
}
