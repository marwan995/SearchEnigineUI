import React, { useState, useEffect, useContext } from "react";
import SearchInput from "./SearchInput";
import { SearchContext } from "../context/SearchContextProvider";
import { useNavigate } from "react-router";

const Search = ({ startSearchAnimation, stopSearchAnimation }) => {
  const navigate = useNavigate();
  const { getData, data, isPending, isSuccess, resetSearch ,setPending} =
    useContext(SearchContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    startSearchAnimation();
    getData(searchQuery);
  };

  useEffect(() => {
    resetSearch();
  }, []);

  useEffect(() => {
    if (!isPending) {
      stopSearchAnimation();
      if (isSuccess) {
        setPending(false);
        navigate("/results");
      } else {
        console.log("Error");
      }
    }
  }, [isPending, data]);

  return (
    <div className="Search">
      <img src="logo.png" alt="" />
      <div>
        <h1>Discoverr</h1>
        <h3>
          Welcome to Discoverr, a powerful search engine that helps you find
          what you're looking for quickly and easily. Our search engine uses
          advanced web crawling and indexing technology to discover and organize
          the most relevant content on the internet ,so you can find the
          information you need without having to sift through pages of
          irrelevant results. Our crawler continually scans the web for new and
          updated content, while our indexer analyzes and categorizes this
          information to make it easily searchable.
        </h3>
        <form onSubmit={handleSubmit}>
          <SearchInput setSearchQuery={setSearchQuery} />
        </form>
      </div>
    </div>
  );
};

export default Search;
