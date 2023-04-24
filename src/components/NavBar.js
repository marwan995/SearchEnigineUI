import React, { useState, useEffect, useContext } from "react";
import SearchInput from "./SearchInput";
import { SearchContext } from "../context/SearchContextProvider";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
  const { getData, data, isPending, isSuccess, resetSearch } =
    useContext(SearchContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getData(searchQuery);
  };

  useEffect(() => {
    resetSearch();
  }, []);

  useEffect(() => {
    if (!isPending) {
      if (isSuccess) {
        navigate("/results");
      } else {
        console.log("Error");
      }
    }
  }, [isPending, data]);
    return (<div className="NavBar">
        <Link to={"/"}>
        <img src="https://i.ibb.co/h9ybS36/logo2.png" alt="" />
        </Link>
        <form onSubmit={handleSubmit}>
          <SearchInput setSearchQuery={setSearchQuery} />
        </form>
    </div>);
}

export default NavBar;