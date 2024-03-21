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
  const [error, setError] = useState("");

  //handling submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (result.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
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
              <Box marginTop={"2rem"} style={{ color: "red" }}>
                {error && <Typography>{error}</Typography>}
              </Box>
              <Box sx={{ mt: "1rem" }}>
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
