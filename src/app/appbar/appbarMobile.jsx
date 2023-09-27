"use client";

import { useDispatch } from "react-redux";
import { setDrawerOpen } from "../../redux/features/drawer/drawerSlice";
import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import { Colors } from "../../styles/theme";

export default function AppbarMobile({ matches }) {
  const dispatch = useDispatch();
  return (
    <AppbarContainer
      sx={{
        borderBottom: 1,
        borderBottomColor: "grey.200",
        position: "relative",
        pb: 7,
      }}>
      <IconButton
        onClick={() => dispatch(setDrawerOpen(true))}
        style={{ backgroundColor: "transparent" }}
        size="large"
        aria-label="open drawer"
        sx={{ position: "absolute", left: 25, pt: 4.5 }}>
        <MenuIcon
          fontSize="large"
          sx={{
            backgroundColor: Colors.blue_green,
            color: Colors.white_off,
            borderRadius: "4px",
            p: "7px",
          }}
        />
      </IconButton>
      <AppbarHeader sx={{ position: "absolute", right: 25, pt: 5, ml: 4 }}>
        <Image src={Logo} alt="logo" quality={100} width={180} />
      </AppbarHeader>
    </AppbarContainer>
  );
}
