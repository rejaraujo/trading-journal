// Master Detail Pattern

async function getCharacters() {
  return await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
}

export async function generateStaticParams() {
  const articlePost = await getCharacters();

  return articlePost.map((post) => ({
    slug: post.title.toLowerCase(),
  }));
}

export default function Page({ params }) {
  return (
    <>
      <h1>The character name is: {params.slug}</h1>
    </>
  );
}
