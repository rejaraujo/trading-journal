"use client";

import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  NavListItem,
} from "@/styles/appbar";
import { Colors } from "../../styles/theme";
import Link from "next/link";
import LoginButton from "./loginButton";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { setAnchorEl } from "@/redux/features/anchorEl/anchorSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AppbarDesktop({}) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleButtonClick = (route) => {
    router.push(route);
  };

  return (
    <>
      <AppbarContainer>
        <AppbarHeader>
          <Link
            href="/"
            style={{
              fontSize: "34px",
            }}>
            Trade<strong style={{ color: Colors.green }}>Tracker</strong>{" "}
          </Link>
        </AppbarHeader>
        <MyList type="row" sx={{}}>
          <NavListItem onClick={() => handleButtonClick("/membership")}>
            MEMBERSHIP
          </NavListItem>
          <NavListItem onClick={() => handleButtonClick("/help")}>
            BLOG
          </NavListItem>
          <LoginButton session={session} />
        </MyList>
      </AppbarContainer>
    </>
  );
}
