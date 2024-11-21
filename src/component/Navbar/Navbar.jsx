import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Navbar = () => {


    const { pathname } = useLocation()
    

    const links = <>
        <li><Link to="/" className={`${pathname === "/"  ? "font-bold" : " "}`}>Home</Link></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        

    </>
    return (
        <div className=' bg-white'>
            <div className="navbar w-11/12 mx-auto my-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className={`btn btn-ghost text-xl font-bold ${pathname === "/"  ? "text-white ": " "}`}>Gadget Heaven</a>
                </div>
                <div className={`navbar-center hidden lg:flex ${pathname === "/"  ? "text-white btn-link   ": " "}`}>
                    <ul className="menu menu-horizontal px-1" >
                        {links}
                    </ul>
                </div>
                <div className="navbar-end  ">
                    <div className='flex gap-4 '>
                        <PiShoppingCartLight className='border rounded-full w-10 h-10 p-2 bg-white ' />
                        <FaRegHeart className='border rounded-full w-10 h-10 p-2 bg-white' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;