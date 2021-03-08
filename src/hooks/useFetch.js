import React, { useEffect, useRef, useState } from "react";

export const useFetch = async (url) => {
  const cache = useRef({});

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data; // set response in cache;
        setData(data);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};
