import React from 'react'


function Searchbar(props) {

  return (
      <div className='field has-addons column is-6 mx-auto mt-4'>
        <p className='control'>
          <span className='select'>
            <select id='search-genre' name='search' onChange={props.handleGenreSearch} value={props.genre}>
              <option value='All genres'>All genres</option>
              {props.movieGenre}
            </select>
          </span>
        </p>
        <p className='control is-expanded'>
          <input className='input ' type='text' id='searchInput' placeholder='Start searching for a movie' name='search' onChange={props.handleTitleSearch}></input>
        </p>
        <button onClick={props.handleAddButton} className='button is-primary'>Add movie</button>
      </div>
    
    
  )
}

export default Searchbar