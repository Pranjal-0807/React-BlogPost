import AppRouter from "./routes/AppRouter";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3099/blogs";

  const { data, loading, error } = useFetch(url);

  return (
    <>
      <div>
        {loading && <section>Loading...</section>}
        {error && <section>{error.message}</section>}
        {data && <AppRouter blogs={data} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
