// components/Login.js

"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Colors } from "@/styles/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";

//Define the isValidEmail()
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const SignUp = () => {
  //State management with Redux Toolkit will be implemented later
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email");
      return;
    }

    try {
      const response = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        const form = e.target;
        form.reset();
        setError("");
        router.push("/dashboard");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.log("Error during registration:", error);
      setError("An error occured while registering the user");
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
            sx={{
              background: Colors.light_grey,
              border: "1px solid green",
              borderRadius: "4px",
              p: "1rem",
            }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold", pl: "1rem" }}>
              Join TradeTracker!
            </Typography>
            <Divider variant="middle" sx={{ pt: "0.6rem" }} />
            <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
              <TextField
                label=" Fulll Name"
                type="text"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                helperText={
                  !isValidEmail(email)
                    ? "Ensure your email follows the format name@exmaple.com"
                    : ""
                }
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                sx={{ mt: "1rem", textTransform: "none" }}>
                Sign Up
              </Button>
              <Box marginTop={"2rem"} style={{ color: "red" }}>
                {error && <Typography>{error}</Typography>}
              </Box>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Already have an account?{" "}
                <Link href={"/login"}>
                  <span
                    style={{
                      color: Colors.green,
                      fontWeight: "bold",
                    }}>
                    Log In
                  </span>
                </Link>
              </Typography>
              <Divider variant="middle" sx={{ pt: "0.6rem" }} />
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
