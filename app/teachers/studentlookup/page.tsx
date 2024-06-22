import React from 'react'
import NavBar from '../components/navbar'
import Table from './components/table'
const page = () => {
  return (
    <div className=''>
      <NavBar/>
        <div className='p-4'>
          <Table/>
        </div>
    </div>
  )
}

export default page