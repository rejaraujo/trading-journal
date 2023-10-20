"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, List, ListItemText } from "@mui/material";
import { Colors } from "../theme";

export const ActionListIem = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  fontWeight: "bold",
  color: Colors.white_off, // check the color
  background: Colors.green,
  borderRadius: "4px",
  letterSpacing: "0.64px",
  fontWeight: "bold",
}));

export const ActionListItemButton = styled(Box)(() => ({
  justifyContent: "center",
  "&.MuiListItemButton-root:hover": {
    color: Colors.green,
    background: "transparent",
    m: "4px",
  },
}));
