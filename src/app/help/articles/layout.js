import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import icon from "@mui/icons-material/ChevronRight";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const drawerWidth = 260;
const iconImage = FolderOpenIcon;

const links = [
  { text: "Charts", href: "/help/articles/charts", icon: iconImage },
  {
    text: "Exporting Data",
    href: "/help/articles/exporting",
    icon: iconImage,
  },
  {
    text: "Fundamental Analysis",
    href: "/1",
    icon: iconImage,
  },
  {
    text: "Technical Analysis",
    href: "/2",
    icon: iconImage,
  },
  {
    text: "Trading Psychology",
    href: "/3",
    icon: iconImage,
  },
  {
    text: "Trading Psychology",
    href: "/4",
    icon: iconImage,
  },
];

export default function RootLayout({ children }) {
  return (
    <>
      <section style={{ paddingBottom: "2rem" }}>
        <Box sx={{ display: "flex" }}>
          <Drawer
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
            <Box sx={{ overflow: "auto", paddingLeft: "1rem" }}>
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
          <Box
            component="main"
            sx={{ width: "100%", p: "0.4rem 2rem 0.4rem 2rem" }}>
            {children}
          </Box>
        </Box>
      </section>
    </>
  );
}
