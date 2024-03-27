"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoginButton from "../appbar/loginButton";
import { Drawer } from "@mui/material";
import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  NavListItem,
} from "@/styles/appbar";
import { Colors } from "@/styles/theme";

export default function AppDrawer() {
  const { drawerOpen } = useAppSelector((state) => state.drawerOpen);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const router = useRouter();

  const handleButtonClick = (route) => {
    router.push(route);
  };
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
        <AppbarContainer>
          <AppbarHeader>
            <MyList style={{ marginTop: "12px" }}>
              <NavListItem onClick={() => handleButtonClick("/membership")}>
                MEMBERSHIP
              </NavListItem>
              <NavListItem
                sx={{ marginBottom: "2rem" }}
                onClick={() => handleButtonClick("/help")}>
                BLOG
              </NavListItem>
              <LoginButton session={session} />
            </MyList>
          </AppbarHeader>
        </AppbarContainer>
      </Drawer>
    </>
  );
}
