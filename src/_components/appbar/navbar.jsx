"use client";

import { AppbarDesktop, AppbarMobile } from "@/app";
import { useMediaQuery, useTheme } from "@mui/material";
import HelpAppbarDesktop from "./helpAppbarDesktop";

export default function NavBar() {
  const theme = useTheme();

  // if it is true it will be on Desktop otherwise Mobile.
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div>
        {matches ? (
          <AppbarMobile matches={matches} />
        ) : (
          <AppbarDesktop matches={matches} />
          // <HelpAppbarDesktop />
        )}
      </div>
    </>
  );
}

// 2 navbars for Destop

// 1. AppbarDesktop
// 2. helpAppbarDesktop
