import React from 'react';

const Hero = () => {
    return (
        <div className='lg:max-w-screen-xl mt-20 px-6 sm:px-8 lg:px-18 bg-white flex flex-col items-start justify-center m-auto'>

            <h2 className='text-brand-1 font-bold tracking-widest text-base'>YOUR DIGITAL SOLUTION</h2>

            {/* Header */}
            <h1 className='main-heading text-gray-900'>
                Future-proof your brand through design.
            </h1>

            {/* Description */}
            <p className='description text-gray-500'>
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
                    Learn more about us <span className='ml-3'>👋🏼</span>
                </button>
            </div>
            
        </div>
    )
}

export default Hero
