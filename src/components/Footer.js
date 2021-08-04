import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='lg:max-w-screen-xl m-auto px-6 sm:px-8 lg:px-18 font-inter font-medium text-center mb-32 mt-32'>
                
                {/* Logo */}
                <Link className='text-2xl font-bold text-gray-300 hover:text-gray-400 tracking-tighter duration-300' to='/'>
                    Decision Digital
                </Link>

                {/* Email */}
                <p className='text-xs text-gray-500 mt-4'>ruairi@decision.gg</p>
        </div>
    )
}

export default Footer
