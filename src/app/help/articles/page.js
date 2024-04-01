import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/posts/postPreview";

export default function BlogHomePage() {
  const folder = "help";
  const route = "articles";

  const postMetadata = getPostMetadata("src/posts/charts");
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} folder={folder} route={route} />
  ));
  return <div>{postPreviews}</div>;
}
