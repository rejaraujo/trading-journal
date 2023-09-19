import { MyList } from "@/styles/appbar";
import { ListItem, ListItemButton } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function Actions() {
  return (
    <MyList type="row" sx={{ position: "absolute", right: "0" }}>
      <ListItemButton
        style={{ backgroundColor: "transparent" }}
        sx={{
          justifyContent: "center",
        }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}>
          LOG IN
        </ListItem>
      </ListItemButton>

      <ListItemButton
        style={{ backgroundColor: "transparent" }}
        sx={{
          justifyContent: "center",
        }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            color: Colors.white_off,
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
