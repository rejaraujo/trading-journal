"use client";

import { useEffect } from "react";
import Page from "./home/page";
import Link from "next/link";
// import { ThemeProvider } from "@mui/system";
// import theme from "@/styles/theme";

export default function App() {
  //title the page
  useEffect(() => {
    document.title = "Trading Journal - HomePage";
  }, []);
  return (
    // <ThemeProvider theme={theme}>
    <>
      {/* <Link href="/home"> */}
      <Page />
      {/* </Link> */}
    </>
    // </ThemeProvider>
  );
}
