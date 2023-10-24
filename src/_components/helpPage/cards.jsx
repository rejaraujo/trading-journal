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
  {
    id: 1,
    title: "Charts",
    articles: "3 articles",
  },
  {
    id: 2,
    title: "Exporting Data",
    articles: "2 articles",
  },
  {
    id: 3,
    title: "Filters",
    link: "/category/filters",
    route: "/help/articles",
    articles: "1 article",
  },
  {
    id: 4,
    title: "Getting Started",
    articles: "10 articles",
  },
  {
    id: 5,
    title: "Import Trades",
    articles: "10 articles",
  },
  {
    id: 6,
    title: "Managing Subscriptions",
    articles: "2 articles",
  },
  {
    id: 7,
    title: "Managing Trades",
    articles: "11 articles",
  },
  {
    id: 8,
    title: "Settings",
    articles: "2 articles",
  },
  {
    id: 9,
    title: "Social",
    articles: "2 articles",
  },
  {
    id: 10,
    title: "Tags",
    articles: "5 articles",
  },
  {
    id: 11,
    title: "Trades Reports & Analysis",
    articles: "25 articles",
  },
  {
    id: 12,
    title: "Webinar & Events",
    articles: "1 article",
  },
  {
    id: 13,
    title: "Integrations & API",
    articles: "1 article",
  },
];

export default function Cards() {
  return (
    <>
      <MyGrid>
        <Grid item container lg={12} display="flex" spacing={4} p={"2rem"}>
          {categories.map((category) => (
            <MyGridItem key={category.id} item xs={12} md={4} lg={4}>
              <Link href="help/articles">
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
