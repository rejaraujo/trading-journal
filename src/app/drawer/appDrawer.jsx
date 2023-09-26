"use client";

import { Drawer, List, ListItemButton, ListItemText, Box } from "@mui/material";

import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
import { Actions } from "..";

export default function AppDrawer() {
  const { drawerOpen } = useSelector((state) => state.drawerOpen);
  const dispatch = useDispatch();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => dispatch(setDrawerOpen(false))}>
          <CloseIcon
            sx={{
              fontSize: "2rem",
              // background: "red",
            }}
          />
        </DrawerCloseButton>
      )}
      {/*  */}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>FEATURES</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Journal Features</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Analytical Features</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Sharing Features</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>PRICING</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>COMMUNITY</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>HELP</ListItemText>
          </ListItemButton>
          <Actions />
        </List>
      </Drawer>
    </>
  );
}
