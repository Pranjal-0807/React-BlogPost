const BlogList = ({ blogs }) => {
  function printBlogs() {
    return blogs.map((blog) => {
      return (
        <>
          <section style={{ borderLeft: "3px solid" }}>
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p>{blog.author}</p>
            </div>
          </section>
        </>
      );
    });
  }
  return (
    <section>
      <h2 style={{ marginLeft: "8%" }}>All Blogs</h2>
      {printBlogs()}
    </section>
  );
};

export default BlogList;
