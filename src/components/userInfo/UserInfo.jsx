"use client";

import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { useSession } from "next-auth/react"; //get user detail

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h4" gutterBottom>
              {`Welcome to your session ${session?.user?.name}`}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
