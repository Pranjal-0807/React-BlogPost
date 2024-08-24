import AppRouter from "./routes/AppRouter";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3099/blogs";

  const { data } = useFetch(url);

  return (
    <>
      <AppRouter blogs={data} />
      <Footer />
    </>
  );
}

export default App;
