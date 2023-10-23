"use client";

import { AppbarContainer, AppbarHeader, MyList } from "@/styles/appbar";
import { ListItemButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import { Colors } from "@/styles/theme";
import Link from "next/link";
import ContactBox from "../helpPage/contactDrawer";
import { useAppDispatch } from "@/redux/hooks";
import { setShowContactBox } from "@/redux/features/contactBox/contactBoxSlice";

export default function HelpAppbarDesktop({ matches }) {
  const dispatch = useAppDispatch();
  return (
    <>
      <AppbarContainer
        sx={{
          borderBottom: 1,
          borderBottomColor: Colors.light_grey,
        }}>
        {/* <AppbarHeader sx={{ position: "absolute", left: "0", pt: 1, ml: 4 }}> */}
        <AppbarHeader>
          <Image src={Logo} alt="logo" quality={100} width={190} />
        </AppbarHeader>
        <MyList type="row" sx={{ flexGrow: 0 }}>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              // justifyContent: "center",
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/"
              style={{
                fontSize: "15px",
                letterSpacing: "0.64px",
                margin: 0,
              }}>
              HOME
            </Link>
          </ListItemButton>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            onClick={() => dispatch(setShowContactBox(true))}
            sx={{
              // justifyContent: "center",
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            CONTACT
          </ListItemButton>
        </MyList>
        <ContactBox />
      </AppbarContainer>
    </>
  );
}