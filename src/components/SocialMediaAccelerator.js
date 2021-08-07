import React from 'react';

const check = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>

const SocialMediaAccelerator = () => {
    return (
        <div className='lg:max-w-screen-xl lg:my-12 mx-3 xl:m-auto px-6 xl:px-8 lg:px-18 py-7 font-inter bg-gradient-to-tr from-cyan-2 to-cyan-3 rounded-2xl shadow-xl'>
            <h3 className='sub-heading text-white opacity-40'>What you need</h3>
            <h2 className='secondary-heading text-white'>Social Media Accelerator</h2>

            {/* Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-4'>

                {/* What's Included */}
                <div className='lg:col-start-1 lg:col-span-1 bg-white rounded-2xl text-center text-gray-700 w-full px-9 pt-5 pb-6 shadow-xl'>
                    <h4 className='text-2xl font-semibold border-b'>What's included</h4>
                    <ul className='mt-4'>
                        <li className='flex flex-row'>{check}Brand refresh</li>
                        <li className='flex flex-row'>{check}3 post templates</li>
                        <li className='flex flex-row'>{check}3 story templates</li>
                        <li className='flex flex-row'>{check}Banner design</li>
                        <li className='flex flex-row'>{check}Highlight icons</li>
                    </ul>
                </div>

                {/* Text */}
                <div className='lg:col-start-2 lg:col-span-4 description text-white mt-5 xl:mt-0 lg:ml-8'>
                    <p>The quickfire solution to maximizing your potential on social media. Struggle with getting content out there? On a budget? Then this is the package for <span className='font-semibold'>you.</span></p>
                    <div className='inline-flex w-full'>
                        <button className='button-main w-full mt-9 mr-1'>Buy now</button>
                        <button className='button-main w-full mt-9 ml-1'>PayPal</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SocialMediaAccelerator
