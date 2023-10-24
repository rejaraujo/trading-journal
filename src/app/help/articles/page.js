//  Master Page.

"use client";

import useSWR from "swr";
import Link from "next/link";
// import { use } from "react";

async function getCharacters() {
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}

//client side
const fetcher = (path) =>
  fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());

export default function ClientPage() {
  const characters = useSWR("api/character", fetcher);
  return (
    <div>
      <h2>Client Fetching</h2>
      {characters?.data?.results?.map((c) => (
        <ul key={c.id}>
          <Link
            href="/help/articles/[slug]"
            as={`/help/articles/${c.name.replace(/\s+/g, "-").toLowerCase()}`}>
            <li>{c.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

//Static Props
// export default function StaticProps() {
//   const allCharacters = use(getCharacters());

//   return (
//     <div>
//       <h2>getStaticProps</h2>
//       {allCharacters?.results.map((c) => (
//         <ul key={c.id}>
//           <Link
//             href="/help/articles/[slug]"
//             as={`/help/articles/${c.name.replace(/\s+/g, "-").toLowerCase()}`}>
//             <li>{c.name}</li>
//           </Link>
//         </ul>
//       ))}
//     </div>
//   );
// }

// using fetchData()
// export default async function fetchData() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   return (
//     <div>
//       {data.map((post) => (
//         <ul key={post.id}>
//           <Link
//             href={`/articles/${post.title}`.replace(/\s+/g, " ").toLowerCase()}>
//             <li>{post.title}</li>
//           </Link>
//         </ul>
//       ))}
//     </div>
//   );
// }
