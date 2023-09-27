import Grid from "@mui/material/Grid";
import { MyBox, MessageText, Testimonial, MyButton } from "@/styles/homePage";
import { Typography, ListItem, List, ListItemText } from "@mui/material";
import Image from "next/image";
import screenTrade from "../../../public/static/images/screenTrade.jpg";
import Link from "next/link";
import { Colors } from "@/styles/theme";

export default function SessionOne() {
  return (
    <>
      <Grid container pl={{ xs: "1rem", lg: "4rem" }} pr={"2rem"} pt={"8rem"}>
        <Grid
          item
          container
          lg={12}
          display="flex"
          spacing={2}
          // sx={{ background: "blue" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display="flex"
            flexDirection={"column"}>
            <MyBox>
              <Image src={screenTrade} alt="tablet" quality={100} width={470} />
            </MyBox>
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
      </Grid>
      {/* ADVERTISE */}{" "}
      <Grid container pl={{ xs: "1rem", lg: "4rem" }} pr={"2rem"} pt={"4rem"}>
        <Grid
          item
          container
          lg={12}
          display="flex"
          spacing={2}
          paddingLeft={"2rem"}
          paddingRight={"2rem"}>
          <Typography
            variant="h6"
            padding="2rem"
            sx={{
              bgcolor: "#E0E0E0",
              borderRadius: "4px",
              alignItems: "center",
              textAlign: "center",
              flexGrow: "1",
            }}>
            Trade with a firm? Take a look at{" "}
            <Link
              href="/trading-firms"
              style={{
                textDecoration: "none",
                textTransform: "none",
                fontSize: "20px",
                color: Colors.green,
              }}>
              Tradervue for trading firms.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
