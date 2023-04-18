import { useEffect, useState } from 'react'
import './App.css'
import getRandomDimension from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentsList from './components/ResidentsList'
import Search from './components/Search'

function App() {
  const [location, setLocation] = useState()

  useEffect( ()=> {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    
    axios
    .get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [])

   const handleSearch = (searchResult) => {
    // update the location state based on the search term
    setLocation(searchResult)
  }

  return (
    <div className="App bg-[#030328] min-h-screen">
      <div className='container mx-auto'>
        <div className='w-[200px] mx-auto pt-7'>
          <img src="/img/rm-logo.png" alt="" />
        </div>
        <h1 className='text-center text-white mt-4'>Wellcome to Our Universe!</h1>
        <Search onSearch={handleSearch} />
        <Location location={location} />
        <ResidentsList location={location} />
      </div>
      
    </div>
  )
}

export default App
