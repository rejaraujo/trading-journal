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
  MyGrid,
  MyGridItem,
  BannerTitle,
  BannerMessage,
  MyTypography,
  MyCardHeader,
  MyListItemButton,
} from "@/styles/pricing";
import Link from "next/link";
import { Colors } from "@/styles/theme";
import FeatureBreakdownTable from "./featureBreakdownTable";

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
      "Up to 30 Trades Per Month",
      "Basic Journaling",
      "Basic Reporting",
      "Sharing",
      "Stocks, Options, Futures, Forex",
    ],
    route: "/signup/basic",
    linkText: "SIGN UP",
    linkStyle: {
      ...commonLinkStyle,
      background: Colors.dove_gray,
    },
  },
  {
    id: 2,
    title: "Silver",
    subheader: "$29.00/monthly",
    features: [
      "Unlimited Trades Per Month",
      "Enhanced Journaling",
      "Advanced Reporting",
      "Sharing",
      "Stocks, Options, Futures, Forex",
    ],
    route: "/signup/silver",
    linkText: "SIGN UP",
    linkStyle: commonLinkStyle,
  },
  {
    id: 3,
    title: "Gold",
    subheader: "$49.00/monthly",
    features: [
      "Unlimited Trades Per Month",
      "Enhanced Journaling",
      "Advanced Reporting",
      "Sharing",
      "Stocks, Options, Futures, Forex",
      "Risk Analysis",
    ],
    linkText: "SIGN UP",
    linkStyle: commonLinkStyle,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* <MyGrid container> */}
      <MyGridItem item xs={12} md={12} lg={12}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              disableTypography
              primary={
                <BannerTitle>Keep your Trading Journal with ease.</BannerTitle>
              }
              secondary={
                <>
                  <BannerMessage>
                    A trading journal is one of the best ways to improve your
                    trading – and Tradervue is the most powerful tool available
                    to keep your journal.
                  </BannerMessage>
                </>
              }
            />
          </ListItem>
        </List>
      </MyGridItem>
      {/* TRADE WITH A FIRM */}
      <MyGridItem
        item
        sm={12}
        md={12}
        lg={12}
        flexDirection={"row"}
        mt={"2rem"}
        sx={{ background: Colors.light_grey, flexGrow: 1 }}>
        <MyTypography>
          Trade with a firm? Take a look at{" "}
          <Link
            href="/trading-firms"
            style={{
              color: Colors.green,
            }}>
            Tradervue for trading firms.
          </Link>
        </MyTypography>
      </MyGridItem>
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
        {items.map((item, index) => (
          <MyGridItem key={item.id} item xs={12} md={4} lg={4}>
            <Card
              sx={{
                background: Colors.light_grey,
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
                  <Link href="/signup/silver" style={item.linkStyle}>
                    {item.linkText}
                  </Link>
                </MyListItemButton>
              ) : (
                <MyListItemButton
                  variant="contained"
                  disableTouchRipple
                  sx={{ paddingTop: "0.5rem" }}>
                  {/* <Link href={item.route} style={item.linkStyle}>
                      {item.linkText}
                    </Link> */}
                  <Link href="/signup/gold" style={item.linkStyle}>
                    {item.linkText}
                  </Link>
                </MyListItemButton>
              )}
            </Card>
          </MyGridItem>
        ))}
      </Grid>
      <MyGridItem item xs={12} md={12} lg={12}>
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
      </MyGridItem>
      {/* table */}
      {/* <Grid
          item
          xs={12}
          md={12}
          lg={12}
          mt={4}
          display="flex"
          flexDirection={"column"}></Grid> */}
      <FeatureBreakdownTable />
      {/* </MyGrid> */}
    </>
  );
}
