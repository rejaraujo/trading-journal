"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Colors } from "@/styles/theme";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

  //handling submission
  const handleSubmit = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });
      // Handle successful login, e.g., redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}>
        <Grid item xs={3}>
          <Box
            // width={370}
            // height={450}
            sx={{
              background: Colors.light_grey,
              border: "1px solid green",
              borderRadius: "5px",
              p: "1rem",
            }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", pl: "1rem" }}>
              Sign in to TradeTracker
            </Typography>
            <Divider variant="middle" sx={{ pt: "0.6rem" }} />
            <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember Me"
              /> */}
              <Box>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ mt: "1rem", textTransform: "none" }}>
                  Login
                </Button>
              </Box>

              <Box sx={{ mt: "1rem" }}>
                {/* <Typography variant="p">
                  <Link
                    href="/trading-firms"
                    style={{
                      color: Colors.green,
                      fontWeight: "bold",
                    }}>
                    Forgot your password?
                  </Link>
                </Typography> */}
                <Box sx={{ mt: "1rem" }}>
                  <Typography variant="p">
                    New user?{" "}
                    <Link
                      href="/membership"
                      style={{
                        color: Colors.green,
                        fontWeight: "bold",
                      }}>
                      Sign up here.
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
