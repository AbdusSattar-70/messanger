import { loadBlogsData, loadSingleBlogData } from "@/utils/loadBlogsData";
import Link from "next/link";

interface SingleBlogProps {
  params: {
    id: string;
  };
}

// for static generate or build time generate(SSG) while dynamic routes generate SSR
export const generateMetadata = async ({ params }: SingleBlogProps) => {
  const { title } = await loadSingleBlogData(params.id);

  return {
    title: title,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogsData();

  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
};

const SingleBlog: React.FC<SingleBlogProps> = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);
  return (
    <ul>
      <li className="mt-4 space-y-2 border border-blue-500 bg-blue-200 p-4">
        <h2 className="font-semibold uppercase text-stone-600">
          {id}. {title}
        </h2>
        <p>{body}</p>
        <Link href={"/blogs"} className="btn btn-primary">
          Back to Blogs
        </Link>
      </li>
    </ul>
  );
};

export default SingleBlog;
