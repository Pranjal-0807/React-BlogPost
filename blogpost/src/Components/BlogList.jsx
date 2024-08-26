import useFetch from "../hooks/useFetch";
import Blogs from "./Blogs";

const BlogList = () => {
  const url = "https://blogpost-backend-k0pr.onrender.com/blogs";
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {loading && <section>Loading...</section>}
      {error && <section>{error.message}</section>}
      {data && <Blogs blogs={data} />}
    </div>
  );
};

export default BlogList;
