import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='lg:max-w-screen-xl mt-14 px-6 sm:px-8 lg:px-18 bg-white flex flex-col items-start justify-center m-auto'>

            {/* Alert */}
            <div className='inline-flex text-left'>
                {/* Alert Box */}
                <div className='text-sm font-medium border border-green-300 bg-green-100 rounded-md px-2 text-green-500 self-center'>NEW</div>
                {/* Button */}
                <Link to='/contact'>
                    <button className='inline-flex ml-2 text-lg font-medium text-gray-800 hover:text-gray-500 duration-100'>
                        <span className='border-b-2'>
                        The Social Media Accelerator
                        </span>
                        {/* Arrow */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </Link>
            </div>

            {/* Header */}
            <h1 className='main-heading'>
                Future-proof your brand through design.
            </h1>

            {/* Description */}
            <p className='description'>
                A design agency with creative spark. We focus on making your business stand out with a <span className='text-black font-medium'>strong</span> brand identity, <span className='text-black font-medium'>enticing</span> social media content & <span className='text-black font-medium'>effective</span> web design.
            </p>

            {/* Buttons */}
            <div className='mt-10 md:inline-flex w-full text-lg'>
                {/* Button 1 */}
                <button className='button-main button-shadow mr-2 w-full sm:w-auto'>
                    Get started
                </button>
                {/* Button 2 */}
                <button className='button-icon mt-2 sm:mt-0 w-full sm:w-auto'>
                    Learn more about us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
            
        </div>
    )
}

export default Hero
