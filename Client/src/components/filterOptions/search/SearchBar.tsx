import React from 'react'

import { BsSearch } from "react-icons/bs";
import '../search.css'

export default function SearchBar() {
  return (
    <div className='searchBar'>
      <h4>Search</h4>
      <form className='search_form'>
        <input type="text" placeholder='Search here...'/>
        <button>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
