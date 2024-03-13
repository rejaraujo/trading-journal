// components/Login.js

"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { Colors } from "@/styles/theme";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  //handling submission
  const handleLogin = async () => {
    try {
      //authentication logic
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          rememberMe,
        }),
      });

      if (response.ok) {
        router.push("/dashboard"); // if login sucessed, redirect to dashboard
      } else {
        if (response.status === 401) {
          console.error("Authentication failed: Invalid crendentials");
        } else {
          console.error("Autnethication failed:", response.statusText);
          alert("An error occurred during login. Please try again later");
        }
      }
    } catch (error) {
      console.error("Error during login", error);
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
            width={370}
            height={450}
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
            <form style={{ padding: "1rem" }}>
              <TextField
                label="Username or Email"
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember Me"
              />
              <Box>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleLogin}
                  sx={{ mt: "1rem", textTransform: "none" }}>
                  Login
                </Button>
              </Box>

              <Box sx={{ mt: "1rem" }}>
                <Typography variant="p">
                  <Link
                    href="/trading-firms"
                    style={{
                      color: Colors.green,
                      fontWeight: "bold",
                    }}>
                    Forgot your password?
                  </Link>
                </Typography>
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
