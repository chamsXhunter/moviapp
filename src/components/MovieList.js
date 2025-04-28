import React from 'react'
import MovieCard from './MovieCard'
import Addmovie from './Addmovie'

function MovieList({movies, setmovies, filtertext, filterrate}) {
  return (
    <>
   <div className='add'><Addmovie movies={movies} setmovies={setmovies}/></div> 
    <div className='parent'>
      {movies.filter((el)=>el.name.toLowerCase().includes(filtertext.toLowerCase()) && el.rating>=filterrate).map((el)=><MovieCard el={el}/>).reverse()}
    </div>
    </>
  )
}

export default MovieList