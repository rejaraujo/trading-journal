import { styled } from "@mui/system";
import { Box, Typography, List, Button } from "@mui/material";
import { Colors } from "../theme";

export const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
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
    fontSize: "36px",
    lineHeight: "40px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
    lineHeight: "40px",
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0rem",
    paddingRight: "0rem",
  },
}));

export const Testimonial = styled(Typography)(({ theme }) => ({
  display: "flex",
  textAlign: "left",
  fontSize: "22px",
  paddingBottom: "2rem",
  fontFamily: "sans-serif",
  color: Colors.dark,
  [theme.breakpoints.down("lg")]: {
    paddingRight: "4rem",
  },

  [theme.breakpoints.down("md")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0rem",
    paddingRight: "1rem",
  },
}));

// SignUp Now Button
export const MyButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "20px",
  padding: "26.8px 115px",
  borderRadius: "4px",
  letterSpacing: "0.64px",
  fontWeight: "bold",
  color: "black",
  background: Colors.green,
  "&.MuiButton-root:hover": {
    color: Colors.white_off,
    background: Colors.green,
  },
  [theme.breakpoints.down("md")]: {
    width: 700,
    color: Colors.danger,
    marginLeft: "3.6rem",
    marginRight: "3.6rem",
  },

  [theme.breakpoints.down("sm")]: {
    color: Colors.warning,
    padding: "26.8px 92px",
    marginLeft: "0rem",
    marginRight: "0rem",
  },
}));

// 3 columns Banner news.
export const BannerHeader = styled(Typography)(() => ({
  color: Colors.secondary,
}));

export const BannerList = styled(List)(({ type }) => ({
  // display: type === "row" ? "flex" : "block",
  // flexGrow: 3,
  // justifyContent: "center",
  // alignItems: "center",
  padding: "0rem",
  margin: "0rem",
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
