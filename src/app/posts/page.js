import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/postPreview.jsx";

export default function BlogHomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    /*  Replacing the div once we put it into its own compoment
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <div>
          <h2>{post.title}</h2>
        </div>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
     */

    <PostPreview key={post.slug} {...post} />
    /* this key element is required when you are creating multiple elements inside the list.
    We need to tag them, so we know the ordering of them and,
    when we need to re-render something. Key must be unique */

    /* alternative way to write this
     <PostPreview 
     key={post.slug}
     title={post.title}
     subtitle={post.subtitle}
     slug={post.slug}
    date={post.date}
     /> 
      */
  ));
  return <div>{postPreviews}</div>;
}
