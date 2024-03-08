// components/Login.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Avatar,
  AvatarGroup,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Colors } from "@/styles/theme";

const combinedData = [
  {
    type: "AvatarGroup",
    avatars: [
      { name: "Remy Sharp" },
      { name: "Travis Howard" },
      { name: "Cindy Baker" },
      { name: "Agnes Walker" },
    ],
  },
];

const SilverPlan = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(password);
  const [mailList, setMailList] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleMonthChange = (event) => {
    setExpiryMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setExpiryYear(event.target.value);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        // sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Box
            width={400}
            // height={550}
            sx={{
              background: Colors.light_grey,
              border: "1px solid green",
              borderRadius: "5px",
              p: "1rem",
            }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", pl: "1rem" }}>
              Sign in to TradeTracker
            </Typography>
            <Divider variant="middle" sx={{ pt: "0.6rem" }} />
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText
                  sx={{ m: "0rem" }}
                  primary={
                    <Typography variant="caption2">
                      Plan: Silver ($29/montlhy) change
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.8rem",
                          fontStyle: "italic",
                          mt: "1rem",
                          textAlign: "left",
                        }}>
                        You will be automatically charged after your 7-day trial
                        ends; if you wish to avoid any charges, go to your
                        account settings and change to a free account before
                        your 7 days are up.
                      </Typography>
                    </>
                  }></ListItemText>
              </ListItem>
            </List>
            <form style={{ padding: "1rem", mt: "0rem" }}>
              <TextField
                label="Username"
                type="name"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="none"
                size="small"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                size="small"
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                size="small"
              />
              <TextField
                label="Confirm password"
                type="confirm password"
                fullWidth
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
                margin="normal"
                size="small"
              />
              <Box>
                {combinedData.map((item, index) => (
                  <React.Fragment key={`item-${index}`}>
                    {item.type === "Typography" && (
                      <Typography
                        variant={item.variant}
                        display="flex"
                        justifyContent="center"
                        alignContent="center"
                        alignItems="center"
                        sx={{
                          color: "white",
                          textAlign: "center",
                          fontSize:
                            item.variant === "body2" ? "12px" : undefined,
                        }}>
                        {item.text}
                      </Typography>
                    )}
                    {item.type === "AvatarGroup" && (
                      <Box sx={{ padding: "0.65rem" }}>
                        <AvatarGroup
                          max={4}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                          {item.avatars.map((avatar, avatarIndex) => (
                            <Avatar
                              key={`avatar-${avatarIndex}`}
                              alt={avatar.name}
                              src={avatar.src}
                            />
                          ))}
                        </AvatarGroup>
                      </Box>
                    )}
                  </React.Fragment>
                ))}
              </Box>
              <TextField
                label="Name on Card"
                type="full name"
                fullWidth
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                size="small"
              />
              <TextField
                label="Card Number"
                type="numbers"
                fullWidth
                // value={cardNumber}
                // onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                size="small"
              />
              {/* Expire date Card */}
              <Grid container spacing={2} sx={{ pt: "1rem" }}>
                <Grid item xs={6}>
                  <Typography>Card Expiration Date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ textAlign: "right" }}>CVS Code</Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label=" Month"
                    variant="outlined"
                    type="text"
                    value={expiryMonth}
                    onChange={handleMonthChange}
                    placeholder="MM"
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label=" Year"
                    variant="outlined"
                    type="text"
                    value={expiryYear}
                    onChange={handleYearChange}
                    placeholder="YYYY"
                    size="small"
                  />
                </Grid>
                {/*  */}
                <Grid item xs={4}>
                  <TextField
                    label=""
                    variant="outlined"
                    type="text"
                    placeholder="000"
                    size="small"
                    // value={expiryYear}
                    // onChange={handleYearChange}
                  />
                </Grid>
              </Grid>
              {/* us billing */}
              <FormControlLabel
                sx={{
                  pt: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                control={
                  <Checkbox
                    checked={mailList}
                    onChange={(e) => setMailList(e.target.checked)}
                    color="primary"
                    size="small"
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", mt: "1rem" }}>
                    Yes, please add me to the TradeTracker mailing list, to
                    receive occasional product update emails.
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{
                  // pt: "1rem",
                  justifyContent: "start",
                  alignItems: "start",
                }}
                control={
                  <Checkbox
                    checked={privacyPolicy}
                    onChange={(e) => setPrivacyPolicy(e.target.checked)}
                    color="primary"
                    size="small"
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", mt: "0.7rem" }}>
                    Yes, I have read and agree to the terms of service and
                    privacy policy. I understand I am signing up for a
                    subscription service, and I agree to be automatically
                    charged immediately following my 7-day trial unless I switch
                    to the free plan before then
                  </Typography>
                }
              />
              <Grid item xs={12} sx={{ pt: "1rem" }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "12px", mt: "0.7rem" }}>
                  Please note all sales are final - no refunds.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ pt: "1rem" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  // onClick={}
                  sx={{ mt: "1rem", textTransform: "none" }}>
                  Create account
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SilverPlan;
