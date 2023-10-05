"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, List, ListItemText } from "@mui/material";
import { Colors } from "../theme";

//container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex ",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 28px",
}));

// header
export const AppbarHeader = styled(Typography)(() => ({
  flexGrow: 1,
  color: Colors.secondary,
}));

// myList
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  alignItems: "center",
  justifyContent: "center",
}));

export const MyListItemText = styled(ListItemText)(() => ({
  fontFamily: "__Work_Sans_aef32b",
  color: Colors.dim_grey,
  "&:hover": {
    color: Colors.green,
  },
}));
