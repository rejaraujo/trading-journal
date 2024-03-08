"use client";

import {
  Grid,
  Card,
  CardContent,
  ListItem,
  List,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  MyGridItem,
  BannerTitle,
  BannerMessage,
  MyTypography,
  MyCardHeader,
  MyListItemButton,
} from "@/styles/pricing";
import Link from "next/link";
import { Colors } from "@/styles/theme";

const commonLinkStyle = {
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
  padding: "12px",
};

const items = [
  {
    id: 1,
    title: "Basic",
    subheader: "free",
    features: [
      "Up to 20 Trades Per Month",
      " Journaling",
      " Reporting",
      "Full Blog access",
      "Stocks, Options, Futures, Forex",
    ],
    route: "/signup/basic",
    linkText: "SIGN UP",
    linkStyle: {
      ...commonLinkStyle,
    },
  },
  {
    id: 2,
    title: "Silver",
    subheader: "$19.99/monthly",
    features: [
      "Acess to Premium Tools",
      "Premium Journaling",
      "Premium Reporting",
      "Full Blog Acess",
      "Stocks, Options, Futures, Forex",
    ],
    route: "/signup/silver",
    linkText: "SIGN UP",
    linkStyle: commonLinkStyle,
  },
  {
    id: 3,
    title: "Gold",
    subheader: "$39.99/monthly",
    features: [
      "Unlimited Trades Per Month",
      "Acess to Premium Tools",
      "Full Blog Acess",
      "Stocks, Options, Futures, Forex",
      "Risk Analysis",
      "24/7 Customer Service",
    ],
    route: "/signup/gold",
    linkText: "SIGN UP",
    linkStyle: commonLinkStyle,
  },
];
("");

export default function Members() {
  return (
    <>
      <Grid
        container
        pl={{ lg: "4rem" }}
        pr={{ lg: "3rem" }}
        pt={{ xs: "3rem", md: "4rem", lg: "4rem" }}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              disableTypography
              primary={
                <BannerTitle>Trade Tracker: Your trading compass!</BannerTitle>
              }
              secondary={
                <>
                  <BannerMessage>
                    Unlock your trading potential with{" "}
                    <strong
                      style={{ fontWeight: "bolder", color: Colors.green }}>
                      TradeTracker
                    </strong>
                    . A powerhouse for refining your trades and boosting your
                    success.
                  </BannerMessage>
                </>
              }
            />
          </ListItem>
        </List>
        <Grid
          item
          container
          display="flex"
          spacing={3}
          paddingBottom={4}
          pt={{ xs: "1rem", lg: "2rem" }}>
          {items.map((item, index) => (
            <MyGridItem key={item.id} item xs={12} md={4} lg={4}>
              <Card
                sx={{
                  background: "#ECFFDC",
                }}>
                <MyCardHeader title={item.title} subheader={item.subheader} />
                <Divider />
                <CardContent sx={{ margin: "0rem" }}>
                  {item.features.map((feature, featureIndex) => (
                    <div key={feature}>
                      <MyTypography>{feature}</MyTypography>
                      <Divider />
                    </div>
                  ))}
                </CardContent>
                {index === 0 || index === 1 ? (
                  // Give me this for Basic and Silver cards
                  <MyListItemButton
                    variant="contained"
                    disableTouchRipple
                    sx={{ paddingTop: "4rem" }}>
                    <Link href="/signup" style={item.linkStyle}>
                      {item.linkText}
                    </Link>
                  </MyListItemButton>
                ) : (
                  <MyListItemButton
                    variant="contained"
                    disableTouchRipple
                    sx={{ paddingTop: "0.5rem" }}>
                    <Link href="/signup" style={item.linkStyle}>
                      {item.linkText}
                    </Link>
                  </MyListItemButton>
                )}
              </Card>
            </MyGridItem>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          display="flex"
          flexDirection={"column"}
          sx={{ background: "pink" }}></Grid>
      </Grid>
      {/* </Grid> */}
    </>
  );
}
