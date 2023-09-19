import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import { Colors } from "../../styles/theme";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer
      sx={{
        borderBottom: 1,
        borderBottomColor: "grey.200",
        position: "relative",
      }}>
      <AppbarHeader sx={{ position: "absolute", left: "0" }}>
        <Image src={Logo} alt="logo" quality={100} width={180} />
      </AppbarHeader>
      <IconButton
        style={{ backgroundColor: "transparent" }}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ position: "absolute", right: "0" }}>
        <MenuIcon
          fontSize="large"
          sx={{
            backgroundColor: "black",
            color: Colors.white_off,
            borderRadius: "3px",
            padding: "3px",
          }}
        />
      </IconButton>
    </AppbarContainer>
  );
}
