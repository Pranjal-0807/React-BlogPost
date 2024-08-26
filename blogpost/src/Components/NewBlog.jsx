import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();
  const postUrl = "https://blogpost-backend-k0pr.onrender.com/blogs";

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const blog = { title, summary, content, author };
    console.log(blog);

    fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        if (res.ok) {
          console.log("New Blog added");
          setPending(false);
          navigate("/blogs");
        } else {
          throw new Error("Failed to add new blog");
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        setPending(false);
      });
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
        <label>Summary</label>
        <input
          type="text"
          required
          value={summary}
          placeholder="Enter the summary here"
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        ></input>
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
