"use client";

import { AppbarContainer, AppbarHeader, MyList } from "@/styles/appbar";
import { Menu, MenuItem, ListItemButton } from "@mui/material";
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
          borderBottomColor: Colors.light_grey,
        }}>
        {/* <AppbarHeader sx={{ position: "absolute", left: "0", pt: 1, ml: 4 }}> */}
        <AppbarHeader>
          <Link href="/">
            <Image src={Logo} alt="logo" quality={100} width={190} />
          </Link>
        </AppbarHeader>
        <MyList type="row" sx={{}}>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              // justifyContent: "center",
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href=""
              id="features-item"
              onClick={handleClick}
              aria-controls={open ? "features-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? true : undefined}
              style={{
                fontSize: "15px",
                letterSpacing: "0.64px",
              }}>
              FEATURES
            </Link>
          </ListItemButton>

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
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              // justifyContent: "center",
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/pricing"
              style={{
                fontSize: "15px",
                letterSpacing: "0.64px",
                margin: 0,
              }}>
              PRICING
            </Link>
          </ListItemButton>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              // justifyContent: "center",
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/community"
              style={{
                fontSize: "15px",
                letterSpacing: "0.64px",
                margin: 0,
              }}>
              COMMUNITY
            </Link>
          </ListItemButton>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              // justifyContent: "center",
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/help"
              style={{
                fontSize: "15px",
                letterSpacing: "0.64px",
                margin: 0,
              }}>
              HELP
            </Link>
          </ListItemButton>

          {/* LOGIN IN */}
          <MyList type="row" sx={{ flexGrow: "0" }}>
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
              <Link
                href="/login"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  letterSpacing: "0.64px",
                  fontSize: "15px",
                }}>
                LOG IN
              </Link>
            </ListItemButton>
            {/* SIGN UP */}
            <ListItemButton
              variant="contained"
              disableTouchRipple
              sx={{
                justifyContent: "center",
                "&.MuiListItemButton-root:hover": {
                  color: Colors.light_grey,
                  background: "transparent",
                },
              }}>
              <Link
                href="/signin"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                  background: Colors.green,
                  borderRadius: "4px",
                  letterSpacing: "0.64px",
                  fontWeight: "bold",
                  padding: "16px 48px",
                  fontSize: "15px",
                  // "@media (max-width: 600px)": {
                  //   padding: "0px",
                  // },
                }}>
                SIGN UP
              </Link>
            </ListItemButton>
          </MyList>
        </MyList>
      </AppbarContainer>
    </>
  );
}
