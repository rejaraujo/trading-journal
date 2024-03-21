"use client";

import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body1" gutterBottom>
              <span>{`Welcome ${session?.user?.name}`}</span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
