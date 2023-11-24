interface SingleBlogProps {
  params: {
    id: number;
  };
}

const SingleBlog: React.FC<SingleBlogProps> = ({ params }) => {
  return <div>SingleBlog No {params.id}</div>;
};

export default SingleBlog;
