import React from 'react'
import ItemCard from './components/ItemCard';

const SearchResults = (props) => {
    const { superheroData = [] } = props;

  return (
    <div className='search-results'>
      {/* <ItemCard /> */}
      {superheroData.map((superhero) => (
        <ItemCard data={superhero} />
      ))}
    </div>
  )
}

export default SearchResults
