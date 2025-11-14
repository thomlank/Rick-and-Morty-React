import { useState,useEffect } from 'react'
import { Outlet} from "react-router-dom";
import './App.css'
import NavBar from './components/Nav';


function App() {
  const [fav, setFav]=useState([]);
  // const [isFav, setIsFav] = useState(false);
  
  const addToFavs = (charData) => setFav([...fav,charData])
  const removeFromFavs = (charData) => setFav(fav.filter(f =>f.id !== charData.id))
  const isFav = (charData) => {return fav.includes(charData)}
  

  const glorbus = {addToFavs,removeFromFavs,isFav,fav}
  // useEffect(()=>{
  //   console.log(fav)
  // },[fav]);
  return (
    <div className='bod'>
      <div className='navContain'>
        <NavBar/>
      </div>
      <div className='pageContain'>
        <Outlet
        context={glorbus}/> 
      </div>
    </div>
  )
}

export default App
