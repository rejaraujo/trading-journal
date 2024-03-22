"use client";

import { Drawer, List, ListItemText, ListItemButton } from "@mui/material";
import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
import Link from "next/link";

import { useSession } from "next-auth/react";
import LoginButton from "../appbar/loginButton";
import { Colors } from "@/styles/theme";

export default function AppDrawer() {
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
              top: 1,
            }}
          />
        </DrawerCloseButton>
      )}
      {/*  */}
      <Drawer open={drawerOpen}>
        <List style={{ marginTop: "12px" }}>
          <ListItemButton>
            <ListItemText>
              <Link
                href="/membership"
                style={{
                  fontSize: "18px",
                  letterSpacing: "0.64px",
                  fontWeight: "bold",
                }}>
                MEMBERSHIP
              </Link>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <Link
                href="/help"
                style={{
                  fontSize: "18px",
                  letterSpacing: "0.64px",
                  fontWeight: "bold",
                }}>
                BLOG
              </Link>
            </ListItemText>
          </ListItemButton>
          <LoginButton session={session} />
        </List>
      </Drawer>
    </>
  );
}
