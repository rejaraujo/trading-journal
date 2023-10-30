import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// export const metadata = {
//   title: "Articles",
// };

const drawerWidth = 260;

const links = [
  { text: "Charts", href: "/help/articles", icon: ChevronRightIcon },
  {
    text: "Exporting Data",
    href: "/help/articles/exporting-data",
    icon: ChevronRightIcon,
  },
  {
    text: "Filters",
    href: "/help/articles/filters",
    icon: ChevronRightIcon,
  },
  {
    text: "Getting Started ",
    href: "/help/articles/getting-started",
    icon: ChevronRightIcon,
  },
  {
    text: "Import Trades",
    href: "/help/articles/import-trades",
    icon: ChevronRightIcon,
  },
  {
    text: "Managing Subscriptions ",
    href: "/help/articles/managing-subscriptions",
    icon: ChevronRightIcon,
  },
  {
    text: "Managing Trades ",
    href: "/help/articles/managing-trades",
    icon: ChevronRightIcon,
  },
  {
    text: "Settings ",
    href: "/help/articles/settings",
    icon: ChevronRightIcon,
  },
  {
    text: "Social ",
    href: "/help/articles/social",
    icon: ChevronRightIcon,
  },
  { text: "Tags ", href: "/help/articles/tags", icon: ChevronRightIcon },
  {
    text: "Trade Reports & Analysis ",
    href: "/help/articles/trade-reports-and-analysis",
    icon: ChevronRightIcon,
  },
  {
    text: "Webinar & Events ",
    href: "/help/articles/webinar-and-events",
    icon: ChevronRightIcon,
  },
  {
    text: "Integrations & API ",
    href: "/help/articles/integrations-and-api",
    icon: ChevronRightIcon,
  },
];

export default function RootLayout({ children }) {
  return (
    <>
      <section>
        <Box sx={{ display: "flex" }}>
          <Drawer
            // PaperProps={{
            //   style: {
            //     position: "absolute",
            //     zIndex: -1,
            //     top: "5rem",
            //   },
            // }}
            variant="permanent"
            sx={{
              width: drawerWidth,
              // flexShrink: 0,
              flexGrow: 1,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                position: "relative",
                zIndex: 1,
                top: "0",
                borderRight: `1px solid white`,
                flexGrow: 1,
              },
            }}>
            <Box sx={{ overflow: "auto", paddingLeft: "2rem" }}>
              <List>
                {links.map(({ text, href, icon: Icon }) => (
                  <ListItem key={href} disablePadding>
                    <ListItemButton component={Link} href={href}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ width: "100%" }}>
            {/* <Paper display="flex" sx={{ marginTop: "5rem" }}> */}
            {children}
            {/* </Paper> */}
          </Box>

          {/* <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: `${drawerWidth}px`,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}>
            {children}
          </Box> */}
        </Box>
      </section>
    </>
  );
}
