"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, List, Button } from "@mui/material";
import { Colors } from "../theme";

export const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "26.8px 115px",
  margin: "0rem 1rem 0rem 1rem",
  background: Colors.light_grey,
  borderRadius: "4px",
  textAlign: "center",
  fontSize: "20px",
  color: Colors.secondary,
  lineHeight: "28px",
  letterSpacing: "0.32px",

  [theme.breakpoints.down("md")]: {
    margin: "0rem 4rem 0rem 4rem",
    padding: "28.8px 14px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0rem 1rem 0rem 1rem",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  // fontFamily: "__Work_Sans_aef32b",
  fontSize: "42px",
  lineHeight: "56px",
  fontWeight: "bold",
  marginBlockEnd: "4.5rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    marginBlockEnd: "1.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginBlockEnd: "1.3rem",
  },
}));

export const Testimonial = styled(Typography)(({ theme }) => ({
  display: "flex",
  textAlign: "left",
  fontSize: "22px",
  paddingBottom: "2rem",
  fontFamily: "__Work_Sans_aef32b",
  color: Colors.dark,
  [theme.breakpoints.down("md")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0.7rem",
    paddingRight: "0rem",
    fontSize: "20px",
  },
}));

// SignUp Now Button
export const MyButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "20px",
  width: "100%",
  padding: "26.8px 115px",
  borderRadius: "4px",
  letterSpacing: "0.64px",
  fontWeight: "bold",
  color: "black",
  background: Colors.green,
  "&.MuiButton-root:hover": {
    color: Colors.light_grey,
    background: Colors.green,
  },
}));

// 3 columns Banner news.
export const BannerHeader = styled(Typography)(() => ({
  color: Colors.secondary,
}));

export const BannerList = styled(List)(({ type, theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0rem",
    paddingRight: "0rem",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontFamily: "sans-serif",
  fontSize: "32px",
  lineHeight: "40px",
  letterSpacing: "4px",
  margin: 0,
  fontWeight: 600,
  color: "#222",
  paddingBottom: "1rem",
}));

// BannerText
export const BannerText = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "28px",
  letterSpacing: "0,32px",
  color: "#222",
  margin: " 0 0 10px",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0em",
  marginInlineEnd: "0em",
  fontFamily: "__Work_Sans_aef32b",
}));
