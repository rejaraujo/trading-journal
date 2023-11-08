import fs from "fs";
import Markdown from "markdown-to-jsx";
import path from "path";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

// Second step: get the content for each md file
const getPostContent = (slug) => {
  const folder = path.join(process.cwd(), "src/posts/charts");
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

//First step: to get the slug (name you salved the md) you use the generatStaticParams.
// Then you access it by doing a params.slug.
export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/posts/charts");
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
