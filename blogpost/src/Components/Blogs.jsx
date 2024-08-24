const Blogs = ({ blogs }) => {
  return (
    <section>
      <h1>All Blogs</h1>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
          </div>
        );
      })}
      ;
    </section>
  );
};

export default Blogs;
