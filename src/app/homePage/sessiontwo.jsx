import Grid from "@mui/material/Grid";
import { MyBox } from "@/styles/homePage";
import Image from "next/image";
import { Typography, ListItem, List, ListItemText } from "@mui/material";
import Journal from "../../../public/images/computerJournal.jpg";
import Analyze from "../../../public/images/analyses.jpg";
import Share from "../../../public/images/share.jpg";
import Link from "next/link";
import { AppbarHeader } from "@/styles/appbar";

export default function SessionTwo() {
  return (
    <>
      <Grid container lg={12} pl={{ xs: "5rem", lg: "4rem" }} pr={"3rem"}>
        <Grid item container lg={12} spacing={2} pt={8} pb={8}>
          <Grid item xs={12} lg={4} display="flex" flexDirection={"column"}>
            <List>
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
            <List>
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
            <List>
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
