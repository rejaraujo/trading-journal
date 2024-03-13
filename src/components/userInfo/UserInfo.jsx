import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function UserInfo() {
  return (
    <>
      <Grid
        container
        pl={{ lg: "4rem" }}
        pr={{ lg: "3rem" }}
        pt={{ xs: "3rem", md: "4rem", lg: "4rem" }}
        pb={{ xs: "3rem", md: "4rem", lg: "4rem" }}
        style={{
          justifyContent: "center",
        }}>
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: "4px",
            p: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">Name: Jaine</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">Email: jaine@gmail.com</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Button variant="outlined">Log Out</Button>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </>
  );
}
