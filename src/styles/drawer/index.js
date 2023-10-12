"use client";

import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { IconButton } from "@mui/material";

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 0,
  left: 300,
  zIndex: 1999, // the button will stay on the top of everything.
  // background: "transparent",
  color: Colors.light_grey,
}));
