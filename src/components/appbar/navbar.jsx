"use client";

import {
  AppDrawer,
  AppbarDesktop,
  AppbarMobile,
  HelpPageAppDrawer,
  HelpPageAppbarDesktop,
} from "@/app";
import { useMediaQuery, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const theme = useTheme();

  const pathname = usePathname();

  // if it is true it will be on Desktop otherwise Mobile.
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const isHelpPage = pathname.indexOf("/help") >= 0;

  return (
    <>
      <div>
        {isHelpPage ? (
          matches ? (
            <>
              <AppbarMobile matches={matches} />
              <HelpPageAppDrawer />
            </>
          ) : (
            <HelpPageAppbarDesktop />
          )
        ) : matches ? (
          <>
            <AppbarMobile matches={matches} />
            <AppDrawer />
          </>
        ) : (
          <>
            <AppbarDesktop matches={matches} />
          </>
        )}
      </div>
    </>
  );
}
