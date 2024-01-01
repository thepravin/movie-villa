import React, { useEffect, useState } from "react";
import AppContext from "./Contex";
import API_URL from "./API";

export default function AppProvider({ children }) {
  const [isloading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("avengers");

  // get movies
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: "",
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // debounce function creating
    let timer = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider value={{ isloading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
}
