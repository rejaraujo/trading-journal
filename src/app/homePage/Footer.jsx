import { Box, Grid, List, ListItemText, Stack, Button } from "@mui/material";
import { FooterTitle, FooterText } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import LogoFooter from "../../../public/images/logoFooter.jpg";
import Link from "next/link";

export default function Footer() {
  return (
    <Grid
      container
      pl={{ xs: "1rem", lg: "4rem" }}
      pr={"2rem"}
      pt={"4rem"}
      sx={{
        background: Colors.blue_green,
        color: Colors.white,
        fontSize: { xs: "14px", md: "16px" },
        textAlign: "left",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "4rem",
      }}>
      <Grid item container spacing={2} justifyContent="center" lg={12}>
        <Grid item md={6} lg={4}>
          <FooterTitle>
            <Link href="/">
              <Image
                src={LogoFooter}
                alt="logo"
                quality={100}
                style={{
                  maxWidth: "70%",
                  height: "auto",
                }}
              />
            </Link>
          </FooterTitle>
          <FooterTitle pb={2}>Simple. Fast. Powerful</FooterTitle>
          <FooterText
            lineHeight={2}
            // variant="caption2"
            sx={{
              fontFamily: "__Work_Sans_aef32b",
            }}>
            The trading journal that will help improve your trading performance.
          </FooterText>
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
                <Link href="/terms-of-service"> Terms of Service</Link>
              </FooterText>
            </ListItemText>
            <ListItemText>
              <FooterText>
                <Link href="/privacy-policy"> Privacy &amp; Policy</Link>
              </FooterText>
            </ListItemText>
            <ListItemText>
              <FooterText>
                <Link href="/affiliates"> Affiliates</Link>
              </FooterText>
            </ListItemText>
            <ListItemText>
              <FooterText>
                <Link href="/academy">Academy</Link>
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
        © 2023 SureSwift Capital, Inc., All Rights Reserved
      </FooterText>
    </Grid>
  );
}
