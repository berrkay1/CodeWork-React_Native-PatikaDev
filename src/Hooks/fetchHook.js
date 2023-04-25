import axios from "axios";
import { useEffect, useState } from "react";

const fetchHook = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data: resData } = await axios.get(url);
      setData(resData);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
    
  };
};

export default fetchHook;
