"use client";

import { Drawer, List, ListItemButton, ListItemText, Box } from "@mui/material";

import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
import { setShowContactBox } from "@/redux/features/contactBox/contactBoxSlice";
import Link from "next/link";
import ContactBox from "@/components/helpPage/contactDrawer";
import { useSession } from "next-auth/react";
import LoginButton from "../appbar/loginButton";
import { Colors } from "@/styles/theme";

export default function HelpPageAppDrawer() {
  const { drawerOpen } = useAppSelector((state) => state.drawerOpen);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => dispatch(setDrawerOpen(false))}>
          <CloseIcon
            sx={{
              fontSize: "2rem",
              background: Colors.primary,
              position: "absolute",
              left: 150,
              top: 5,
            }}
          />
        </DrawerCloseButton>
      )}
      {/*  */}
      <Drawer open={drawerOpen}>
        <List style={{ marginTop: "12px" }}>
          <ListItemButton>
            <Link
              href="/"
              style={{
                fontSize: "18px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
              }}>
              HOME
            </Link>
          </ListItemButton>
          <ListItemButton
            onClick={() => dispatch(setShowContactBox(true))}
            style={{
              fontSize: "18px",
              letterSpacing: "0.64px",
              fontWeight: "bold",
            }}>
            CONTACT
          </ListItemButton>
          {/* <Actions /> */}
        </List>
        <LoginButton session={session} />
      </Drawer>
      <ContactBox />
    </>
  );
}
