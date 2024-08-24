import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortController = new AbortController();

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
        .then((data) => {
          console.log("JSON parsing is successful");
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch is aborted");
          } else {
            setLoading(false);
            setError(err);
          }
          console.log("Error fetching data from API");
        });
    }, 2000);

    return () => {
      abortController.abort();
      console.log(" useFetch() Cleanup function is called");
    };
  }, []);

  return { data, loading, error };
};

export default useFetch;
