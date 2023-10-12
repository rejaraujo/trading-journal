"use client";

import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { Box, TextField } from "@mui/material";
// import InputBase from "@mui/material/InputBase";
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
  top: 70,
  right: 50,
  width: "28%",
  height: "100%",
  // background: Colors.light_grey,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  // opacity: 0.9,
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
