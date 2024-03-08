"use client";

import { AppbarContainer, AppbarHeader, MyList } from "@/styles/appbar";
import { ListItemButton } from "@mui/material";
import { Colors } from "@/styles/theme";
import Link from "next/link";
import ContactBox from "../helpPage/contactDrawer";
import { useAppDispatch } from "@/redux/hooks";
import { setShowContactBox } from "@/redux/features/contactBox/contactBoxSlice";

export default function HelpAppbarDesktop() {
  const dispatch = useAppDispatch();
  return (
    <>
      <AppbarContainer
        sx={{
          borderBottom: 3,
          borderBottomColor: Colors.light_grey,
          padding: "38px 48px",
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
        <MyList type="row" sx={{ flexGrow: 0 }}>
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
              href="/"
              style={{
                letterSpacing: "1px",
                fontWeight: "bold",
                fontSize: "22px",
              }}>
              HOME
            </Link>
          </ListItemButton>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            onClick={() => dispatch(setShowContactBox(true))}
            sx={{
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}
            style={{
              letterSpacing: "1px",
              fontWeight: "bold",
              fontSize: "22px",
            }}>
            CONTACT
          </ListItemButton>
        </MyList>
        <ContactBox />
      </AppbarContainer>
    </>
  );
}
