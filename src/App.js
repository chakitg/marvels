import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  const [superheroData, setSuperheroData] = useState([]);

  useEffect(async () => {
    if (searchText.length > 0) {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`
      );
      const data = await response.json();
      console.log('searchSuperHeroes -> data', data);

      setSuperheroData(data.results);
    } else {
      setSuperheroData([]);
    }
  }, [searchText]);

  function handleChange(e) {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  }

  return (
    <div className="App">
      <Search searchText={searchText} handleChange={handleChange} />
      <SearchResults className="search-results" superheroData={superheroData} />
    </div>
  );
}

export default App;

