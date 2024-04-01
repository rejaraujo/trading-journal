"use client";

import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Colors } from "../theme";

//container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex ",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 28px",
  borderBottom: 3,
  borderBottomStyle: "solid",
  borderBottomColor: Colors.light_grey,
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

export const NavListItem = styled(ListItemButton)(() => ({
  variant: "contained",
  disableTouchRipple: true,
  fontSize: "18px",
  letterSpacing: "0.64px",
  fontWeight: "bold",
  backgroundColor: "transparent",
  "&:hover": {
    color: Colors.green,
    backgroundColor: "transparent",
    fontSize: "18px",
    letterSpacing: "0.64px",
    fontWeight: "bold",
  },
}));

export const Span = styled(Typography)(() => ({
  fontFamily: "",
  fontSize: "34px",
  fontWeight: "bold",
  letterSpacing: "2px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  paddingLeft: "1.6rem",
}));
