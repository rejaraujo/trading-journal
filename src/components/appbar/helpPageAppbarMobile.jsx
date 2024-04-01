"use client";

import { setDrawerOpen } from "../../redux/features/drawer/drawerSlice";
import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors } from "../../styles/theme";
import { useAppDispatch } from "@/redux/hooks";

export default function HelpPageAppbarMobile({ matches }) {
  const dispatch = useAppDispatch();
  return (
    <AppbarContainer>
      <AppbarHeader>
        <IconButton
          onClick={() => dispatch(setDrawerOpen(true))}
          // style={{ backgroundColor: "transparent", padding: "1.6rem" }}
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
    </AppbarContainer>
  );
}
