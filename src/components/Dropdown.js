import React from 'react'
import { Link } from 'react-router-dom';
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'animation-bounce absolute w-full flex flex-col text-right px-3 py-2 bg-white rounded-b-xl text-gray-500 font-inter font-medium shadow-2xl' : 'hidden'} onClick={toggle}>
            
            <Link className='p-4 my-1 rounded-lg hover:bg-gray-100' to='/work'>Home</Link>

            <Link className='p-4 my-1 rounded-lg hover:bg-gray-100' to='/work'>Work</Link>
            
            <Link className='p-4 my-1 rounded-lg bg-gray-100 text-gray-600 border hover:text-gray-800 hover:border-gray-300' to='/contact'>Get started now</Link>

            <div className='inline-flex my-3 mr-1 justify-end'>
                <a className='p-3 text-xl text-gray-400 hover:text-gray-600' href='/'>
                    <SiFacebook/>
                </a>

                <a className='p-3 mx-12 text-xl text-gray-400 hover:text-gray-600' href='/'>
                    <SiInstagram/>
                </a>

                <a className='p-3 text-xl text-gray-400 hover:text-gray-600' href='/'>
                    <SiLinkedin/>
                </a>
            </div>

        </div>
    )
}

export default Dropdown
