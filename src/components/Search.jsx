import axios from 'axios'
import React from 'react'

const Search = ({onSearch}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const valueLocation = e.target.inputSearch.value
        
        const URL = `https://rickandmortyapi.com/api/location/${valueLocation}`

        axios
        .get(URL)
        .then(res => onSearch(res.data))
        .catch(err => console.log(err))
    }

  return (
    <form onSubmit={handleSubmit} className='bg-[rgb(181,53,246)] mt-6 rounded-full p-2 max-w-[350px] mx-auto text-white'>
        <div className=' flex justify-around items-center'>
            <input id="inputSearch" placeholder="Type a location id..." type="text" className='bg-[rgba(0,0,0,0)] placeholder:text-white focus:text-white'/>
            <button className='flex gap-2'><span className="material-symbols-outlined ">search</span></button>
        </div>
    </form>
  )
}

export default Search