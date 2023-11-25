interface Blog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const loadBlogsData = async (): Promise<Blog[]> => {
  const res: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "force-cache",
    },
  );
  return res.json();
};

const loadSingleBlogData = async (id: string | number): Promise<Blog> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });
  return res.json();
};

export { loadBlogsData, loadSingleBlogData };
