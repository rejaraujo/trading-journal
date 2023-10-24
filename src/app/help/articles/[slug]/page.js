// Master Detail Pattern

async function getCharacters() {
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}

export async function generateStaticParams() {
  const characters = await getCharacters();

  return characters?.results.map((c) => ({
    slug: c.name.toLowerCase(),
  }));
}

export default function Page({ params }) {
  return (
    <>
      <h1>The character name is: {params.slug}</h1>
    </>
  );
}
