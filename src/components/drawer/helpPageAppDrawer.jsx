"use client";

import { Drawer } from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  NavListItem,
} from "@/styles/appbar";
import { DrawerCloseButton } from "@/styles/drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";
import { setShowContactBox } from "@/redux/features/contactBox/contactBoxSlice";
import ContactBox from "@/components/helpPage/contactDrawer";
import { useSession } from "next-auth/react";
import LoginButton from "../appbar/loginButton";
import { Colors } from "@/styles/theme";
import { useRouter } from "next/navigation";

export default function HelpPageAppDrawer() {
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
              top: 5,
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <AppbarContainer>
          <AppbarHeader>
            <MyList style={{ marginTop: "12px" }}>
              <NavListItem onClick={() => handleButtonClick("/")}>
                HOME
              </NavListItem>
              <NavListItem onClick={() => dispatch(setShowContactBox(true))}>
                CONTACT
              </NavListItem>
              {/* <Actions /> */}
            </MyList>
          </AppbarHeader>
        </AppbarContainer>
        <LoginButton session={session} />
      </Drawer>
      <ContactBox />
    </>
  );
}
