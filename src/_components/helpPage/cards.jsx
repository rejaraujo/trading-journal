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

const categories = [
  { id: 1, title: "Charts", link: "/category/charts", articles: "3 articles" },
  {
    id: 2,
    title: "Exporting Data",
    link: "/category/exporting-data",
    articles: "2 articles",
  },
  { id: 3, title: "Filters", link: "/category/filters", articles: "1 article" },
  {
    id: 4,
    title: "Getting Started",
    link: "/category/getting-started",
    articles: "10 articles",
  },
  {
    id: 5,
    title: "Import Trades",
    link: '/category/import-trades"',
    articles: "10 articles",
  },
  {
    id: 6,
    title: "Managing Subscriptions",
    link: "/category/managing-subscriptions",
    articles: "2 articles",
  },
  {
    id: 7,
    title: "Managing Trades",
    link: "/category/managing-trades",
    articles: "11 articles",
  },
  {
    id: 8,
    title: "Settings",
    link: "/category/settings",
    articles: "2 articles",
  },
  { id: 9, title: "Social", link: "/category/social", articles: "2 articles" },
  { id: 10, title: "Tags", link: "/category/tags", articles: "5 articles" },
  {
    id: 11,
    title: "Trades Reports & Analysis",
    link: "/category/trades-reports-and-analysis",
    articles: "25 articles",
  },
  {
    id: 12,
    title: "Webinar & Events",
    link: "/category/webinar-and-events",
    articles: "1 article",
  },
  {
    id: 13,
    title: "Integrations & API",
    link: "/category/integrations-and-api",
    articles: "1 article",
  },
  // Add more category objects as needed
];

export default function Cards() {
  return (
    <>
      <MyGrid>
        <Grid item container lg={12} display="flex" spacing={4} p={"2rem"}>
          {categories.map((category) => (
            <MyGridItem key={category.id} item xs={12} md={4} lg={4}>
              <Card>
                <MyCardHeader title={category.title} />
                <MyCardContent>
                  {/* <Link href={category.title} sx={{ paddingTop: "0rem" }}> */}
                  <Link href="/help/articles" sx={{ paddingTop: "0rem" }}>
                    {/* <Link
                    href={`/help/articles/${category.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}> */}
                    {category.articles}
                  </Link>
                </MyCardContent>
              </Card>
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
