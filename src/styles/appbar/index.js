import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Colors } from "../theme";

//container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex ",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "25px",
}));

// header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "6px",
  flexGrow: 1,
  color: Colors.secondary,
}));

// myList
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const NavListItemButton = styled(ListItemButton)(() => ({
  justifyContent: "center",
  "&:hover": {
    color: Colors.green,
  },
}));

export const MyListItemText = styled(ListItemText)(() => ({
  color: Colors.dim_grey,
  "&:hover": {
    color: Colors.green,
  },
}));

// export const ActionconsContainerMobile = styled(Box)(() => ({
//   display: 'flex',
//   background: Colors.shaft,
//   position: 'fixed',
//   bottom: 0,
//   left: 0,
//   width: '100%',
//   alignItems: 'center',
//   zIndex: 99,
//   borderTop: `1px solid ${Colors.border}`
// }));
