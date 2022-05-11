import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/appointment'>Appointment</Link>
      </li>
      <li>
        <Link to='/reviews'>Reviews</Link>
      </li>
      <li>
        <Link to='/contact'>Contact Us</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
          <div>
			  <Link to="/"className="normal-case text-xl">Doctor Portal</Link>
		  </div>
		  <div className="dropdown navbar-start">
            <label tabIndex="0" className="btn btn-ghost ml-36 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              
              className="menu dropdown-content mt-3 mr-12 p-2 shadow bg-base-100 rounded-box "
            >
				{navList}
			</ul>
          </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {navList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
