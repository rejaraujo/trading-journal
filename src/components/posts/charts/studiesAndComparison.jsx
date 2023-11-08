import ReactMarkdown from "react-markdown";
import { Image } from "next/image";
import matter from "gray-matter";

// Import your Markdown file
import markdownContent from "@/posts/charts/studies.md";

const MarkdownWithImages = () => {
  const { data, content } = matter(markdownContent);

  const renderers = {
    image: ({ src, alt }) => (
      <Image
        src={`/images/posts/charts/${src}`}
        alt={alt}
        width={800} // Set the width as per your design
        height={600} // Set the height as per your design
      />
    ),
  };

  return (
    <div className="markdown-content">
      <h1>{data.title}</h1>
      <ReactMarkdown
        renderers={renderers}
        source={content}
        escapeHtml={false}
      />
    </div>
  );
};

export default MarkdownWithImages;
