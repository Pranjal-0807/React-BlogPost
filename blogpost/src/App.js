import AppRouter from "./routes/AppRouter";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";

function App() {
  const [blogs, setBlogs] = useState(null);
  const url = "http://localhost:3099/blogs";

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log("Fetch is successful");
          if (res.ok) { 
            return res.json();
          } else {
            throw Error("Error fetching data from API");
          }
        })
        .then((blogs) => {
          console.log("JSON parsing is successful");
          setBlogs(blogs);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);
  }, []);

  return (
    <>
      <AppRouter blogs={blogs} />
      <Footer />
    </>
  );
}

export default App;
