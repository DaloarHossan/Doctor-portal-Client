import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handelSignOut=()=>{
    signOut(auth);
  }
  const navList = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/appointment'>Appointment</NavLink>
      </li>
      <li>
        <NavLink to='/reviews'>Reviews</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact Us</NavLink>
      </li>
      {
        user ? <li>
        <button onClick={handelSignOut} className="btn-ghost"to='/login'>Signout</button>
      </li>:<li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      }
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
