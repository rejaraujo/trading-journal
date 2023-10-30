import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import Link from "next/link";

export const metadata = {
  title: "Articles | Exporting Data",
};
// using fetchData()
export default async function fetchData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  const exportingData = data.slice(0, 2);
  return (
    <Box>
      {exportingData.map((post) => (
        <List key={post.id}>
          <Link
            href="/help/articles/[slug]"
            as={`/help/articles/${post.title
              .replace(/\s+/g, "-")
              .toLowerCase()}`}>
            <ListItem>
              <ListItemIcon>
                <FileOpenIcon />
              </ListItemIcon>
              <ListItemText>{post.title}</ListItemText>
            </ListItem>
          </Link>
        </List>
      ))}
    </Box>
  );
}
