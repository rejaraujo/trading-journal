import {
  Box,
  Grid,
  Typography,
  List,
  ListItemText,
  Stack,
  Button,
} from "@mui/material";
import { FooterTitle } from "../../styles/footer";
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
          <FooterTitle variant="body1">
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
          <FooterTitle variant="body1" pb={2}>
            Simple. Fast. Powerful
          </FooterTitle>
          <Typography lineHeight={2} variant="caption2">
            The trading journal that will help improve your trading performance.
          </Typography>
          <Stack pt={1}>
            <Button
              sx={{ mt: 4, mb: 4, background: Colors.green, mr: 3 }} // check this
              variant="contained">
              Sign In
            </Button>
          </Stack>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1" pt={{ xs: 1, md: 2 }}>
            company
          </FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/about-us">About Us</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/terms-of-service"> Terms of Service</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/privacy-policy"> Privacy &amp; Policy</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/affiliates"> Affiliates</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/academy">Academy</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/careers">Careers</Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1" pt={{ xs: 1, md: 2 }}>
            connect
          </FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/contactus"> Contact Us</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/platforms"> Platforms</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="/help"> Help</Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1" pt={{ xs: 1, md: 2 }}>
            Follow
          </FooterTitle>
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
      <Typography variant="body2" pt={4} pb={4}>
        © 2023 SureSwift Capital, Inc., All Rights Reserved
      </Typography>
    </Grid>
  );
}
