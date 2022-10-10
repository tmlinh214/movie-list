import React from 'react'
import {genreArr} from '../data'

function MovieCard(props) {
    const [movieGenre,setMovieGenre] = React.useState(genreArr.map(item=>{
        return <option value={item} id={item} key={item}>{item}</option>
    }))
    
  return (
    <div className='card-background'>
        <div className='card'>
            <div className='card-top'>
                <img src={props.url} alt='' width='160' height='256'></img>
                <div className='card-info'>
                    <input type='text' name='title' placeholder='Movie title' value={props.title} onChange={props.handleTitleChange}></input>
                    <select id='select-genre' name='genre' onChange={props.handleGenreChange} value={props.genre}>
                        {movieGenre}
                    </select>
                    <textarea placeholder='Description' name='description' value={props.description} onChange={props.handleDescriptionChange}></textarea>
                </div>
            </div>
            <div className='card-bottom'>
                <button onClick={props.handleDelete}>Delete</button>
                <button onClick={props.handleCancel}>Cancel</button>
                <button onClick={props.handleSave}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default MovieCard