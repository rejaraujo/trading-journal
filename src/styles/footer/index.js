"use client";

import { styled } from "@mui/material/styles";
import { Typography, TextField } from "@mui/material";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
  fontFamily: "__Work_Sans_aef32b",
}));

export const FooterText = styled(Typography)(() => ({
  lineHeight: 2,
  fontFamily: "__Work_Sans_aef32b",
}));

// export const Subscribe = styled(TextField)(() => ({
//   ".MuiInputLabel-root": {
//     color: Colors.secondary,
//   },

//   "MuiInput-root::before": {
//     borderBottom: `1px solid ${Colors.secondary}`,
//   },
// }));
