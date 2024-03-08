"use client";

import Grid from "@mui/material/Grid";
import { MessageText, MyButton } from "@/styles/homePage";
import { ListItem, List, ListItemText } from "@mui/material";
import Image from "next/image";
import winrate from "../../../public/images/win-rate .webp";
import bussola from "../../../public/images/bussola.jpeg";
import technicalanalysis from "../../../public/images/technical_analysis.jpeg";
import mouse from "../../../public/images/mouse.jpeg";
import Typography from "@mui/material/Typography";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Grid
        container
        pl={{ lg: "4rem" }}
        pr={{ lg: "3rem" }}
        pt={{ xs: "5rem", md: "6rem", lg: "6rem" }}>
        <Grid item container lg={12} display="flex" spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}>
            <Image
              alt="winrate"
              src={winrate}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "4px",
                textAlign: "center",
              }}
            />
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display="flex"
            flexDirection={"column"}>
            <List style={{ paddingTop: 0 }}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  style={{ margin: 0 }}
                  disableTypography
                  primary={
                    <MessageText>
                      Guiding your trading journey & enhancing your skills!{" "}
                      <br /> Let{" "}
                      <strong style={{ color: "green" }}>TradeTracker</strong>{" "}
                      be your compass!
                    </MessageText>
                  }
                />
              </ListItem>

              <ListItem alignItems="center">
                <MyButton>
                  <Link href="/membership" style={{}}>
                    SIGN UP NOW
                  </Link>
                </MyButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={12}
          display="flex"
          spacing={2}
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection="column"
            alignItems="center">
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              style={{
                fontWeight: "bold",
              }}>
              <Link href="/journal">Journaling</Link>
            </Typography>
            <Image
              src={bussola}
              alt="journaling"
              quality={100}
              width={300}
              height={300}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                textAlign: "center",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection="column"
            alignItems="center">
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              style={{
                fontWeight: "bold",
              }}>
              <Link href="/technical-analysis"> Technical Analysis</Link>
            </Typography>
            <Image
              src={technicalanalysis}
              alt="Technical Analysis"
              quality={100}
              width={300}
              height={300}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                textAlign: "center",
                // paddingRight: "0.5rem",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection="column"
            alignItems="center">
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              style={{
                fontWeight: "bold",
              }}>
              <Link href="/psychology"> Psychology</Link>
            </Typography>
            <Image
              src={mouse}
              alt="Psychology"
              quality={100}
              width={300}
              height={300}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                textAlign: "center",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
