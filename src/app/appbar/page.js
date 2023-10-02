// "use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { AppbarMobile, AppbarDesktop } from "..";

export default function Appbar() {
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
        )}
      </div>
    </>
  );
}
