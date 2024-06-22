import React from 'react'
import NavBar from '../components/navbar'
import OutdoorAreaTable from '../components/outdoorAreaTable'
const OutdoorAreaHome = () => {
  return (
    <div>
        <NavBar />
        <div className="p-5 mx-5">
            <OutdoorAreaTable />
        </div>
       
    </div>
  )
}

export default OutdoorAreaHome
