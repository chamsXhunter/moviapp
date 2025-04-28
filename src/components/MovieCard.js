import React from 'react'
import ReactStars from 'react-stars'
function MovieCard({el}) {
  return (
    <div className='mycard'>
      <img src={el.posterurl} />
      <h5>{el.name}</h5>
      <p>{el.description}</p>
      <ReactStars
  count={5}

  size={24}
  color2={'red'}
  edit={false}
  value={el.rating}
  />
    </div>
  )
}

export default MovieCard