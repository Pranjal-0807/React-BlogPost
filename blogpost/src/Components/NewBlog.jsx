import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [sector, setSector] = useState("Health");
  const [author, setAuthor] = useState("");
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const blog = { title, content, sector, author };
    console.log(blog);
    setTimeout(() => {
      fetch("http://localhost:3099/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then((res) => {
          console.log("New Blog added");
          setPending(false);
          navigate("/blogs");
        })
        .catch((err) => {
          console.log("Error: ", err);
          setPending(false);
        });
    }, 5000);
  };

  return (
    <section>
      <h2>Create a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          placeholder="Enter your blog title here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br /> <br />
        <label>Content</label>
        <textarea
          required
          value={content}
          placeholder="Enter your blog content here"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <br /> <br />
        <label>Sector</label>
        <select
          required
          value={sector}
          onChange={(e) => {
            setSector(e.target.value);
          }}
        >
          <option value="Health">Health</option>
          <option value="Finance">Finance</option>
        </select>
        <br /> <br />
        <label>Author</label>
        <input
          type="text"
          required
          placeholder="Enter the author name"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <br /> <br />
        {!pending && <button>Add Blog</button>}
        {pending && <button disabled>Saving post please wait!</button>}
      </form>
    </section>
  );
};

export default NewBlog;
