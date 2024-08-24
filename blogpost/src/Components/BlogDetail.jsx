import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();

  const url = "http://localhost:3099/blogs/" + id;
  const { data, loading, error } = useFetch(url);

  return (
    <section>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <p>{data.author}</p>
        </div>
      )}
    </section>
  );
};

export default BlogDetail;
