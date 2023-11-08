"use client";

import Grid from "@mui/material/Grid";
import { Card, Typography } from "@mui/material";
import Link from "next/link";
import { Colors } from "@/styles/theme";
import {
  MyCardHeader,
  MyCardContent,
  MyGrid,
  MyGridItem,
} from "@/styles/helpPage";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";

const categories = [
  {
    id: 1,
    icon: CandlestickChartIcon,
    title: "Charts",
    articles: "3 articles",
    link: "help/articles",
  },
  {
    id: 2,
    title: "Exporting Data",
    articles: "2 articles",
    link: "/help/articles/exporting",
  },
  {
    id: 3,
    title: "Filters",
    articles: "1 article",
    link: "/help/articles/filters",
  },
  {
    id: 4,
    title: "Getting Started",
    articles: "10 articles",
    link: "/help/articles/getting-started",
  },
  {
    id: 5,
    title: "Import Trades",
    articles: "10 articles",
    link: "/help/articles/import-trades",
  },
  {
    id: 6,
    title: "Managing Subscriptions",
    articles: "2 articles",
    link: "/help/articles/managing-subscriptions",
  },
  {
    id: 7,
    title: "Managing Trades",
    articles: "11 articles",
    link: "/help/articles/managing-trades",
  },
  {
    id: 8,
    title: "Settings",
    articles: "2 articles",
    link: "/help/articles/settings",
  },
  {
    id: 9,
    title: "Social",
    articles: "2 articles",
    link: "/help/articles/social",
  },
  {
    id: 10,
    title: "Tags",
    articles: "5 articles",
    link: "/help/articles/tags",
  },
  {
    id: 11,
    title: "Trades Reports & Analysis",
    articles: "25 articles",
    link: "/help/articles/trades-reports-analysis",
  },
  {
    id: 12,
    title: "Webinar & Events",
    articles: "1 article",
    link: "/help/articles/webinar-events",
  },
  {
    id: 13,
    title: "Integrations & API",
    articles: "1 article",
    link: "/help/articles/integrations-and-api",
  },
];

export default function Cards() {
  return (
    <>
      <MyGrid>
        <Grid item container lg={12} display="flex" spacing={4} p={"2rem"}>
          {categories.map((category) => (
            <MyGridItem key={category.id} item xs={12} md={4} lg={4}>
              <Link href={category.link}>
                <Card>
                  <MyCardHeader title={category.title} />
                  <MyCardContent>{category.articles}</MyCardContent>
                </Card>
              </Link>
            </MyGridItem>
          ))}

          <MyGridItem item xs={12} md={12} lg={12} flexDirection={"row"}>
            <Typography
              sx={{
                fontSize: "12px",
                color: Colors.dove_gray,
              }}>
              © SureSwift Capital 2023. Powered by Help Scout
            </Typography>
          </MyGridItem>
        </Grid>
      </MyGrid>
    </>
  );
}
