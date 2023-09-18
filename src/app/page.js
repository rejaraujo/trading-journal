"use client";

import { useEffect } from "react";
import { Appbar, HomePage } from "../app";

export default function Home() {
  // title the page

  useEffect(() => {
    document.title = "Trading Journal - HomePage";
  }, []);
  return (
    <>
      <Appbar />
      <HomePage />
    </>
  );
}
