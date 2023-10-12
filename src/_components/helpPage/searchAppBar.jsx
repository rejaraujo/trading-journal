import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInputBase, Search } from "@/styles/helpPage";
import { Colors } from "../../styles/theme";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ paddingTop: 1, paddingBottom: 2 }}>
      <AppBar
        elevation={0}
        variant="outlined"
        position="static"
        sx={{
          background: Colors.light_grey,
        }}>
        <Toolbar>
          <Search>
            <StyledInputBase
              fullWidth
              placeholder="Search the knowledge base"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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
