import { loadBlogsData } from "@/utils/loadBlogsData";
import Link from "next/link";

export interface Blogs {
  id: string | number;
  title: string;
  body: string;
}

const BlogPage = async () => {
  const blogs = await loadBlogsData();
  return (
    <ul>
      {blogs.map(({ id, title, body }: Blogs) => (
        <li
          key={id}
          className="mt-4 space-y-2 border border-blue-500 bg-blue-200 p-4"
        >
          <h2 className="font-semibold uppercase text-stone-600">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link href={`blogs/${id}`} className="btn btn-primary">
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPage;
