"use client";

import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { Colors } from "@/styles/theme";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body1" gutterBottom>
              Welcome to your dashboard.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Statistics
            </Typography>
            {/* Add statistics components here */}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            {/* Add recent activity components here */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Graphs
            </Typography>
            {/* Add graph components here */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
