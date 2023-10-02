import { styled } from "@mui/system";
import { Box, Typography, List, Button } from "@mui/material";
import { Colors } from "../theme";

export const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "26.8px 115px",
  margin: "0rem 1rem 0rem 1rem",
  background: Colors.dove_gray,
  borderRadius: "4px",
  [theme.breakpoints.down("md")]: {
    margin: "0rem 4rem 0rem 4rem",
    padding: "28.8px 14px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    // padding: "26.8px 14px",
    margin: "0rem 1rem 0rem 1rem",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "42px",
  lineHeight: "54px",
  fontWeight: "bold",
  paddingBottom: "2rem",
  marginTop: "2rem",
  color: Colors.dark,
  [theme.breakpoints.down("lg")]: {
    fontSize: "34px",
    lineHeight: "44px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "4rem",
    // paddingRight: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    // fontSize: "30px",
    // lineHeight: "40px",
    fontSize: "30px",
    lineHeight: "44px",
    paddingLeft: "0rem",
    paddingRight: "0rem",
  },
}));

export const Testimonial = styled(Typography)(({ theme }) => ({
  display: "flex",
  textAlign: "left",
  fontSize: "22px",
  paddingBottom: "2rem",
  // fontFamily: "sans-serif",
  color: Colors.dark,
  [theme.breakpoints.down("md")]: {
    // paddingRight: "4rem",

    paddingLeft: "4rem",
    paddingRight: "4rem",
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0rem",
    paddingRight: "0rem",
    fontSize: "20px",
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
    marginLeft: "3.6rem",
    marginRight: "3.6rem",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "26.8px 92px",
    marginLeft: "0rem",
    marginRight: "0rem",
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
  fontSize: "24px",
  fontWeight: "bold",
  // fontFamily: "sans-serif",
  color: Colors.dark,
  paddingBottom: "1rem",
}));

// BannerText
export const BannerText = styled(Typography)(({ theme }) => ({
  // fontFamily: "sans-serif",
  color: Colors.primary,
  display: "flex",
  fontSize: "20px",
  textAlign: "left",
}));

// export const BannerImage = styled("img")(({ src, theme }) => ({
//   src: `url(${src})`,
//   marginLeft: "4rem",
//   width: "100px",
// }));

export const BannerImage = styled(Box)(({ theme }) => ({
  // display: "flex",
  // justifyContent: "center",
  // width: "100%",
  // height: "100%",
  // padding: "0px 0px",
  // [theme.breakpoints.down("sm")]: {
  //   flexDirection: "column",
  //   alignItems: "start",
  // },
}));
