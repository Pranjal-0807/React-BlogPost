import AppRouter from "./routes/AppRouter";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import React, { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog Title 1",
      content: "Blog Content 1",
      author: "Author Name 1",
    },
    {
      id: 2,
      title: "Blog Title 2",
      content: "Blog Content 2",
      author: "Author Name 2",
    },
    {
      id: 3,
      title: "Blog Title 3",
      content: "Blog Content 3",
      author: "Author Name 3",
    },
  ]);
  return (
    <>
      <AppRouter />
      <BlogList blogs={blogs} />
      <Footer />
    </>
  );
}

export default App;
