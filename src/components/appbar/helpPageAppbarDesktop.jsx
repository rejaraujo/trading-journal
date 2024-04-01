"use client";

import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  NavListItem,
} from "@/styles/appbar";
import { ListItemButton } from "@mui/material";
import { Colors } from "@/styles/theme";
import Link from "next/link";
import ContactBox from "../helpPage/contactDrawer";
import { useAppDispatch } from "@/redux/hooks";
import { setShowContactBox } from "@/redux/features/contactBox/contactBoxSlice";
import { useRouter } from "next/navigation";

export default function HelpAppbarDesktop() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleButtonClick = (route) => {
    router.push(route);
  };

  return (
    <>
      <AppbarContainer
        sx={{
          padding: "38px 48px",
        }}>
        <AppbarHeader>
          <Link
            href="/"
            style={{
              fontSize: "34px",
            }}>
            Trade<strong style={{ color: Colors.green }}>Tracker</strong>{" "}
          </Link>
        </AppbarHeader>
        <MyList type="row" sx={{ flexGrow: 0 }}>
          <NavListItem onClick={() => handleButtonClick("/")}>HOME</NavListItem>
          <NavListItem
            variant="contained"
            disableTouchRipple
            onClick={() => dispatch(setShowContactBox(true))}>
            CONTACT
          </NavListItem>
        </MyList>
        <ContactBox />
      </AppbarContainer>
    </>
  );
}
