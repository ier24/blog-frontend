import layoutStyle from "../../layout.module.css";

interface JsonPlaceholder {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={layoutStyle.container}>
      <h1>This Page ID: {params.id} - This is Each Post Page!</h1>
      My Post: {params.id}
    </div>
  );
}

/**
 * todo: read this
 * https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  return posts.map((post: JsonPlaceholder) => ({
    id: post.id.toString(),
  }));
}
