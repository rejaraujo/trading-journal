import Grid from "@mui/material/Grid";
import { MyBox, MessageText, BannerImage } from "@/styles/homePage";
import { Typography, ListItem, ListItemButton, Box } from "@mui/material";
import { Colors } from "../../styles/theme";

import Link from "next/link";

export default function SessionOne() {
  return (
    <>
      <Grid container lg={12} mt={18}>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={"column"}
          alignItems={{ xs: "start", md: "center" }}>
          <BannerImage src={"/static/images/screenTrade.jpg"} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={"column"}
          alignItems={{ xs: "start", md: "center" }}
          // sx={{ background: "pink" }}
        >
          <MyBox>
            <MessageText pr={6}>
              The trading journal that will help improve your trading
              performance.
              <Typography
                variant="h6"
                sx={{
                  pt: 2.6,
                  pb: 2.6,
                  pl: 2,
                }}>
                “SMB traders rely on Tradervue for journaling and performance
                analysis.” – Mike Bellafiore, SMB Capital
              </Typography>
              <Box maxWidth={380}>
                <ListItemButton
                  variant="contained"
                  disableTouchRipple
                  sx={{
                    justifyContent: "center",
                    "&.MuiListItemButton-root:hover": {
                      color: Colors.white_off,
                      background: "transparent",
                    },
                  }}>
                  <ListItem
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "20px",
                      lineHeight: "20px",
                      padding: "26.8px 92px",
                      borderRadius: "4px",
                      letterSpacing: "0.64px",
                      fontWeight: "bold",
                      background: Colors.green,
                    }}>
                    SIGN UP NOW
                  </ListItem>
                </ListItemButton>
              </Box>
            </MessageText>
          </MyBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          mt={8}>
          <MyBox
            maxWidth={(theme) => theme.breakpoints.values.lg}
            sx={{
              p: "2rem",
              bgcolor: Colors.light_grey,
              borderRadius: "4px",
              alignItems: "center",
            }}>
            <Typography variant="h6">
              Trade with a firm? Take a look at{" "}
              <Link
                href="/trading-firms"
                style={{
                  textDecoration: "none",
                  textTransform: "none",
                  fontSize: "20px",
                  color: "#1ec426",
                }}>
                Tradervue for trading firms.
              </Link>
            </Typography>
          </MyBox>
        </Grid>
      </Grid>
    </>
  );
}
