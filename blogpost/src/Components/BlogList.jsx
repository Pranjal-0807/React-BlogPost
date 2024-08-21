const BlogList = ({ blogs }) => {
  function printBlogs() {
    return blogs.map((blog) => {
      return (
        <section>
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
          </div>
        </section>
      );
    });
  }
  return <>{printBlogs()}</>;
};

export default BlogList;
