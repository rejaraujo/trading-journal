import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPostMetadata() {
  // const folder = path.join(process.cwd(), "src/posts"); // Use a relative path
  // const folder = path.join(process.cwd(), "src/posts/charts");
  const folder = path.join(process.cwd(), "src/posts/charts");
  const files = fs.readdirSync(folder);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => {
      const fileContents = fs.readFileSync(path.join(folder, fileName));
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    });

  return posts;
}
