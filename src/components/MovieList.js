import React from 'react'
import MovieCard from './MovieCard'
import MoviePoster from './MoviePoster'
import {handleCancel} from '../utils'

function MovieList(props) {
    
    
    let movieListHTML= props.list.map(item=>{
        return <div id={item.title.toLowerCase()} key={item.id}><MoviePoster url={item.imageUrl} handlePosterClick={()=>handlePosterClick(item)}/></div>
    })
    
    
    function handlePosterClick(info){
        document.getElementById('movie-info').classList.remove('hidden')
       props.setItem(info)
    }
    function handleDelete(title){
        props.setList(prevList => prevList.filter(movie=> movie.title !== title))
        document.getElementById('movie-info').classList.add('hidden')
    }
    function handleSave(id){
        document.getElementById('movie-info').classList.add('hidden')
        props.setList(prevList => {
            return prevList.map(movie => {
               return movie.id === id ? props.item : movie
            })
        })
    }
  return (
    <div>
        {movieListHTML}
        <div id='movie-info' className='hidden'>
            <MovieCard title={props.item.title} url={props.item.imageUrl} description={props.item.description} genre={props.item.genre} handleSave={()=>handleSave(props.item.id)} handleCancel={()=>handleCancel('movie-info')} handleDelete={()=>handleDelete(props.item.title)} handleDescriptionChange={props.handleDescriptionChange} handleTitleChange={props.handleTitleChange} handleGenreChange={props.handleGenreChange}/>
        </div>
    </div>
  )
}

export default MovieList