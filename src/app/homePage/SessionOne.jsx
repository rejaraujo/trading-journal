import Grid from "@mui/material/Grid";
import { MyBox, MessageText } from "@/styles/landingPage";
import Image from "next/image";
import screenTrade from "../../../public/images/screenTrade.jpg";
import {
  Typography,
  ListItem,
  ListItemButton,
  List,
  ListItemText,
  Divider,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import Journal from "../../../public/images/computerJournal.jpg";
import Analyze from "../../../public/images/analyses.jpg";
import Share from "../../../public/images/share.jpg";
import Link from "next/link";
import { AppbarHeader } from "@/styles/appbar";

export default function SessionOne() {
  return (
    <>
      <Grid container lg={12} spacing={2} sx={{ paddingTop: "6rem" }}>
        <Grid item xs={12} md={6}>
          <MyBox>
            <Image src={screenTrade} alt="tablet" quality={100} width={500} />
          </MyBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <MyBox>
            <MessageText>
              The trading journal that will help improve your trading
              performance.
              <Typography
                variant="h6"
                sx={{
                  paddingTop: "1.4em",
                  paddingBottom: "1.4em",
                }}>
                “SMB traders rely on Tradervue for journaling and performance
                analysis.” – Mike Bellafiore, SMB Capital
              </Typography>
              <ListItemButton
                style={{ backgroundColor: "transparent" }}
                sx={{
                  justifyContent: "center",
                }}>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                    lineHeight: "20px",
                    padding: "24px 96px",
                    borderRadius: "4px",
                    letterSpacing: "0.64px",
                    fontWeight: "bold",
                    color: Colors.white_off,
                    background: Colors.green,
                  }}>
                  SIGN UP
                </ListItem>
              </ListItemButton>
            </MessageText>
          </MyBox>
        </Grid>
        <Grid item xs={12} md={12} sx={{}} style={{ paddingTop: "4rem" }}>
          <MyBox
            style={{
              backgroundColor: "#f5f6f7",
              padding: "1.2rem",
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
        {/* 3 columns */}
        <Grid
          item
          container
          lg={12}
          spacing={2}
          sx={{}}
          style={{ paddingTop: "4rem" }}>
          <Grid item lg={4} xs={12}>
            <List
              sx={
                {
                  // width: "100%",
                  // maxWidth: 360,
                  // bgcolor: "background.paper",
                }
              }>
              <ListItem alignItems="flex-start">
                <AppbarHeader>
                  <Image src={Journal} alt="journal" quality={100} width={60} />
                </AppbarHeader>
                <ListItemText
                  sx={{ paddingLeft: "1rem" }}
                  disableTypography
                  primary={
                    <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Journal
                    </h2>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{
                          display: "inline",
                          fontSize: "20px",
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        A stock, futures, and forex trading journal that works
                        for you, not against you.
                      </Typography>
                      <Link
                        href="/trading-journal"
                        style={{
                          textDecoration: "none",
                          textTransform: "none",
                          fontSize: "20px",
                          color: "#1ec426",
                        }}>
                        <MyBox sx={{ paddingTop: "1rem" }}>
                          Learn more about our trading journal
                        </MyBox>
                      </Link>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          {/* <Divider orientation="vertical" flexItem /> */}

          <Grid item lg={4} xs={12}>
            <List
              sx={
                {
                  // width: "100%",
                  // maxWidth: 360,
                  // bgcolor: "background.paper",
                }
              }>
              <ListItem alignItems="flex-start">
                <AppbarHeader>
                  <Image
                    src={Analyze}
                    alt="analysis"
                    quality={100}
                    width={60}
                  />
                </AppbarHeader>
                <ListItemText
                  sx={{ paddingLeft: "1rem" }}
                  disableTypography
                  primary={
                    <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Analize
                    </h2>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline", fontSize: "20px" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        You’ve been trading a lot. But do you really know what’s
                        working?
                      </Typography>
                      <Link
                        href="/trading-journal"
                        style={{
                          textDecoration: "none",
                          textTransform: "none",
                          fontSize: "20px",
                          color: "#1ec426",
                        }}>
                        <MyBox sx={{ paddingTop: "1rem" }}>
                          Learn more about our trading analysis software
                        </MyBox>
                      </Link>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={4} xs={12}>
            <List
              sx={
                {
                  // width: "100%",
                  // maxWidth: 360,
                  // bgcolor: "background.paper",
                }
              }>
              <ListItem alignItems="flex-start">
                <AppbarHeader>
                  <Image src={Share} alt="share" quality={100} width={60} />
                </AppbarHeader>
                <ListItemText
                  sx={{ paddingLeft: "1rem" }}
                  disableTypography
                  primary={
                    <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Share
                    </h2>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline", fontSize: "20px" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Execution is everything. Share your expertise with the
                        trading community.
                      </Typography>
                      <Link
                        href="/trading-journal"
                        style={{
                          textDecoration: "none",
                          textTransform: "none",
                          fontSize: "20px",
                          color: "#1ec426",
                        }}>
                        <MyBox sx={{ paddingTop: "1rem" }}>
                          Learn more about our trading community
                        </MyBox>
                      </Link>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
