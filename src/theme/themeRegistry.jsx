"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./emotionCache";

export const DrawerWidth = 300;

export const Colors = {
  primary: "#022438",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  ///////////////
  // Grays
  ///////////////
  grey: "#5C5858",
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  dark_grey: "#3A3B3C",
  light_grey: "#f5f6f7",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  white_off: "#f5f6f7",
  black: "#000",
  green: "#1EC426",
  sacramento_green: "#043927",
  blue_green: "#022438",
};

const themeOptions = {
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
          borderRadius: "0px 100px 0px 0px",
          borderRight: `10px solid ${Colors.blue_green}`,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: /* lighten(0.2, Colors.primary)*/ Colors.green,
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
