// My  Master Page. Move it to page.js inside articles folder

"use client";

import useSWR from "swr";
import Link from "next/link";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
} from "@mui/material";
import { ResponsiveDrawer } from "@/app";
import { FileOpen } from "@mui/icons-material";

//client side
const fetcher = (path) =>
  fetch(`https://jsonplaceholder.typicode.com/${path}`).then((res) =>
    res.json()
  );

export default function ClientPage() {
  const posts = useSWR("posts", fetcher);
  const packagePost = posts?.data?.slice(0, 10);
  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveDrawer />
      <Box
        sx={{
          width: "100%",
        }}>
        <Paper display="flex" sx={{ paddingTop: "3rem" }}>
          {/* {posts?.data?.map((post) => ( */}
          {packagePost?.map((post) => (
            <List key={post.id} sx={{ padding: "0rem 2rem 0rem 2rem" }}>
              <Link
                href="/help/articles/[slug]"
                as={`/help/articles/${post.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}>
                <ListItem>
                  <ListItemIcon>
                    <FileOpen fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{post.title}</ListItemText>
                </ListItem>
              </Link>
            </List>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

//Static Props
// async function getCharacters() {
//   return await (
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//   ).json();
// }
// export default function StaticProps() {
//   const allCharacters = use(getCharacters());

//   return (
//     <div>
//       <h2>getStaticProps</h2>
//       {allCharacters?.results.map((c) => (
//         <ul key={c.id}>
//           <Link
//             href="/help/articles/[slug]"
//             as={`/help/articles/${c.name.replace(/\s+/g, "-").toLowerCase()}`}>
//             <li>{c.name}</li>
//           </Link>
//         </ul>
//       ))}
//     </div>
//   );
// }

// using fetchData()
// export default async function fetchData() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   return (
//     <div>
//       {data.map((post) => (
//         <ul key={post.id}>
//           <Link
//             href={`/articles/${post.title}`.replace(/\s+/g, " ").toLowerCase()}>
//             <li>{post.title}</li>
//           </Link>
//         </ul>
//       ))}
//     </div>
//   );
// }
