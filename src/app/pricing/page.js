"use client";

import Grid from "@mui/material/Grid";
import { MyBox, Testimonial, BannerTitle } from "@/styles/homePage";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { Colors } from "@/styles/theme";
import FeatureBreakdownTable from "@/_components/table/featureBreakdown";

export default function Page() {
  return (
    <>
      <Grid
        container
        pl={{ xs: "1rem", lg: "4rem" }}
        pr={"3rem"}
        pt={{ xs: "4rem", md: "6rem", lg: "5rem" }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          display="flex"
          flexDirection={"column"}
          // sx={{ background: "pink" }}
        >
          <List>
            <ListItem alignItems="flex-start">
              <ListItemText
                disableTypography
                primary={
                  <BannerTitle
                    sx={{
                      textAlign: "center",
                      fontSize: "42px",
                      lineHeight: "50px",
                      letterSpacing: "3",
                    }}>
                    Keep your Trading Journal with ease.
                  </BannerTitle>
                }
                secondary={
                  <>
                    <Testimonial
                      component="span"
                      variant="body2"
                      color="text.primary"
                      sx={{ textAlign: "center" }}>
                      A trading journal is one of the best ways to improve your
                      trading – and Tradervue is the most powerful tool
                      available to keep your journal.
                    </Testimonial>
                  </>
                }
              />
            </ListItem>
          </List>
        </Grid>
        {/* TRADE WITH A FIRM */}
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          display="flex"
          flexDirection={"row"}
          mt={"2rem"}
          // sx={{ background: "pink" }}
        >
          <MyBox>
            <Typography variant="p">
              Trade with a firm? Take a look at{" "}
              <Link
                href="/trading-firms"
                style={{
                  color: Colors.green,
                }}>
                Tradervue for trading firms.
              </Link>
            </Typography>
          </MyBox>
        </Grid>
        {/* PACKAGES */}
        <Grid
          item
          container
          lg={12}
          display="flex"
          spacing={2}
          sx={{
            marginTop: "4rem",
          }}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card
              sx={{
                background: Colors.light_grey,
              }}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "40px",
                  letterSpacing: "2.05px",
                  textAlign: "center",
                }}
                title="Basic"
                subheader="free"
                subheaderTypographyProps={{
                  variant: "subtitle1",
                  fontFamily: "sans-serif",
                  fontSize: "26px",
                  lineHeight: "40px",
                  letterSpacing: "2.05px",
                  textAlign: "center",
                }}
              />
              <Divider />
              <CardContent sx={{ margin: "0rem" }}>
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "10px",
                  }}>
                  Up to 30 Trades Per Month
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Basic Journaling
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Basic Reporting
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Sharing
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Stocks, Options, Futures, Forex
                </Typography>
                <Divider />
                <ListItemButton
                  variant="contained"
                  disableTouchRipple
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                    marginTop: "5rem",
                    "&.MuiListItemButton-root:hover": {
                      // color: Colors.light_grey,
                      background: "transparent",
                    },
                  }}>
                  <Link
                    href="/signin"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "bold",
                      background: Colors.dove_gray,
                      color: "white",
                      borderRadius: "4px",
                      letterSpacing: "1px",
                      lineHeight: 1,
                      fontWeight: "bold",
                      flexGrow: 1,
                      fontSize: "15px",
                      padding: "10px",
                    }}>
                    SIGN UP
                  </Link>
                </ListItemButton>
              </CardContent>
            </Card>
          </Grid>
          {/* SILVER PACK */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "40px",
                  letterSpacing: "2.05px",
                  textAlign: "center",
                }}
                title="Silver"
                subheader="$29.00/montlhy"
                subheaderTypographyProps={{
                  variant: "subtitle1",
                  fontFamily: "sans-serif",
                  fontSize: "26px",
                  lineHeight: "40px",
                  letterSpacing: "2.05px",
                  textAlign: "center",
                }}
              />
              <Divider />
              <CardContent sx={{ margin: "0rem" }}>
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "10px",
                  }}>
                  Unlimited Trades Per Month
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Enhanced Journaling
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Advanced Reporting
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Sharing
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Stocks, Options, Futures, Forex
                </Typography>
                <Divider />
                <ListItemButton
                  variant="contained"
                  disableTouchRipple
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                    marginTop: "5rem",
                    "&.MuiListItemButton-root:hover": {
                      // color: Colors.light_grey,
                      background: "transparent",
                    },
                  }}>
                  <Link
                    href="/signin"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "bold",
                      background: Colors.green,
                      color: "white",
                      borderRadius: "4px",
                      letterSpacing: "1px",
                      lineHeight: 1,
                      fontWeight: "bold",
                      flexGrow: 1,
                      fontSize: "15px",
                      padding: "10px",
                    }}>
                    SIGN UP
                  </Link>
                </ListItemButton>
              </CardContent>
            </Card>
          </Grid>
          {/* GOLD PACK */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "40px",
                  letterSpacing: "2.05px",
                  textAlign: "center",
                }}
                title="Gold"
                subheader="$49.00/montlhy"
                subheaderTypographyProps={{
                  variant: "subtitle1",
                  fontFamily: "sans-serif",
                  fontSize: "26px",
                  lineHeight: "40px",
                  letterSpacing: "2.05px",
                  textAlign: "center",
                }}
              />
              <Divider />
              <CardContent sx={{ margin: "0rem" }}>
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "10px",
                  }}>
                  Unlimited Trades Per Month
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Enhanced Journaling
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Advanced Reporting
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Sharing
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Stocks, Options, Futures, Forex
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    fontSize: "20px",
                    color: Colors.secondary,
                    lineHeight: "28px",
                    letterSpacing: "0.32px",
                    textAlign: "center",
                    padding: "14px",
                  }}>
                  Risk Analysis
                </Typography>
                <Divider />
                <ListItemButton
                  variant="contained"
                  disableTouchRipple
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                    marginTop: "1rem",
                    "&.MuiListItemButton-root:hover": {
                      // color: Colors.light_grey,
                      background: "transparent",
                    },
                  }}>
                  <Link
                    href="/signin"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "bold",
                      background: Colors.green,
                      color: "white",
                      borderRadius: "4px",
                      letterSpacing: "1px",
                      lineHeight: 1,
                      fontWeight: "bold",
                      flexGrow: 1,
                      fontSize: "15px",
                      padding: "10px",
                    }}>
                    SIGN UP
                  </Link>
                </ListItemButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          mt={4}
          display="flex"
          flexDirection={"column"}>
          <BannerTitle
            sx={{
              textAlign: "center",
              fontSize: "42px",
              lineHeight: "50px",
              letterSpacing: "3",
              paddingTop: "4rem",
            }}>
            Feature Breakdown
          </BannerTitle>
        </Grid>
        {/* table */}
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          mt={4}
          display="flex"
          flexDirection={"column"}
          sx={{ background: "yellow" }}></Grid>
        <FeatureBreakdownTable />
      </Grid>
    </>
  );
}
