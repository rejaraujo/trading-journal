import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  MyListItemText,
} from "@/styles/appbar";
import { ListItem, ListItemButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import { Colors } from "../../styles/theme";
import Link from "next/link";

export default function AppbarDesktop({ matches }) {
  // const component = matches ? ActionIconsContainerMobile : ActionsIconsContainerDesktop

  return (
    <>
      <AppbarContainer
        sx={{
          pb: 4,
          borderBottom: 1,
          borderBottomColor: "grey.200",
          position: "relative",
        }}>
        <AppbarHeader sx={{ position: "absolute", left: "0", pt: 1, ml: 4 }}>
          <Image src={Logo} alt="logo" quality={100} width={180} />
        </AppbarHeader>
        <MyList
          type="row"
          sx={{
            // background: "red",
            position: "relative",
            flexGrow: "1",
            paddingLeft: "17rem",
            paddingRight: "12rem",
            pt: 1.4,
          }}>
          {/* <Link></Link> */}
          <MyListItemText>
            <Link
              className="navLink"
              href="/features"
              style={
                {
                  // textDecoration: "none",
                  // textTransform: "none",
                  // fontSize: "16px",
                  // color: "#1ec426",
                }
              }>
              FEATURES
            </Link>
          </MyListItemText>
          <MyListItemText>
            <Link href="/pricing">PRICING</Link>
          </MyListItemText>
          <MyListItemText>
            <Link href="/community">COMMUNITY</Link>
          </MyListItemText>
          <MyListItemText>
            <Link href="/help">HELP</Link>
          </MyListItemText>
          {/* <MyListItemText secondary="FEATURES" /> */}
          {/* <MyListItemText secondary="PRICING" /> */}
        </MyList>
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
                borderRadius: "4px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
              }}>
              <Link href="/log-in">LOG IN</Link>
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
      </AppbarContainer>
    </>
  );
}
