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

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.blue_green,
        color: Colors.white,
        p: { xs: 4, md: 8 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "14px", md: "16px" },
      }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">
            <Image src={LogoFooter} alt="logo" quality={100} width={180} />
          </FooterTitle>
          <FooterTitle variant="body1" pb={2}>
            Simple. Fast. Powerful
          </FooterTitle>
          <Typography lineHeight={2} variant="caption2">
            The trading journal that will help improve your trading performance.
          </Typography>
          <Stack pt={1}>
            <Button
              sx={{ mt: 4, mb: 4, background: Colors.green, mr: 3 }}
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
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms of Service{" "}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Affiliates
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Academy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Career
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
                Contact Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Platforms
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Help
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
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        textAlign={{ xs: "center", md: "end" }}
        pt={4}>
        © 2023 SureSwift Capital, Inc., All Rights Reserved
      </Typography>
    </Box>
  );
}
