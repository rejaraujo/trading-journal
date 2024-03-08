"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "../../redux/features/drawer/drawerSlice";
import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";

import { Colors } from "../../styles/theme";
import Link from "next/link";

export default function AppbarMobile() {
  const dispatch = useAppDispatch();
  return (
    <AppbarContainer
      sx={{
        borderBottom: 1,
        borderBottomColor: Colors.light_grey,
        padding: "0rem 2rem 0rem 0rem ",
      }}>
      <AppbarHeader>
        {/*  */}
        <IconButton
          onClick={() => dispatch(setDrawerOpen(true))}
          style={{ backgroundColor: "transparent", padding: "1.6rem" }}
          size="large"
          aria-label="open drawer">
          <MenuIcon
            fontSize="large"
            sx={{
              backgroundColor: Colors.secondary,
              color: Colors.light_grey,
              borderRadius: "4px",
              p: "7px",
            }}
          />
        </IconButton>
      </AppbarHeader>
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
    </AppbarContainer>
  );
}
