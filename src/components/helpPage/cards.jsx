"use client";

import {
  Grid,
  Card,
  ListItem,
  List,
  ListItemText,
  CardContent,
} from "@mui/material";
import {
  MyGridItem,
  BannerTitle,
  BannerMessage,
  MyCardHeader,
} from "@/styles/pricing";
import Link from "next/link";
import { Colors } from "@/styles/theme";
import Image from "next/image";
import bussola from "../../../public/images/bussola.jpeg";
import technicalanalysis from "../../../public/images/technical_analysis.jpeg";
import mouse from "../../../public/images/mouse.jpeg";

const categories = [
  {
    id: 1,
    title: "Journaling Made Easy ",
    image: bussola,
    link: "help/articles",
  },
  {
    id: 2,
    title: "Unlocking Market Insights",
    image: technicalanalysis,
    link: "/help/articles/exporting",
  },
  {
    id: 3,
    title: " Psychology Unleashed",
    image: mouse,
    link: "/help/articles/filters",
  },
];
("");

export default function Members() {
  return (
    <>
      <Grid container pl={{ lg: "4rem" }} pr={{ lg: "3rem" }}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              disableTypography
              primary={
                <BannerTitle>
                  Together, lets shorten learning curves! Keep up the great
                  work!
                </BannerTitle>
              }
              secondary={
                <>
                  <BannerMessage>
                    <strong
                      style={{ fontWeight: "bolder", color: Colors.green }}>
                      TradeTracker:{" "}
                    </strong>
                    Your trading compass!
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
          {categories.map((category) => (
            <MyGridItem key={category.id} item xs={12} md={4} lg={4}>
              <Card
                style={{
                  boxShadow:
                    "0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
                }}>
                <Link href={category.link}>
                  <MyCardHeader subheader={category.title} />

                  <CardContent>
                    <Image
                      src={category.image}
                      alt={category.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        textAlign: "center",
                      }}
                    />
                  </CardContent>
                </Link>
              </Card>
            </MyGridItem>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
