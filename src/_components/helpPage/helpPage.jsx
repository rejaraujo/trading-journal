"use client";

import Grid from "@mui/material/Grid";
import { BannerTitle } from "@/styles/homePage";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { Colors } from "@/styles/theme";
// import SearchAppBar from "@/_components/search/searchAppBar";
import PrimarySearchAppBar from "./searchAppBar";

export default function HelpPage() {
  return (
    <>
      <Grid
        container
        // pl={{ xs: "1rem", lg: "4rem" }}
        // pr={"3rem"}
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
          <PrimarySearchAppBar />
        </Grid>
      </Grid>
      {/* cards */}
      <Grid
        container
        p={"4em"}
        paddingBottom={0}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}>
        <Grid item container lg={12} display="flex" spacing={2} p={"2rem"}>
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
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "0.86rem",
                }}
                title="Charts"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/charts" sx={{ paddingTop: "0rem" }}>
                  3 articles
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Exporting Data"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                  // // marginBottom: "1rem",
                }}>
                <Link href="/category/exporting-data">2 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Filters"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                  // marginBottom: "1rem",
                }}>
                <Link href="/category/filters">1 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Getting Stared"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/getting-started">10 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Import Trades"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/import-trades">10 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Managing Subscriptions"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/managing-subscriptions">2 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Managing Trades"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/managing-trades">11 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Settings"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/settings">2 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Social"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/social">2 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Tags"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/tags">5 articles</Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Trade Reports & Analysis"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/trading-reports&analysis">
                  25 articles
                </Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Webinar & Events"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                }}>
                <Link href="/category/webinar&events">1 articles</Link>
              </CardContent>
            </Card>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <Card sx={{}}>
              <CardHeader
                titleTypographyProps={{
                  variant: "subtitle1",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
                title="Integrations & API"
              />
              <CardContent
                sx={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: Colors.green,
                  textAlign: "center",
                  lineHeight: "18px",
                  padding: "0rem 4rem",
                  // marginBottom: "1rem",
                }}>
                <Link href="/category/integration&api">1 articles</Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            display="flex"
            flexDirection={"row"}>
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                fontSize: "12px",
                color: Colors.dove_gray,
              }}>
              © SureSwift Capital 2023. Powered by Help Scout
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
