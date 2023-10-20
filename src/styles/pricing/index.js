"use client";

import { styled } from "@mui/material/styles";
import {
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Button,
  ListItemButton,
} from "@mui/material";
import { Colors } from "../theme";

export const MyGrid = styled(Grid)(({ theme }) => ({
  paddingLeft: "1rem", // Default value
  paddingRight: "3rem", // Default value
  paddingTop: "4rem", // Default value

  // Responsive styles
  [theme.breakpoints.up("md")]: {
    paddingLeft: "6rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "4rem",
    paddingRight: "3rem",
    paddingTop: "5rem",
  },

  // background: Colors.dove_gray,
  // Other styles
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const MyGridItem = styled(Grid)(({ theme }) => ({
  // Add styles for the Grid item component here
  display: "flex",
  flexDirection: "column",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "__Work_Sans_aef32b",
  fontSize: "42px",
  fontWeight: "bold",
  lineHeight: "50px",
  letterSpacing: "3px",
}));

export const BannerMessage = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  //
  fontFamily: "__Work_Sans_aef32b",
  fontSize: "1.66rem",
  paddingTop: "1.5rem",
  ".MuiTypography-root": {
    color: Colors.primary,
  },
  ".MuiTypography-component": {
    variant: "body2",
    color: Colors.primary,
  },
}));

export const MyCardHeader = styled(CardHeader)(({ theme }) => ({
  ".MuiCardHeader-root": {},
  ".MuiCardHeader-title": {
    variant: "subtitle1",
    fontSize: "32px",
    fontWeight: "bold",
    lineHeight: "40px",
    textAlign: "center",
    letterSpacing: "2.05px",
  },
  ".MuiCardHeader-subheader": {},
  ".MuiCardHeader-subheader": {
    variant: "subtitle1",
    fontFamily: "sans-serif",
    fontSize: "26px",
    lineHeight: "40px",
    textAlign: "center",
    letterSpacing: "2.05px",
  },
}));

export const MyTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: Colors.secondary,
  letterSpacing: "0.32px",
  textAlign: "center",
  lineHeight: "28px",
  padding: "14px",
  margin: "0rem",
  //   ".MuiTypography-root": {
  //     variant: "body2",
  //   },
}));

export const MyListItemButton = styled(ListItemButton)(({ theme }) => ({
  // "&:last-child": {},
  paddingBottom: "2rem",
  "&.MuiListItemButton-root:hover": {
    background: "transparent",
  },
}));
