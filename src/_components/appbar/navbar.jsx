"use client";

import { AppDrawer, AppbarDesktop, AppbarMobile, HelpAppDrawer } from "@/app";
import { useMediaQuery, useTheme } from "@mui/material";
import HelpAppbarDesktop from "./helpAppbarDesktop";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const theme = useTheme();

  const pathname = usePathname();
  // useEffect(() => {
  //   // Do something here...
  // }, [pathname]);

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
              <HelpAppDrawer />
            </>
          ) : (
            <HelpAppbarDesktop matches={matches} />
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

        {/* If isHelpPage{
            if matches{
              HelpAppbarMobile
            }
            else{
              HelpAppbarDesktop
            }
          else
            if matches{
              AppbarMobile
            }
            else{
              AppbarDesktop
            }
        } */}
      </div>
    </>
  );
}
