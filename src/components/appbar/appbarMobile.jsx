"use client";

import { useAppDispatch } from "@/redux/hooks";
import { setDrawerOpen } from "../../redux/features/drawer/drawerSlice";
import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";

import { Colors } from "../../styles/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AppbarMobile() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <AppbarContainer>
      <AppbarHeader>
        <IconButton
          onClick={() => dispatch(setDrawerOpen(true))}
          size="small"
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
      <Link
        href="/"
        style={{
          fontSize: "34px",
        }}>
        Trade<strong style={{ color: Colors.green }}>Tracker</strong>{" "}
      </Link>
    </AppbarContainer>
  );
}
