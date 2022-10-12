import React from 'react'


function MoviePoster(props) {
  return (
    <figure className='image is-2by3'>
      <img src={props.url} alt='' onClick={props.handlePosterClick}/>
    </figure>
    
  )
}

export default MoviePoster