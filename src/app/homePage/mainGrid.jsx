import Grid from "@mui/material/Grid";
import {
  MyBox,
  MessageText,
  Testimonial,
  MyButton,
  BannerHeader,
  BannerTitle,
  BannerList,
  BannerText,
} from "@/styles/homePage";
import { Typography, ListItem, List, ListItemText } from "@mui/material";
import Image from "next/image";
import screenTrade from "../../../public/static/images/screenTrade.jpg";
import Journal from "../../../public/images/computerJournal.jpg";
import Analyze from "../../../public/images/analyses.jpg";
import Share from "../../../public/images/share.jpg";
import Link from "next/link";
import { Colors } from "@/styles/theme";

export default function MainGrid() {
  return (
    <>
      <Grid
        container
        pl={{ xs: "1rem", lg: "4rem" }}
        pr={"3rem"}
        pt={{ xs: "4rem", md: "6rem", lg: "7.6rem" }}
        // sx={{ background: "blue" }}
      >
        <Grid
          item
          container
          lg={12}
          display="flex"
          spacing={2}
          // sx={{ background: "green" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display="flex"
            flexDirection={"column"}>
            <Image
              alt="screen"
              src={screenTrade}
              quality={100}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display="flex"
            flexDirection={"column"}>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText
                  disableTypography
                  primary={
                    <MessageText>
                      The trading journal that will help improve your trading
                      performance.
                    </MessageText>
                  }
                  secondary={
                    <>
                      <Testimonial
                        component="span"
                        variant="body2"
                        color="text.primary">
                        “SMB traders rely on Tradervue for journaling and
                        performance analysis.” – Mike Bellafiore, SMB Capital
                      </Testimonial>
                    </>
                  }
                />
              </ListItem>
              {/* SIGN UP BUTTON */}
              <ListItem alignItems="flex-start">
                <MyButton>
                  <Link href="/sign-up" style={{ marginTop: "0px" }}>
                    SIGN UP NOW
                  </Link>
                </MyButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        {/* TRADE WITH A FIRM */}
        <Grid item container lg={12} display="flex" spacing={2}>
          <Grid
            item
            sm={12}
            md={12}
            lg={12}
            display="flex"
            flexDirection={"row"}
            sx={{ marginTop: "2rem" }}>
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
        </Grid>
        {/* ARTICLES */}
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
        </Grid>
      </Grid>
    </>
  );
}
