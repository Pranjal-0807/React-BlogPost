import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  return (
    <section>
      <h1>All Blogs</h1>
      {blogs.map((blog) => {
        const url = `/blogs/${blog.id}`;
        return (
          <div key={blog.id}>
            <Link to={url}>
              <h2>{blog.title}</h2>
            </Link>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Blogs;
