import React from 'react'

const Services = () => {
    return (
            <div className='lg:max-w-screen-xl font-inter my-20 px-6 flex md:flex-row flex-col m-auto justify-center'>
            
                {/* Branding */}
                <div className='md:w-80 px-4 md:px-6 py-10 rounded-3xl duration-300 text-center '>
                    {/* Icon */}
                    <div className='bg-cyan-1 bg-opacity-10 rounded-full h-20 w-20 m-auto mb-6 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {/* Text */}
                    <h2 className='pb-4 font-semibold tracking-tight text-xl'>Branding</h2>
                    <p className='tracking-wide text-base text-gray-500 lg:px-8 leading-relaxed'>Bring your business to life with a unique brand identity.</p>
                    
                </div>

                {/* Social Content */}
                <div className='md:w-80 md:mx-4 lg:mx-10 my-10 md:my-0 px-4 md:px-6 py-10 rounded-3xl duration-300 text-center'>
                    {/* Icon */}
                    <div className='bg-brand-1 bg-opacity-5 rounded-full h-20 w-20 m-auto mb-6 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 transform -rotate-12 text-brand-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    {/* Text */}
                    <h2 className='pb-4 font-semibold tracking-tight text-xl'>Social Content</h2>
                    <p className='tracking-wide text-base text-gray-500 lg:px-8 leading-relaxed'>Optimize your online presence, make social noise.</p>
                    
                </div>

                {/* Web Design */}
                <div className='md:w-80 px-4 md:px-6 py-10 rounded-3xl duration-300 text-center'>
                    {/* Icon */}
                    <div className='bg-limegreen-2 bg-opacity-5 rounded-full h-20 w-20 m-auto mb-6 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-limegreen-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {/* Text */}
                    <h2 className='pb-4 font-semibold tracking-tight text-xl'>Web Design</h2>
                    <p className='tracking-wide text-base text-gray-500 lg:px-8 leading-relaxed'>Your own corner of the internet, built perfect for you.</p>
                    
                </div>

            </div>
    )
}

export default Services
