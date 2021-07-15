import React from 'react';
import logo from '../images/Logo Blue - Small.png';
import mainImage from '../images/main-image.png';

const Hero = () => {
    return (
        <div className='lg:max-w-screen-xl mt-14 px-4 sm:px-8 lg:px-18 bg-white flex flex-col items-start justify-center m-auto'>

            {/* Greeting */}
            <div className='inline-flex mb-4'>
                <img src={logo} className='w-16' alt=''/>
                <h1 className='text-4xl font-bold text-gray-900 font-inter mt-4 ml-4'>Decision</h1>
            </div>

            {/* Header */}
            <h1 className='main-heading'>
                Future-proofing businesses through design.
            </h1>

            {/* Description */}
            <p className='description'>
                A design agency with creative spark. We focus on making your business stand out with a <span className='text-black font-medium'>strong</span> brand identity, <span className='text-black font-medium'>enticing</span> social media content & <span className='text-black font-medium'>effective</span> web design.
            </p>

            {/* Buttons */}
            <div className='mt-10 sm:inline-flex text-lg'>
                {/* Button 1 */}
                <button className='button-main button-shadow'>
                    Get started
                </button>
                {/* Button 2 */}
                <button className='button-icon'>
                    Learn more about us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>

            {/* Display */}
            <div className='my-20'>
            <div className='w-full flex-none bg-gradient-to-br from-cyan-1 to-cyan-2 rounded-3xl shadow-md transform -rotate-3' >
                <img src={mainImage} className='transform rotate-3' alt=''/>
                </div>
            </div>
            
        </div>
    )
}

export default Hero
