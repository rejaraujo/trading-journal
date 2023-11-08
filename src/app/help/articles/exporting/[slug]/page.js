import fs from "fs";
import Markdown from "markdown-to-jsx";
import path from "path";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

// Second step: get the content for each md file
const getPostContent = (slug) => {
  // const folder = path.join(process.cwd(), "src/posts"); // Use a relative path
  const folder = path.join(process.cwd(), "src/posts/exporting"); // Use a relative path
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

//First step: get the slug/name you salved you md you use the params.
// Then you access the params.slug.
export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/posts/exporting");
  // return [{ slug: "aws-quickstart" }];
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage({ params }) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <h1> {post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </>
  );
}
