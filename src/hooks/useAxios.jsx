import { useRef, useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
    });
    (async () => {
      const { data } = await axios.get(url);
      if (isMounted.current) {
        setState({
          data: data,
          loading: false,
        });
      }
      isMounted.current = false;
    })();
  }, [url]);

  return state;
};
