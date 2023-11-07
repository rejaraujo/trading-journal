import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/postPreview";

export default function BlogHomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // <div key={post.slug}>
    //   <Link href={`/help/articles/${post.slug}`}>
    //     <div>
    //       <h2>{post.title}</h2>
    //     </div>
    //   </Link>
    //   <p>{post.subtitle}</p>
    //   <p>{post.date}</p>
    // </div>
    <PostPreview key={post.slug} {...post} />
  ));
  return <div>{postPreviews}</div>;
}
