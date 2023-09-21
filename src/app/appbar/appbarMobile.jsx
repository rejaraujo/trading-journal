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
        pb: 7,
      }}>
      <AppbarHeader sx={{ position: "absolute", left: "0", pt: 4, ml: 4 }}>
        <Image src={Logo} alt="logo" quality={100} width={180} />
      </AppbarHeader>
      <IconButton
        style={{ backgroundColor: "transparent" }}
        size="large"
        aria-label="open drawer"
        sx={{ position: "absolute", right: 25, pt: 4 }}>
        <MenuIcon
          fontSize="large"
          sx={{
            backgroundColor: Colors.sacramento_green,
            color: Colors.white_off,
            borderRadius: "4px",
            p: "8px",
          }}
        />
      </IconButton>
    </AppbarContainer>
  );
}
