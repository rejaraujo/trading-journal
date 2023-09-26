import Grid from "@mui/material/Grid";
import { MyBox, MessageText } from "@/styles/homePage";
import { Typography, ListItem, List, ListItemText } from "@mui/material";
import Image from "next/image";

import screenTrade from "../../../public/static/images/screenTrade.jpg";

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
                      <Typography
                        sx={{
                          display: "flex",
                          fontSize: "18px",
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        paddingLeft={{ xm: "0rem", sm: "3rem", md: "3rem" }}>
                        “SMB traders rely on Tradervue for journaling and
                        performance analysis.” – Mike Bellafiore, SMB Capital
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>

      {/*  */}
      {/* <Grid container mt={18}>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={"column"}
          alignItems={{ xs: "start", md: "center" }}>
          <MyBox>
            <Image
              src={screenTrade}
              alt="tablet"
              quality={100}
              width={480}
              style={{
                marginLeft: "3.6rem",
                visibility: "visible",
              
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
          alignItems={{ xs: "start", md: "center" }}>
          <MyBox>
            <MessageText>
              The trading journal that will help improve your trading
              performance.
            </MessageText>
          </MyBox>
          <MyBox>
            <Typography
              variant="h6"
              sx={{
                pt: 2.6,
                pb: 2.6,
                pl: 2,
                pr: 12,
              }}>
              “SMB traders rely on Tradervue for journaling and performance
              analysis.” – Mike Bellafiore, SMB Capital
            </Typography>
          </MyBox>
        </Grid>



        <Grid
          background="pink"
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={"column"}>
          <MyBox

            sx={{
            
              borderRadius: "4px",

              background: "pink",
            }}
            p: "2rem",
            mt: "4rem",
            >
            <ListItemButton
              sx={{
                "&.MuiListItemButton-root:hover": {
                  color: Colors.white_off,
                  background: "transparent",
                },
              }}
              
            >
              variant="contained"
              disableTouchRipple
              sx={{
                justifyContent: "center",
              }}
              <ListItem
                sx={{
                  fontSize: "20px",
                  lineHeight: "20px",
                  padding: "26.8px 92px",
                  borderRadius: "4px",
                  letterSpacing: "0.64px",
                  fontWeight: "bold",
                  background: Colors.green,
                }}
             
              >
                   sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                SIGN UP NOW
              </ListItem>
            </ListItemButton>
          </MyBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          flexDirection={"column"}
          alignItems={{ xs: "start", md: "center" }}>
          <MyBox
            maxWidth={(theme) => theme.breakpoints.values.lg}
            sx={{
              p: "2rem",
              mt: "4rem",
              bgcolor: "#E0E0E0",
              borderRadius: "4px",
              alignItems: "center",
            }}>
            <Typography variant="h6">
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
          </MyBox>
        </Grid>
      </Grid> */}
    </>
  );
}
