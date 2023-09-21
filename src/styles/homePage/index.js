import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
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
  // padding: "15px",
  marginTop: "2rem",
  marginLeft: "2.6rem",
  // marginBottom: "3em",
  color: Colors.dark,
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
    lineHeight: "40px",
    // try margin for small screen.
  },
}));

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  //2nd way of using the breakpoints.
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  marginLeft: "4rem",
  width: "500px",
  // [theme.breakpoints.down("md")]: {
  //   width: "400px",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "400",
  // height: "300px",
  //},
}));
