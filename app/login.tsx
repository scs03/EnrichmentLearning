"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  
  return (
    // <div className="min-h-screen flex justify-center items-center bg-base-100">
    //   <div className="card lg:card-side text-Sky-100 bg-accent w-1/3 h-auto shadow-2xl  rounded-lg">
    //     <div className="card-body mt-20 mb-4 flex flex-col items-center">
    //         <h1 className = "text-5xl font-bold text-primary">Login</h1>
    //         <div className="form-control py-2">
    //           <label className="label cursor-pointer flex items-center gap-2">
    //             Username
    //           </label>
    //           <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs border-primary border-2" />    
    //         </div>
    //         <div className="form-control py-2">
    //           <label className="label cursor-pointer flex items-center gap-2">
    //             Password
    //           </label>
    //           <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs border-primary border-2" />    
    //         </div>
    //         <button className="btn btn-accent mx-auto block mt-12" type="submit">
                
    //                 Submit
                
    //         </button>
    //     </div>
    //   </div>
    // </div>

    //

    
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary  to-base-100">
      <header className="h-24 bg-primary bg-repeat">
        {/* Top design as background */}
        <h1 className='pl-5 font-bold flex text-4xl items-center min-h-full'>FISD. Enrichment Learning</h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-bottom bg-repeat-x" style={{ backgroundImage: "url('/bottom-pattern.svg')" }}>
        <div className=" w-96 h-96 text-center -mt-32 p-7 rounded-xl border-2 border-base-100 bg-base-100 drop-shadow-2xl">
          <h1 className="text-4xl  font-bold">SIGN IN</h1>
          {/* Sign in form */}
          <form className="mt-5">
            <input
              type="text"
              placeholder="Username"
              className=" border-primary p-2 rounded w-full max-w-md border-2 "
            />
          </form>
          <form className='mt-5'>
            <input type="password"
            placeholder='Password'
            className=' border-primary p-2 rounded w-full max-w-md border-2' 
            />
          </form>
            <Link className="btn border-2  mt-8 w-full p-2 bg-primary border-primary text-white rounded  hover:text-black hover:bg-transparent" href='/teachers'>Login</Link>
        </div>
      </main>
    </div>
  )
}

export default Login
