"use client";

import { useState } from "react";

import { searchByName } from "@/commons/services/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoundBox from "./FoundBox";

const SearchBox = ({ selectData }) => {
  const [searchResult, setSearchResult] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements[0].value;
    if (searchQuery !== "") {
      const data = await searchByName(searchQuery);
      setSearchResult({
        ...data,
        searchQuery,
      });
    }
  };

  return (
    <div className="space-y-2">
      <form className="relative" onSubmit={submitHandler}>
        <input
          className="w-full px-4 py-2 border border-sky-200 rounded focus:outline-0 focus:ring-1"
          type="text"
        />
        <p className="absolute right-4 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </p>
      </form>

      {searchResult && (
        <FoundBox searchResult={searchResult} selectData={selectData} />
      )}
    </div>
  );
};

export default SearchBox;
