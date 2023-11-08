import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import Link from "next/link";

export default function PostPreview(props) {
  const { folder, route, slug } = props;
  return (
    <List>
      <ListItem key={props.slug} disablePadding>
        <ListItemIcon>
          <FileOpenIcon />
        </ListItemIcon>
        {/* <Link href={`/help/articles/${props.slug}`}>
          <ListItemText>{props.title}</ListItemText>
        </Link> */}
        <Link href={`/${folder}/${route}/${slug}`}>
          <ListItemText>{props.title}</ListItemText>
        </Link>
      </ListItem>
    </List>
  );
}
