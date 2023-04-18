import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentsCards = ({resident}) => {

const [res, setRes] = useState()

const resStatus = {
    Alive: 'bg-[#61d718]',
    Dead: 'bg-[rgb(181,53,246)]',
    unknown: 'bg-black/70'
}

useEffect(()=> {

    axios
    .get(resident)
    .then((res) => setRes(res.data))
    .catch((err) => console.log(err))

}, [])

  return (
      <article>
          <div className='relative'>
            <div className="border-2 border-[rgb(181,53,246)] rounded-sm h-[180px] overflow-hidden self-center">
              <img className='object-cover object-center' src={res?.image} alt="" />
            </div>
            
            <div className='absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 rounded flex gap-3 items-center px-3 py-1'>
                <div className={`w-4 h-4 ${resStatus[res?.status]} rounded-full`}></div>
                <span className='text-white'>{res?.status}</span>
            </div>
          </div>
          <section className='mt-2'>
              <h2 className='text-lg text-[rgb(181,53,246)] font-bold'>{res?.name}</h2>
              <ul className='text-white text-sm'>
                <li><span>Species: </span><span>{res?.species}</span></li>
                <li><span>Origin: </span><span>{res?.origin.name}</span></li>
                <li><span>On-screen appearances: </span><span>{res?.episode.length}</span></li>
                <li><span></span><span></span></li>
              </ul>
          </section>
      </article> 
  )
}

export default ResidentsCards