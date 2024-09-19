import React from 'react'

function MovieCards({name, posterPath}) {
  return (
    <div className='h-[40vh] w-[180px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${posterPath})`,}}>
        <div className='text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg '>{name}</div>
    </div>
  )
}

export default MovieCards