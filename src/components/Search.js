import React from 'react'
import './Search.css';

const Search = (props) => {

    const { handleChange, searchText } = props;
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="search"
        placeholder="Hunt superheroes here..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  )
}

export default Search
