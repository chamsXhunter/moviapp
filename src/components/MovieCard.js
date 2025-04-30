import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ReactStars from 'react-stars'
function MovieCard({el}) {
  return (
    <Link to={`/trailer/${el.name}`}>
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
    </Link>
  )
}

export default MovieCard