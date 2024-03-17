"use client";

import { Box, Grid, List, ListItemText, Stack, Button } from "@mui/material";
import { FooterTitle, FooterText } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
// import LogoFooter from "../../../public/images/logoFooter.jpg";
import logotransparent from "../../../public/images/logotransparent.png";
import Link from "next/link";

export default function Footer() {
  return (
    <Grid
      container
      pl={{ xs: "1rem", lg: "4rem" }}
      pr={"2rem"}
      pt={"4rem"}
      sx={{
        background: Colors.primary,
        color: Colors.white,
        fontSize: { xs: "14px", md: "16px" },
        textAlign: "left",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: "4rem",
        position: "relative",
        zIndex: 2,
        bottom: 0,
      }}>
      <Grid item container spacing={2} justifyContent="center" lg={12}>
        <Grid item md={6} lg={4}>
          <FooterTitle>
            <Link href="/">
              <span
                style={{
                  fontFamily: "",
                  fontSize: "34px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                  paddingLeft: "1.6rem",
                }}>
                Trade<strong style={{ color: Colors.green }}>Tracker</strong>{" "}
              </span>
            </Link>
          </FooterTitle>
          <FooterTitle alignItems={"center"} textAlign={"center"} pb={1}>
            Your Trading Compass
          </FooterTitle>

          <Stack pt={1}>
            <Button
              sx={{
                mt: 4,
                mb: 4,
                background: Colors.green,
                mr: 3,
                fontFamily: "__Work_Sans_aef32b",
              }} // check this
              variant="contained">
              Sign In
            </Button>
          </Stack>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle pt={{ xs: 1, md: 2 }}>company</FooterTitle>
          <List>
            <ListItemText>
              <FooterText>
                <Link href="/about-us">About Us</Link>
              </FooterText>
            </ListItemText>

            <ListItemText>
              <FooterText>
                <Link href="/privacy-policy"> Privacy &amp; Policy</Link>
              </FooterText>
            </ListItemText>

            <ListItemText>
              <FooterText>
                <Link href="/careers">Careers</Link>
              </FooterText>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle pt={{ xs: 1, md: 2 }}>connect</FooterTitle>
          <List>
            <ListItemText>
              <FooterText>
                <Link href="/contactus"> Contact Us</Link>
              </FooterText>
            </ListItemText>
            <ListItemText>
              <FooterText>
                <Link href="/platforms"> Platforms</Link>
              </FooterText>
            </ListItemText>
            <ListItemText>
              <FooterText>
                <Link href="/help"> Help</Link>
              </FooterText>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle pt={{ xs: 1, md: 2 }}>Follow</FooterTitle>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}>
            <Link href="/facebook">
              <FacebookIcon sx={{ mr: 1 }} />
            </Link>
            <Link href="/twitter">
              {" "}
              <TwitterIcon sx={{ mr: 1 }} />
            </Link>
            <Link href="/instagram">
              {" "}
              <InstagramIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <FooterText pt={4} pb={4}>
        © 2023 TradeTracker. All Rights Reserved
      </FooterText>
    </Grid>
  );
}
