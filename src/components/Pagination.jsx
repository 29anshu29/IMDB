import React from 'react'

function Pagination({previous,NextPage,PageNumber}) {
  return (
    <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center '>
        <div className='px-8  '  onClick={previous}><i class="fa-solid fa-arrow-left"></i></div>
        <div>{PageNumber}</div>
        <div onClick={NextPage} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination