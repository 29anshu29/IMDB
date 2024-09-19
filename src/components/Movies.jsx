import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import axios from 'axios'
import Pagination from './Pagination'



function Movies() {
  const [movies, setMovies] = useState([])
  const[page_n,setPage_n]=useState(1)

  function handleNext(){
    return setPage_n(page_n + 1)
  }

  // function handlePrevs(){
  //   setPage_n(page_n -1)
  // }
  // const handleNext=()=>{
  //   setPage_n(page_n +1)
  // }

  const handlePrevs=()=>{
    if (page_n ===1 ){
      setPage_n(page_n)
    }else{setPage_n(page_n -1)}
   
    
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c2d0cbd1d68a95236176fb2801d5c482&language=en-US&page=${page_n}`).then(
      function (res) {
        console.log(res.data.results);
        setMovies(res.data.results)
      }
    )

  }, [page_n])

  return (
    <div>
      <div className='text-2xl w-full font-bold text-center m-5text-2xl'>
        <h1 className='py-4'>Treanding Movies</h1>
      </div>
      <div className='flex justify-evenly flex-wrap gap-8'>
        {movies.map((movieObj) => {
          return <MovieCards name={movieObj.title} posterPath={movieObj.poster_path}/>
        }
        )}

      </div>
        <Pagination NextPage={handleNext} previous={handlePrevs}  PageNumber={page_n}/>
    </div>
  )
}

export default Movies