"use client";

import { AppbarContainer, AppbarHeader, MyList } from "@/styles/appbar";
import { ListItemButton } from "@mui/material";
import { Colors } from "../../styles/theme";
import Link from "next/link";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { setAnchorEl } from "@/redux/features/anchorEl/anchorSlice";

export default function AppbarDesktop({}) {
  // const { anchorEl } = useAppSelector((state) => state.anchorEl);
  // const dispatch = useAppDispatch();

  // const handleClick = (event) => {
  //   dispatch(setAnchorEl(event.currentTarget));
  // };

  // const handleClose = () => {
  //   dispatch(setAnchorEl(null));
  // };

  // const open = Boolean(anchorEl);
  return (
    <>
      <AppbarContainer
        sx={{
          borderBottom: 3,
          borderBottomColor: Colors.light_grey,
        }}>
        <AppbarHeader>
          <Link href="/">
            <span
              style={{
                fontFamily: "",
                fontSize: "34px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                paddingLeft: "1.6rem",
              }}>
              Trade<strong style={{ color: Colors.green }}>Tracker</strong>{" "}
            </span>
          </Link>
        </AppbarHeader>
        <MyList type="row" sx={{}}>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/membership"
              style={{
                fontSize: "18px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
              }}>
              MEMBERSHIP
            </Link>
          </ListItemButton>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            sx={{
              color: Colors.secondary,
              "&.MuiListItemButton-root:hover": {
                color: Colors.green,
                background: "transparent",
              },
            }}>
            <Link
              href="/help"
              style={{
                fontSize: "18px",
                letterSpacing: "0.64px",
                fontWeight: "bold",
              }}>
              BLOG
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
                  fontSize: "18px",
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
                href="/membership"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                  background: Colors.green,
                  borderRadius: "4px",
                  letterSpacing: "0.64px",
                  fontWeight: "bold",
                  padding: "16px 48px",
                  fontSize: "18px",
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
