import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  MyListItemText,
} from "@/styles/appbar";
import { Menu, MenuItem, ListItem, ListItemButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import { Colors } from "../../styles/theme";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setAnchorEl } from "@/redux/features/anchorEl/anchorSlice";

export default function AppbarDesktop({ matches }) {
  const { anchorEl } = useAppSelector((state) => state.anchorEl);
  const dispatch = useAppDispatch();

  const handleClick = (event) => {
    dispatch(setAnchorEl(event.currentTarget));
  };

  const handleClose = () => {
    dispatch(setAnchorEl(null));
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <AppbarContainer
        sx={{
          borderBottom: 1,
          borderBottomColor: Colors.dove_gray,
        }}>
        {/* <AppbarHeader sx={{ position: "absolute", left: "0", pt: 1, ml: 4 }}> */}
        <AppbarHeader>
          <Link href="/">
            <Image src={Logo} alt="logo" quality={100} width={180} />
          </Link>
        </AppbarHeader>
        <MyList type="row">
          <MyListItemText
            id="features-item"
            onClick={handleClick}
            aria-controls={open ? "features-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? true : undefined}>
            FEATURES
          </MyListItemText>
          {/* Dropdown Menu */}
          <Menu
            id="features-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ "aria-labelledby": "features-items" }}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Link href="/journal-features">Journal Features</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/analytical-features">Analytical Features</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link href="/sharing-features">Sharing Featuress</Link>
            </MenuItem>
          </Menu>
          <MyListItemText>
            <Link href="/pricing">PRICING</Link>
          </MyListItemText>
          <MyListItemText>
            <Link href="/community">COMMUNITY</Link>
          </MyListItemText>
          <MyListItemText>
            <Link href="/help">HELP</Link>
          </MyListItemText>
          {/* LOGIN IN */}
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              justifyContent: "center",
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                borderRadius: "4px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
              }}>
              LOG IN
            </ListItem>
          </ListItemButton>
          {/* SIGN UP */}
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
      </AppbarContainer>
    </>
  );
}
