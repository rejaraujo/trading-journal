import Link from "next/link";
import Grid from "@mui/material/Grid";
import {
  BannerHeader,
  BannerTitle,
  BannerList,
  BannerText,
} from "@/styles/homePage";
import Image from "next/image";
import { ListItem, ListItemText } from "@mui/material";
import { Colors } from "@/styles/theme";
import Journal from "../../../public/images/computerJournal.jpg";
import Analyze from "../../../public/images/analyses.jpg";
import Share from "../../../public/images/share.jpg";

export default function Articles() {
  return (
    <>
      <Grid
        container
        pl={{ xs: "1rem", lg: "4rem" }}
        pr={"2rem"}
        pt={"4rem"}
        // sx={{ background: "blue", ml: "3rem" }}
      >
        <Grid item container lg={12} display="flex" spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection={"column"}>
            <BannerList>
              {/* sx={{ background: "pink" }} */}
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
        </Grid>
      </Grid>
    </>
  );
}
