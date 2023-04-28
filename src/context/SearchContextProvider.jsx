import React, { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

export default function SearchContextProvider(props) {
  const [data, setBlogs] = useState([]);
  const [isPending, setPending] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [startTime,setStartTime]=useState(0);
  const [endTime,setendTime]=useState(0);

  const getData = async (query) => {
    resetSearch();
    try {
      setStartTime(new Date());
      const res = await axios.get(`http://localhost:8080/search?q=${query}`);
      setBlogs(res.data);
      localStorage.setItem("lastQuery", JSON.stringify(res.data));
      setSuccess(true);
      setendTime(new Date());
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
    <SearchContext.Provider value={{startTime,endTime ,getData, data, isPending, isSuccess, resetSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}
