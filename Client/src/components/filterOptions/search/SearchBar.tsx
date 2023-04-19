import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../app/store/configureStore";
import { setProductParams } from "../../../app/store/slice/catalogSlice";
import "./search.css";

export default function SearchBar() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [search, setSearch] = useState(productParams.searchTerm);
  const dispatch = useAppDispatch();

  const debouncedSearch = (e: any) => {
    setTimeout(() => {
      dispatch(setProductParams({ searchTerm: e }))
    }, 1000)
  }

  return (
    <div className="searchBar">
      <h4>Search</h4>
      <form className="search_form">
        <input
          type="text"
          placeholder="Search here..."
          value={search || ""}
          onChange={(e) => {
            setSearch(e.target.value);
            debouncedSearch(e.target.value);
          }}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
