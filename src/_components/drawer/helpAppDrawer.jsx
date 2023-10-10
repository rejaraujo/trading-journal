"use client";

import { Drawer, List, ListItemButton, ListItemText, Box } from "@mui/material";

import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
// import { Actions } from "../../app";

export default function HelpAppDrawer() {
  const { drawerOpen } = useSelector((state) => state.drawerOpen);
  const dispatch = useDispatch();

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
            <ListItemText>HOME</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>CONTACT</ListItemText>
          </ListItemButton>
          {/* <Actions /> */}
        </List>
      </Drawer>
    </>
  );
}
