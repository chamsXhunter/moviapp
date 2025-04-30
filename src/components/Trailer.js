import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
function Trailer({movies}) {
    const parames=useParams();
    const movie =movies.filter((el)=>el.name==parames.name)[0]
  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.posterurl}/>
      <p>{movie.description}</p>
    </div>
  )
}

export default Trailer
