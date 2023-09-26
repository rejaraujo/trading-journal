import { styled } from "@mui/material/styles";
import { Colors, DrawerWidth } from "../theme";
import { IconButton } from "@mui/material";

export const DrawerCloseButton = styled(IconButton)(() => ({
  // style={{ backgroundColor: "transparent" }}
  // size="large"
  // aria-label="open drawer"
  // sx={{ position: "absolute", right: 25, pt: 4 }}
  position: "absolute",

  top: 0,
  left: 300,
  zIndex: 1999, // the button will stay on the top of everything.
  // background: "transparent",
  color: Colors.white,
}));
