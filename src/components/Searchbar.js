import React from 'react'

function Searchbar(props) {
  return (
    <div>
        <input type='text' id='searchInput' placeholder='Start searching for a movie' name='search' onChange={props.handleSearch}></input>
        <button onClick={props.handleAddButton}>Add movie</button>
    </div>
  )
}

export default Searchbar