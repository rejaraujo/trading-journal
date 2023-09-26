import Grid from "@mui/material/Grid";
import {
  BannerHeader,
  BannerTitle,
  BannerList,
  BannerText,
  MyBox,
} from "@/styles/homePage";
import Image from "next/image";
import { ListItem, ListItemText } from "@mui/material";
import Journal from "../../../public/images/computerJournal.jpg";
import Analyze from "../../../public/images/analyses.jpg";
import Share from "../../../public/images/share.jpg";
import Link from "next/link";
import { Colors } from "@/styles/theme";

export default function SessionTwo() {
  return (
    <>
      <Grid container pl={{ xs: "1rem", lg: "4rem" }} pr={"2rem"} pt={"4rem"}>
        <Grid item container lg={12} display="flex" spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}
            // sx={{ background: "pink" }}
          >
            <BannerList>
              <ListItem alignItems="flex-start">
                <BannerHeader>
                  <Image src={Journal} alt="journal" quality={100} width={65} />
                </BannerHeader>
                <ListItemText
                  sx={{ paddingLeft: "1rem" }}
                  disableTypography
                  primary={<BannerTitle>Journal</BannerTitle>}
                  secondary={
                    <>
                      <BannerText component="span" variant="body2">
                        A stock, futures, and forex trading journal that works
                        for you, not against you.
                      </BannerText>
                      <Link href="/trading-journal">
                        <BannerText sx={{ color: Colors.green }}>
                          Learn more about our trading journal
                        </BannerText>
                      </Link>
                    </>
                  }
                />
              </ListItem>
            </BannerList>
          </Grid>

          {/* Analyze */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <BannerList>
              <ListItem alignItems="flex-start">
                <BannerHeader>
                  <Image src={Analyze} alt="analyze" quality={100} width={65} />
                </BannerHeader>
                <ListItemText
                  sx={{ paddingLeft: "1rem" }}
                  disableTypography
                  primary={<BannerTitle>Analyze</BannerTitle>}
                  secondary={
                    <>
                      <BannerText component="span" variant="body2">
                        You’ve been trading a lot. But do you really know what’s
                        working?
                      </BannerText>
                      <Link href="/trading-analysis-software">
                        <BannerText sx={{ color: Colors.green }}>
                          Learn more about our trading analysis software
                        </BannerText>
                      </Link>
                    </>
                  }
                />
              </ListItem>
            </BannerList>
          </Grid>
          {/* Share */}
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <BannerList>
              <ListItem alignItems="flex-start">
                <BannerHeader>
                  <Image src={Share} alt="share" quality={100} width={65} />
                </BannerHeader>
                <ListItemText
                  sx={{ paddingLeft: "1rem" }} // sytle this component so we can do the repsonsive thing.
                  disableTypography
                  primary={<BannerTitle>Share</BannerTitle>}
                  secondary={
                    <>
                      <BannerText component="span" variant="body2">
                        Execution is everything. Share your expertise with the
                        trading community.
                      </BannerText>
                      <Link href="/trading-community">
                        <BannerText sx={{ color: Colors.green }}>
                          Learn more about our trading community
                        </BannerText>
                      </Link>
                    </>
                  }
                />
              </ListItem>
            </BannerList>
          </Grid>

          {/* <Grid item lg={4} xs={12}>
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
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
}
