
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
//import MovieCards from "./components/MovieCards"
import WatchList from "./components/WatchList"
import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/Movies" element={<><Banner/> <Movies/></>}></Route>

    <Route path="/WatchList" element={<WatchList/>}></Route>
   
    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
