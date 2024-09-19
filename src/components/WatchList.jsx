import React from 'react'

function WatchList() {
  return (
    <div>
      <>
        {/* filter */}


        {/* Search field */}
        <div className='flex justify-center my-10 px-4'>
          <input placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600x'></input>

        </div>
        {/* Watch Table */}
        
        <div>
          <table className='w-full text-center'>
            <thead className='border border-gray-200 text-center rounded-lg bg-gray-200'>
              <tr>
                <th className=' flex justify-center '>Name</th>
                <th>Rating</th>
                <th>Popularity</th>
                <th>Genre</th>
                <th>Delete Movie</th>
              </tr>

            </thead>
            <tbody>
              <tr className='border-b-2x'>
                <td className='flex items-center px-4 py-6'>
                  <img className='h-[6rem] w-[10rem]' src='https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg'/>
                  <div className='mx-10'>Movie Title</div>
                </td>
                <td> 10</td>
                <td>10</td>
                <td>Action</td>
                <td className='text-red-500'>Delete</td>
              </tr>

            </tbody>

          </table>

        </div>

      </>






    </div>
  )
}

export default WatchList