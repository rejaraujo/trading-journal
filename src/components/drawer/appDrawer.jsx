"use client";

import { Drawer, List, ListItemText, ListItemButton } from "@mui/material";
import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
// import { Actions } from "../../app";
import { Colors } from "../../styles/theme";
import Link from "next/link";

export default function AppDrawer() {
  const { drawerOpen } = useAppSelector((state) => state.drawerOpen);
  const dispatch = useAppDispatch();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => dispatch(setDrawerOpen(false))}>
          <CloseIcon
            sx={{
              fontSize: "2rem",
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
        </List>

        <List type="row" style={{}}>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              justifyContent: "center",
              "&.MuiListItemButton-root:hover": {
                color: Colors.light_grey,
                background: "transparent",
              },
            }}>
            <Link
              href="/login"
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                background: Colors.green,
                borderRadius: "4px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
                // padding: "5px 72px",
                width: "100%",
                fontSize: "18px",
              }}>
              LOG IN
            </Link>
          </ListItemButton>

          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              justifyContent: "center",
              "&.MuiListItemButton-root:hover": {
                color: Colors.light_grey,
                background: "transparent",
              },
            }}>
            <Link
              href="/membership"
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                background: Colors.green,
                borderRadius: "4px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
                width: "100%",
                fontSize: "18px",
              }}>
              SIGN UP
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
