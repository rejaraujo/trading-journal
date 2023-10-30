// "use client";

// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { Colors } from "@/styles/theme";
// import { FolderOpen } from "@mui/icons-material";

// import fs from "fs";
// import Link from "next/link";
// import SearchAppBar from "../articles/searchBar";

// const getPostMetada = () => {
//   const folder = "posts/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));
//   const slugs = markdownPosts.map((file) => file.replace(".md", ""));
//   return slugs;
// };

// const PostsPage = () => {
//   const postMetadata = getPostMetada();
//   return (
//     <Box sx={{ display: "flex" }}>
//       <Drawer
//         // PaperProps={{
//         //   style: {
//         //     position: "absolute",
//         //     zIndex: -1,
//         //     top: "5rem",
//         //   },
//         // }}
//         variant="permanent"
//         sx={{
//           width: 300,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: 300,
//             height: "100%",
//             boxSizing: "border-box",
//             position: "relative",
//             zIndex: 1,
//             // top: "5rem",
//             backgroundColor: Colors.white,
//             borderRight: `1px solid ${Colors.white_off}`,
//             // borderTop: `1px solid ${Colors.white_off}`,
//           },
//         }}>
//         <Box sx={{ overflow: "auto", padding: "2rem" }}>
//           <SearchAppBar />
//           <List>
//             {postMetadata.map((text) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <FolderOpen />
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//             {/* {[
//               "Charts",
//               "Exporting Data ",
//               "Filters ",
//               "Getting Started ",
//               "Import Trades",
//               "Managing Subscriptions ",
//               "Managing Trades ",
//               "Settings ",
//               "Social ",
//               "Tags ",
//               "Trade Reports & Analysis ",
//               "Webinar & Events ",
//               "Integrations & API ",
//             ].map((text) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <FolderOpen />
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))} */}
//           </List>
//         </Box>
//       </Drawer>
//     </Box>
//   );
//   // return <div>{postPreviews}</div>;
// };

// export default PostsPage;
