"use client";

import { styled, alpha } from "@mui/material/styles";
import { CardContent, CardHeader, Grid, InputBase } from "@mui/material";
import { Box, TextField } from "@mui/material";
import { Colors } from "../theme";

export const Search = styled("div")(({ theme }) => ({
  border: "1px solid #f5f6f7",
  borderRadius: theme.shape.borderRadius,
  flexGrow: 1,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  color: Colors.secondary,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  justifyContent: "center",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
  },
}));

//
export const ContactBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 55,
  right: 65,
  width: "28%",
  height: "100%",
  background: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  // opacity: 0.9,
  [theme.breakpoints.down("md")]: {
    right: 100,
  },
  [theme.breakpoints.down("sm")]: {
    left: 100,
  },
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.secondary,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px",
}));

export const MyGrid = styled(Grid)(({ theme }) => ({
  padding: "4em",
  paddingBottom: 0,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const MyGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const MyCardHeader = styled(CardHeader)(({ theme }) => ({
  ".MuiCardHeader-root": {},
  ".MuiCardHeader-title": {
    variant: "subtitle1",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "1.3em",
    textAlign: "center",
    paddingTop: "0.86rem",
  },
}));

export const MyCardContent = styled(CardContent)(({ theme }) => ({
  fontSize: "14px",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  color: Colors.green,
  textAlign: "center",
  lineHeight: "18px",
  padding: "0rem 4rem",
}));
