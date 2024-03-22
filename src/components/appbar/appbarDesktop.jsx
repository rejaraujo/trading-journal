"use client";

import { AppbarContainer, AppbarHeader, MyList } from "@/styles/appbar";
import { ListItemButton } from "@mui/material";
import { Colors } from "../../styles/theme";
import Link from "next/link";
import LoginButton from "./loginButton";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { setAnchorEl } from "@/redux/features/anchorEl/anchorSlice";
import { useSession } from "next-auth/react";

export default function AppbarDesktop({}) {
  const { data: session } = useSession();
  return (
    <>
      <AppbarContainer
        sx={{
          borderBottom: 3,
          borderBottomColor: Colors.light_grey,
        }}>
        <AppbarHeader>
          <Link href="/">
            <span
              style={{
                fontFamily: "",
                fontSize: "34px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                paddingLeft: "1.6rem",
              }}>
              Trade<strong style={{ color: Colors.green }}>Tracker</strong>{" "}
            </span>
          </Link>
        </AppbarHeader>
        <MyList type="row" sx={{}}>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/membership"
              style={{
                fontSize: "18px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
              }}>
              MEMBERSHIP
            </Link>
          </ListItemButton>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/help"
              style={{
                fontSize: "18px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
              }}>
              BLOG
            </Link>
          </ListItemButton>

          {/* LOGIN IN */}
          <LoginButton session={session} />
        </MyList>
      </AppbarContainer>
    </>
  );
}
