import React from 'react'

const Location = ({location}) => {

  return (
    <section className='text-white mt-6 max-w-[350px] mx-auto'>
        <h1 className='text-lg font-bold text-center'>{location?.name}</h1>
        <ul className='text-sm flex justify-around mt-4'>
            <li>Type: {location?.type}</li>
            <li>{location?.dimension}</li>
            <li>Residents: {location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default Location