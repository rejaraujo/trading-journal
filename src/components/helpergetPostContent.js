import fs from "fs";
import Markdown from "markdown-to-jsx";
import path from "path";
import matter from "gray-matter";

// Second step: get the content for each md file
export const getPostContent = (relativePath, slug) => {
  const folder = path.join(process.cwd(), relativePath);
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};
