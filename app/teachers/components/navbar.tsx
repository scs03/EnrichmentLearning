"use client";
import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
  <div className="navbar bg-primary ">
    <div className="flex-1">
      <Link className="btn btn-ghost text-xl" href='/teachers'>daisyUI</Link>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
      <ul className="menu menu-horizontal px-1">
        <li><Link href='/teachers/club'>Club</Link></li>
        <li><Link href='/'>Outdoor Area</Link></li>
        <li><Link href='/'>Student Lookup</Link></li>
      </ul>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li className="justify-between">Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar
