import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const url = "http://localhost:3099/blogs/" + id;
  const { data, loading, error } = useFetch(url);

  const handleDelete = () => {
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("Blog deleted");
        navigate("/blogs");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <section>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <p>{data.author}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </section>
  );
};

export default BlogDetail;
