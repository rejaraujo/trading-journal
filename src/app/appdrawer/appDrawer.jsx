import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import { Actions } from "..";
// import {useAppDispatch} from "../../redux/hooks";
// import { setDrawerOpen } from "@/redux/features/drawer/drawerSlice";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {
  // const dispatch = useAppDispatch();

  // const handleDrawerOpen = (e, value) => {
  //   WidthNormalTwoTone.scrollTo(0,0);
  //   dispatch(setDrawerOpen(value));
  // }

  return (
    <>
      <Drawer open={false}>
        <List>
          <ListItemButton>
            <ListItemText>FEATURES</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Journal Features</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Analytical Features</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Sharing Features</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>PRICING</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>PRICING</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>COMMUNITY</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>HELP</ListItemText>
          </ListItemButton>
          <Actions />
        </List>
      </Drawer>
    </>
  );
}
