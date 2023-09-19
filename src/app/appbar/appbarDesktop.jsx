import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  MyListItemText,
} from "@/styles/appbar";
import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import Actions from "./actions";

// import styles from "./appbar.module.css";

export default function appbarDesktop({ matches }) {
  // const component = matches ? ActionIconsContainerMobile : ActionsIconsContainerDesktop

  return (
    <>
      <AppbarContainer
        sx={{
          borderBottom: 1,
          borderBottomColor: "grey.200",
          position: "relative",
        }}>
        <AppbarHeader sx={{ position: "absolute", left: "0" }}>
          <Image src={Logo} alt="logo" quality={100} width={180} />
        </AppbarHeader>
        <MyList
          type="row"
          sx={{
            // background: "red",
            position: "relative",
            flexGrow: "1",
            paddingLeft: "15rem",
            paddingRight: "15rem",
          }}>
          <MyListItemText secondary="FEATURES" />
          <MyListItemText secondary="PRICING" />
          <MyListItemText secondary="COMMUNITY" />
          <MyListItemText secondary="HELP" />
        </MyList>
        <Actions />
      </AppbarContainer>
    </>
  );
}
