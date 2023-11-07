import Link from "next/link";
// import getPostMetadata from "./getPostMetadata";

export default function PostPreview(props) {
  return (
    <div key={props.slug}>
      <Link href={`/help/articles/${props.slug}`}>
        <div>
          <h2>{props.title}</h2>
        </div>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  );
}
