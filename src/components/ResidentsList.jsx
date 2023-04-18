import React, { useEffect, useState } from 'react'
import ResidentsCards from './ResidentsCards'

const ResidentsList = ({location}) => {

  const [currentPage, setCurrentPage] = useState(1)

  const arrayPages = []
  const RES_PER_PAGE = 20
  const qtyPages = Math.ceil(location?.residents.length / RES_PER_PAGE)

  for (let i = 1; i <= qtyPages; i++) {
    arrayPages.push(i)
  }
  
  const startCut = currentPage * RES_PER_PAGE - RES_PER_PAGE
  const endCut = currentPage * RES_PER_PAGE

  const residents = location?.residents

  useEffect (() => {
    setCurrentPage(1)
  }, [location])

  return (
    <>
      <section className='p-3 grid gap-7  grid-cols-[repeat(auto-fit,minmax(200px,max-content))] justify-center bg-[radial-gradient(50%_50%_at_50%_50%,#360f66_0%,rgba(54,15,102,0)_100%)] mt-6'>
        {
           residents?.slice(startCut, endCut).map(resident => <ResidentsCards key={resident} resident={resident} />) 
        }
      </section>
      <ul className='flex gap-1 justify-center mt-10 pb-10 text-white text-sm'>
        {
          arrayPages.map(page => <li onClick={()=> setCurrentPage(page)} className={`cursor-pointer p-2 ${page === currentPage && 'bg-[#61d718] text-white font-bold rounded-lg'}`} key={page}>{page}</li>)
        }
      </ul>
    </>
  )
}

export default ResidentsList