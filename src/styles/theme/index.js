import { createTheme } from "@mui/material/styles";

export const DrawerWidth = 300;

export const Colors = {
  primary: "#222",
  secondary: "#022438",
  dove_gray: "#d5d5d5",
  dark_grey: "#3A3B3C",
  light_grey: "#f5f6f7",

  // Solid Color

  white: "#fff",
  white_off: "#f5f6f7",
  black: "#000",
  green: "#2E8B57",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          // height: 600,
          background: Colors.light_grey,
          color: Colors.primary,
          // borderRadius: "0px 100px 0px 0px",
          borderRight: `10px solid ${Colors.secondary}`,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: Colors.dove_gray,
        },
      },
    },
  },
});

export default theme;
