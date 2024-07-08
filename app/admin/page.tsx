import React from 'react'
import CreateAcc from './createAcc'

const page = () => {
  return (
    <div>
        <div className='bg-primary h-20'>
            <h1 className='text-4xl text-black p-5'>Admin Page</h1>
        </div>
        <CreateAcc />
    </div>
  )
}

export default page
