import React from 'react'
import Logo from '../MovieLogo.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex space-x-20 items-center pl-4 font-sans'>
        <img className='w-12' src={Logo}/>
       <div> <Link to="/Movies" className='text-blue-500 text-2xl font-bold hover:italic w duration:300'>Movie</Link>
       </div>
       <div>
        <Link to='/WatchList'className='text-blue-500 text-2xl font-bold hover:italic duration:300 '>WatchList</Link>
        </div>
    </div>
  )
}

export default Navbar