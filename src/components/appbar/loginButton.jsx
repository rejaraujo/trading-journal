// LoginButton.js
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ListItemButton } from "@mui/material";
import { MyList } from "@/styles/appbar";
import { Colors } from "../../styles/theme";

const LoginButton = ({ session }) => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/login");
  };

  const handleSignUp = () => {
    router.push("/membership");
  };

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/",
    });
    router.push("/");
  };
  return (
    <MyList type="row" sx={{ flexGrow: "0" }}>
      {session?.user ? (
        <ListItemButton
          variant="contained"
          disableTouchRipple
          onClick={handleSignOut}
          sx={{
            justifyContent: "center",
            "&.MuiListItemButton-root": {
              background: Colors.green,
              fontWeight: "bold",
              borderRadius: "4px",
              letterSpacing: "0.7px",
              padding: "16px 48px",
              "&:hover": {
                color: Colors.light_grey,
                background: Colors.green,
              },
            },
          }}>
          SIGN OUT
        </ListItemButton>
      ) : (
        <>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            onClick={handleSignIn}
            sx={{
              justifyContent: "center",
              "&.MuiListItemButton-root": {
                background: Colors.green,
                color: Colors.light_grey,
                fontWeight: "bold",
                borderRadius: "4px",
                letterSpacing: "0.7px",
                padding: "16px 48px",
                marginRight: "15px", // Add margin between buttons
                "&:hover": {
                  background: Colors.dark_grey,
                  color: Colors.light_grey,
                },
              },
            }}>
            SIGN IN
          </ListItemButton>
          <ListItemButton
            variant="contained"
            disableTouchRipple
            onClick={handleSignUp}
            sx={{
              justifyContent: "center",
              "&.MuiListItemButton-root": {
                background: Colors.green,
                fontWeight: "bold",
                borderRadius: "4px",
                letterSpacing: "0.7px",
                padding: "16px 48px",
                "&:hover": {
                  color: Colors.light_grey,
                  background: Colors.green,
                },
              },
            }}>
            SIGN UP
          </ListItemButton>
        </>
      )}
    </MyList>
  );
};

export default LoginButton;
