import React from 'react';
import Link from 'next/link';

const NavbarStudent = () => {
  return (
    <div className="navbar bg-primary text-primary-content p-4 relative z-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">NameOfWebsite</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-accent rounded-box w-52 z-50">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><Link href='/'>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarStudent;
