import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

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
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);
  }, []);

  return { data };
};

export default useFetch;
