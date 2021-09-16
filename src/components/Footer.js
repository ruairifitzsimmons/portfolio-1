import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <div className='lg:max-w-screen-xl m-auto px-6 sm:px-8 lg:px-18 font-inter font-medium text-center mb-32 mt-32'>
                
                {/* Logo */}
                <img src={logo} className='h-10 m-auto' alt=''/>

                {/* Email */}
                <p className='text-xs text-gray-500 mt-4'>ruairi@decisionstudio.co</p>
        </div>
    )
}

export default Footer
