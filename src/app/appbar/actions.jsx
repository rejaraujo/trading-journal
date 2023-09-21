import { MyList } from "@/styles/appbar";
import { ListItem, ListItemButton } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function Actions() {
  return (
    <MyList type="row" sx={{ position: "absolute", right: "0", pt: 1 }}>
      <ListItemButton
        variant="contained"
        disableTouchRipple
        sx={{
          justifyContent: "center",
          "&.MuiListItemButton-root:hover": {
            color: Colors.green,
            background: "transparent",
            m: "4px",
          },
        }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            // color: Colors.white_off,
            // background: Colors.green,
            borderRadius: "4px",
            letterSpacing: "0.64px",
            fontWeight: "bold",
          }}>
          LOG IN
        </ListItem>
      </ListItemButton>

      <ListItemButton
        variant="contained"
        disableTouchRipple
        sx={{
          justifyContent: "center",
          "&.MuiListItemButton-root:hover": {
            color: Colors.white_off,
            background: "transparent",
          },
        }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            background: Colors.green,
            borderRadius: "4px",
            letterSpacing: "0.64px",
            fontWeight: "bold",
          }}>
          SIGN UP
        </ListItem>
      </ListItemButton>
    </MyList>
  );
}
