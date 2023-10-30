import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import Link from "next/link";

export const metadata = {
  title: "Articles | Filters",
};

// using fetchData()
export default async function fetchData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  const filters = data.slice(0, 1);
  return (
    <Box>
      {filters.map((post) => (
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
