import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/postPreview";

export default function PostsExportingData() {
  const folder = "help/articles";
  const route = "exporting";

  const postMetadata = getPostMetadata("src/posts/exporting");
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} folder={folder} route={route} />
  ));
  return <div>{postPreviews}</div>;
}
