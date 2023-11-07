"use client";

import { Drawer, List, ListItemButton, ListItemText, Box } from "@mui/material";

import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
import { setShowContactBox } from "@/redux/features/contactBox/contactBoxSlice";
import Link from "next/link";
import ContactBox from "@/components/helpPage/contactDrawer";
// import { Actions } from "../../app";

export default function HelpPageAppDrawer() {
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
        <List>
          <ListItemButton>
            <Link href="/">HOME</Link>
          </ListItemButton>
          <ListItemButton onClick={() => dispatch(setShowContactBox(true))}>
            CONTACT
          </ListItemButton>
          {/* <Actions /> */}
        </List>
      </Drawer>
      <ContactBox />
    </>
  );
}
