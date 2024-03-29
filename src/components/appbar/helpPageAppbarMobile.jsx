"use client";

import { setDrawerOpen } from "../../redux/features/drawer/drawerSlice";
import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import { Colors } from "../../styles/theme";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";

export default function HelpPageAppbarMobile({ matches }) {
  const dispatch = useAppDispatch();
  return (
    <AppbarContainer
      sx={{
        borderBottom: 1,
        borderBottomColor: Colors.light_grey,
        padding: "0rem 2rem 0rem 0rem ",
      }}>
      <AppbarHeader>
        {/*  */}
        <IconButton
          onClick={() => dispatch(setDrawerOpen(true))}
          style={{ backgroundColor: "transparent", padding: "1.6rem" }}
          size="large"
          aria-label="open drawer">
          <MenuIcon
            fontSize="large"
            sx={{
              backgroundColor: Colors.secondary,
              color: Colors.light_grey,
              borderRadius: "4px",
              p: "7px",
            }}
          />
        </IconButton>
      </AppbarHeader>

      <Link href="/">
        <Image src={Logo} alt="logo" quality={100} width={180} />
      </Link>
    </AppbarContainer>
  );
}
