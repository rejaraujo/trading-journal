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
  //2nd way of using the breakpoints.
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

// export const MyImage = styled("img")(({ theme }) => ({
//   width: "450px",
//   [theme.breakpoints.down("md")]: {
//     width: "350px",
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: "320px",
//     height: "300px",
//   },
// }));

export const MessageText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "42px",
  lineHeight: "54px",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  // padding: "15px",
  marginTop: "2rem",
  // marginBottom: "3em",
  color: Colors.dark,
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
    lineHeight: "40px",
  },
}));
