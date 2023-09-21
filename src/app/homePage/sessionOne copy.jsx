import Grid from "@mui/material/Grid";
import { MyBox, MessageText } from "@/styles/homePage";
import { Typography, ListItem, ListItemButton, Box } from "@mui/material";
import { Colors } from "../../styles/theme";
import Image from "next/image";
import screenTrade from "../../../public/static/images/screenTrade.jpg";
import Link from "next/link";

export default function SessionOne() {
  return (
    <>
      <Grid container lg={12} mt={16}>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={"column"}
          alignItems={{ xs: "start", md: "center" }}
          sx={{ background: "yellow" }}>
          <MyBox>
            <Image
              src={screenTrade}
              alt="tablet"
              quality={100}
              width={480}
              style={{
                marginLeft: "3.6rem",
                visibility: "visible",
                // height: "85%",
                // width: "85%",
              }}
            />
          </MyBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          // sx={{ background: "pink" }}
        >
          <Box>
            <MessageText
              // display={{ xs: "inline-block" }}
              // maxWidth={{ xs: "580", md: "1070" }}
              // marginLeft={{ xs: "4rem", md: "0" }}
              pl={{ xs: 12 }}
              pr={{ xs: 12 }}
              p={6}>
              The trading journal that will help improve your trading
              performance.
              <Typography
                variant="h6"
                sx={{
                  paddingTop: "1.4em",
                  paddingBottom: "1.4em",
                }}>
                “SMB traders rely on Tradervue for journaling and performance
                analysis.” – Mike Bellafiore, SMB Capital
              </Typography>
              <ListItemButton style={{ backgroundColor: "transparent" }}>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                    lineHeight: "20px",
                    padding: "20px 92px",
                    borderRadius: "4px",
                    letterSpacing: "0.64px",
                    fontWeight: "bold",
                    color: Colors.white_off,
                    background: Colors.green,
                  }}>
                  SIGN UP
                </ListItem>
              </ListItemButton>
            </MessageText>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          flexDirection={"row"}
          alignItems={"center"}>
          <MyBox
            sx={{
              backgroundColor: Colors.light_grey,
              padding: "2rem",
              alignItems: "center",
              borderRadius: "4px",
            }}>
            <Typography variant="h6">
              Trade with a firm? Take a look at{" "}
              <Link
                href="/trading-firms"
                style={{
                  textDecoration: "none",
                  textTransform: "none",
                  fontSize: "20px",
                  color: "#1ec426",
                }}>
                Tradervue for trading firms.
              </Link>
            </Typography>
          </MyBox>
        </Grid>
      </Grid>
    </>
  );
}
