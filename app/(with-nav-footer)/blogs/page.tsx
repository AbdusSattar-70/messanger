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
    <ul className="cols-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {blogs.map(({ id, title }: Blogs) => (
        <li
          key={id}
          className=" mt-4 flex flex-col items-center justify-between space-y-2 border border-blue-500 bg-blue-200 p-4 first:sm:col-span-2 first:md:col-span-4 first:md:grid"
        >
          <h2 className="font-semibold uppercase text-stone-600">
            {id}. {title}
          </h2>
          <Link href={`blogs/${id}`} className="btn btn-primary w-full ">
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPage;
