"use client";

import Grid from "@mui/material/Grid";
import { BannerTitle } from "@/styles/homePage";
import { Colors } from "@/styles/theme";
import PrimarySearchAppBar from "@/components/helpPage/searchAppBar";
import { Cards } from "@/app";

export default function HelpPage() {
  return (
    <>
      <Grid
        container
        p={"2.6rem"}
        sx={{ background: Colors.light_grey }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}>
        <Grid item>
          <BannerTitle
            sx={{
              textAlign: "center",
              letterSpacing: "0px",
            }}>
            Tradervue Education & Resources
          </BannerTitle>
          {/* Search bar component */}
          <PrimarySearchAppBar />
        </Grid>
      </Grid>
      {/* Cards */}
      <Cards />
    </>
  );
}
