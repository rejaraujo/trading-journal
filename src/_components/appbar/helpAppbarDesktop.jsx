"use client";

import { AppbarContainer, AppbarHeader, MyList } from "@/styles/appbar";
import { ListItemButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import { Colors } from "@/styles/theme";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setAnchorEl } from "@/redux/features/anchorEl/anchorSlice";

export default function HelpAppbarDesktop({ matches }) {
  const { anchorEl } = useAppSelector((state) => state.anchorEl);
  const dispatch = useAppDispatch();

  const handleClick = (event) => {
    dispatch(setAnchorEl(event.currentTarget));
  };

  const handleClose = () => {
    dispatch(setAnchorEl(null));
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <AppbarContainer
        sx={{
          borderBottom: 1,
          borderBottomColor: Colors.light_grey,
        }}>
        {/* <AppbarHeader sx={{ position: "absolute", left: "0", pt: 1, ml: 4 }}> */}
        <AppbarHeader>
          <Link href="/">
            <Image src={Logo} alt="logo" quality={100} width={190} />
          </Link>
        </AppbarHeader>
        <MyList type="row" sx={{}}>
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
            sx={{
              // justifyContent: "center",
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/contact"
              style={{
                fontSize: "15px",
                letterSpacing: "0.64px",
                margin: 0,
              }}>
              CONTACT
            </Link>
          </ListItemButton>
        </MyList>
      </AppbarContainer>
    </>
  );
}
