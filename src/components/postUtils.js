// postUtils.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const postContent = getPostContent(
  "/Users/rejaine/dev/React/Portfolio/trading-journal/src/posts",
  "my-post-slug"
);

export const generateStaticParams = async (folder) => {
  const posts = getPostMetadata(folder);
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
