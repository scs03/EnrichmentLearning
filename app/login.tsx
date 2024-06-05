"use client";
import React from 'react'
import Link from 'next/link';

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-secondary">
      <div className="card lg:card-side text-Sky-100 bg-gray-200 w-1/3 h-auto shadow-2xl  rounded-lg">
        <div className="card-body mt-20 mb-4 flex flex-col items-center">
            <h1 className = "text-5xl font-bold text-primary">Login</h1>
            <div className="form-control py-2">
              <label className="label cursor-pointer flex items-center gap-2">
                Username
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs border-primary border-2" />    
            </div>
            <div className="form-control py-2">
              <label className="label cursor-pointer flex items-center gap-2">
                Password
              </label>
              <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs border-primary border-2" />    
            </div>
            <button className="btn btn-accent mx-auto block mt-12" type="submit">
                
                    Submit
                
            </button>
        </div>
      </div>
    </div>
  )
}

export default Login
