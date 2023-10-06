// import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../styles/theme";

const Search = styled("div")(({ theme }) => ({
  // position: "relative",
  border: "1px solid #f5f6f7",
  borderRadius: theme.shape.borderRadius,
  flexGrow: 1,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  color: Colors.secondary,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  justifyContent: "center",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    // those were causing the typing box smaller. The p Search ... did not fit.
    // width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "20ch",
    // },
  },
}));

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ paddingTop: 1, paddingBottom: 2 }}>
      <AppBar
        variant="outlined"
        position="static"
        sx={{
          background: Colors.light_grey,
        }}>
        <Toolbar>
          <Search>
            <StyledInputBase
              fullWidth
              // flexGrow={1}
              placeholder="Search the knowledge base"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* work later on the colors. */}
          <IconButton
            size="large"
            edge="start"
            color={Colors.secondary}
            aria-label="search-button"
            sx={{ m: 0 }}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
