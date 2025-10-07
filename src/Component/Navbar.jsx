import React from 'react';
import navLogo from '../assets/hero-nav.png'
import { Link, NavLink } from 'react-router';
import { Github } from 'lucide-react';
import Button from '../assets/button.png'
const Navbar = () => {
    return (
        <div className='inter'>
            <div className="md:max-w-11/12 md:mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-semibold'><NavLink to='/'>Home</NavLink></li>
                            <li className='font-semibold'><NavLink to='/apps'>Apps</NavLink></li>
                            <li className='font-semibold'><NavLink to='/installation'>Installation</NavLink></li>
                        </ul>
                    </div>
                    <a href='/' className="text-xl"><img src={navLogo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/apps'>Apps</NavLink></li>
                        <li><NavLink to='/installation'>Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/Adi-ops16" className="text-white gap-1 text-sm px-3 py-1 rounded-sm flex items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2]"><Github className='w-4 h-4 mr-1 rounded-full bg-white text-[#9F62F2] stroke-3'></Github> Contribute </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;