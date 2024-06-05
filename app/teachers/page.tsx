import React from 'react'
import NavBar from './components/navbar'
import AdvisoryTable from './components/advisoryTable'

const TeacherHomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5 my-5">
        <p className="font-bold text-5xl">Welcome, Mrs. Smith!</p>
        <p className='font-semibold text-3xl mt-2'>Advisory</p>
      </div>
      <div className='px-5'>
        <AdvisoryTable />
      </div>
      
    </div>
  )
}

export default TeacherHomePage
