import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { Typography, TextField } from "@mui/material";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const Subscribe = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },

  "MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
}));
