import React from 'react'
import NavBar from '../components/navbar'
import ClubTable from '../components/clubTable'

const Club = () => {
  return (
    <div>
      <NavBar />
      <div className='p-5'>
        <ClubTable /> 
      </div>
    </div>
  )
}

export default Club
