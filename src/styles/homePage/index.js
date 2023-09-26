import { styled } from "@mui/system";
import { Box, Typography, List, Grid } from "@mui/material";
import { Colors } from "../theme";

export const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  // background: Colors.secondary,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "start",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "42px",
  lineHeight: "54px",
  fontWeight: "bold",
  fontFamily: "sans-serif",

  paddingBottom: "2rem",
  marginTop: "1.2rem",

  color: Colors.dark,
  [theme.breakpoints.down("lg")]: {
    marginTop: "0rem",
    paddingLeft: "3rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
    lineHeight: "40px",
    marginTop: "0rem",
    paddingLeft: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0rem",
  },
}));

// 3 columns Banner news.

export const BannerHeader = styled(Typography)(() => ({
  flexGrow: 1,

  color: Colors.secondary,
}));

export const BannerList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  color: Colors.dark,
}));

// BannerText
export const BannerText = styled(Typography)(({ theme }) => ({
  // fontFamily: "sans-serif",
  color: Colors.primary,
  display: "flex",
  fontSize: "20px",
  paddingTop: "1rem",
  paddingRight: "3rem",
  textAlign: "left",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  marginLeft: "4rem",
  width: "500px",
}));
