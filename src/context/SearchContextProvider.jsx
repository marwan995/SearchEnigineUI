import React, { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

export default function SearchContextProvider(props) {
  const [data, setBlogs] = useState([]);
  const [isPending, setPending] = useState(true);
  const [isSuccess, setSuccess] = useState(false);

  const getData = async (query) => {
    resetSearch();
    try {
      const res = await axios.get(`http://localhost:8080/search/${query}`);
      setBlogs(res.data);
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
    }
    setPending(false);
  };

  const resetSearch = () => {
    setPending(true);
    setSuccess(false);
  };

  return (
    <SearchContext.Provider value={{ getData, data, isPending, isSuccess, resetSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}
