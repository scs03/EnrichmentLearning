"use client";
import React from 'react'
import Link from 'next/link';

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
    <div className="flex flex-col min-h-screen">
      <header className="h-24 bg-primary bg-repeat">
        {/* Top design as background */}
      </header>
      <main className="flex-grow flex items-center justify-center bg-bottom bg-repeat-x" style={{ backgroundImage: "url('/bottom-pattern.svg')" }}>
        <div className=" w-96 h-96 text-center -mt-32 border p-7 rounded-xl border-1.75 hover:border-secondary ">
          <h1 className="text-4xl font-bold">Sign In</h1>
          {/* Sign in form */}
          <form className="mt-5">
            <input
              type="text"
              placeholder="Username"
              className="border p-2 rounded w-full max-w-md"
            />
          </form>
          <form className='mt-5'>
            <input type="password"
            placeholder='Password'
            className='border p-2 rounded w-full max-w-md' 
            />
          </form>
            <button className="mt-4 min-w-20 p-2 bg-primary text-white rounded">
              Next
            </button>
        </div>
      </main>
    </div>
  )
}

export default Login
