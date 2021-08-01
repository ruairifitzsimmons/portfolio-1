import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logo Blue - Small.png';

const Navbar = ({toggle}) => {
  return (
    <nav className='lg:max-w-screen-xl m-auto px-4 sm:px-8 lg:px-18 flex justify-between items-center h-20 bg-transparent border-b text-base font-inter font-medium' 
    role='navigation'>

      {/* Logo & name */}
      <Link to="/">
        <div className='inline-flex'>
          <img src={logo} className='w-10 h-10' alt=''/>
          <h1 className='text-2xl font-bold text-gray-800 font-inter mt-2 ml-2 tracking-tighter'>Decision Digital</h1>
        </div>
      </Link>

      {/* Hamburger menu */}
      <div className='cursor-pointer md:hidden' onClick={toggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>

      {/* Menu items */}
      <div className='md:block font-normal text-gray-500 hidden'>
        <Link className='p-4 hover:text-black' to='/work'>
          Work
        </Link>
        <Link className='p-4 hover:text-black' to='/contact'>
          Contact
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
