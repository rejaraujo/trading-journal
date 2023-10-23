import Link from "next/link";
import { use } from "react";

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

//  another alternative would be the getCharacters()
async function getCaracters() {
  console.log("it pass here");
  return await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
}

export default function StaticProps() {
  const allCaracters = use(getCaracters());
  console.log(allCaracters);
  return (
    <div>
      {allCaracters.map((post) => (
        <ul key={post.id}>
          <Link
            href={`/articles/${post.title}`.replace(/\s+/g, " ").toLowerCase()}>
            <li>{post.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}
