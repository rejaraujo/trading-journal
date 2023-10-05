import { BannerText, BannerTitle, MessageText } from "@/styles/homePage";
import { Grid } from "@mui/material";

export default function Page() {
  return (
    <>
      <Grid
        container
        pl={{ xs: "1rem", lg: "4rem" }}
        pr={"3rem"}
        pt={{ xs: "4rem", md: "6rem", lg: "5rem" }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          display="flex"
          flexDirection={"column"}
          // sx={{ background: "pink" }}
        >
          <BannerTitle>Community</BannerTitle>
          <BannerText>
            These are the mos recent trades shared by the community
          </BannerText>
        </Grid>
      </Grid>
    </>
  );
}
