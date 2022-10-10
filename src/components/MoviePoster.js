import React from 'react'
import MovieCard from './MovieCard'

function MoviePoster(props) {
  return (
    <img src={props.url} alt='' width='160' height='256' onClick={props.handlePosterClick}/>
  )
}

export default MoviePoster