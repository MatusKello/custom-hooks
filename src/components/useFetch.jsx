import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setLoading(false);
      setData(fetchedData);
    };
    getData();
  }, [url]);

  return { data: data, loading: loading };
};

export default useFetch;
