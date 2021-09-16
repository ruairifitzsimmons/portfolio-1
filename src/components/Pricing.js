import React from 'react'
const tick = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-2 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>

const Pricing = () => {
    return (
        <>
        <div className='text-center font-inter mt-24 mx-2'>
            <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>Simple, transparent pricing</h1>
            <p className='text-lg tracking-wide text-gray-500'>No contracts, no surprise fees.</p>
        </div>

        <div className='lg:max-w-screen-lg font-inter my-10 lg:my-20 px-6 flex md:flex-row flex-col m-auto justify-around'>
            
            <div className='md:w-72 px-4 md:px-6 pt-6 rounded-2xl border md:border-none'>
                <h2 className='text-xl text-gray-400'>Start-up</h2>
                <div className='inline-flex mt-4'>
                    <p className='text-5xl font-bold tracking-tighter'>£150</p>
                </div>
                <p className='my-6 text-sm'>Description for who most benefits from the package.</p>
                <div className='flex flex-col text-gray-800'>
                    <p className='inline-flex my-2'>{tick}Brand refresh</p>
                    <p className='inline-flex my-2'>{tick}3 social posts</p>
                    <p className='inline-flex my-2'>{tick}2 story templates</p>
                    <p className='inline-flex my-2'>{tick}1 advert</p>
                    <p className='inline-flex my-2'>{tick}Custom highlight icons</p>
                </div>
                <button className='w-full py-3 mt-6 mb-6 font-semibold text-lg border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white duration-200 hover:shadow-xl rounded-xl'>
                    Choose plan
                </button>
            </div>

            <div className='md:w-72 px-4 md:px-6 pt-6 rounded-2xl duration-300 bg-brand-1 md:shadow-2xl my-6 md:my-0'>
                <h2 className='text-xl text-white'>Popular</h2>
                <div className='inline-flex mt-4'>
                    <p className='text-5xl font-bold tracking-tighter text-white'>£90</p>
                    <p className='text-md ml-4 my-auto text-white'>/ month</p>
                </div>
                <p className='my-6 text-sm text-white opacity-60'>Description for who most benefits from the package.</p>
                <div className='flex flex-col text-white'>
                    <p className='inline-flex my-2'>{tick}8 social posts</p>
                    <p className='inline-flex my-2'>{tick}4 story sets</p>
                    <p className='inline-flex my-2'>{tick}2 advert designs</p>
                    <p className='inline-flex my-2'>{tick}Caption copyright</p>
                    <p className='inline-flex my-2'>{tick}Brand guidelines</p>
                </div>
                <button className='w-full py-3 mt-6 mb-6 bg-white text-black font-semibold text-lg hover:shadow-xl duration-200 rounded-xl'>
                    Choose plan
                </button>
            </div>

            <div className='md:w-72 px-4 md:px-6 pt-6 rounded-2xl border md:border-none'>
                <h2 className='text-xl text-gray-400'>Pro</h2>
                <div className='inline-flex mt-4'>
                    <p className='text-5xl font-bold tracking-tighter'>£250</p>
                    <p className='text-md ml-4 my-auto text-gray-400'>/ month</p>
                </div>
                <p className='my-6 text-sm'>Description for who most benefits from the package.</p>
                <div className='flex flex-col text-gray-800'>
                    <p className='inline-flex my-2'>{tick}12 social posts</p>
                    <p className='inline-flex my-2'>{tick}Unlimited stories</p>
                    <p className='inline-flex my-2'>{tick}Item three</p>
                    <p className='inline-flex my-2'>{tick}Item four</p>
                    <p className='inline-flex my-2'>{tick}Item five</p>
                </div>
                <button className='w-full py-3 mt-6 mb-6 font-semibold text-lg border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white hover:shadow-xl duration-200 rounded-xl'>
                    Choose plan
                </button>
            </div>
        </div>

        <div className='text-center font-inter'>
            <p className='text-lg tracking-wide'>Need a custom package?</p>
            <p className='text-brand-1 text-lg tracking-wide'>Get in contact <button className='underline tracking-wide font-medium'>here</button></p>
        </div>
        </>
    )
}

export default Pricing
