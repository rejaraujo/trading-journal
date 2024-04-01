import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/posts/postPreview";

export default function PostsCharts() {
  const folder = "help/articles";
  const route = "charts";

  const postMetadata = getPostMetadata("src/posts/charts");
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} folder={folder} route={route} />
  ));
  return <div>{postPreviews}</div>;
}
