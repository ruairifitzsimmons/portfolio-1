import React from 'react'
import SocialMediaPricing from './SocialMediaPricing'

const fingerprint = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-12 text-cyan-1 mr-4" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
<path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
<path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
</svg>

const phone = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-12 transform -rotate-12 text-brand-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>

const mouse = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-12 text-green-400 mr-4" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
</svg>

const Service = () => {
    return (
        <>
            <div className='lg:max-w-screen-xl mt-14 px-6 sm:px-8 lg:px-18 bg-white flex flex-col items-start justify-center m-auto'>
                <h1 className='main-heading'>Make your presence felt.</h1>
                <p className='description text-gray-500'>
                Start making moves, build an <span className='text-black font-medium'>incredible</span> online presence.
                </p>
                {/* Branding */}
                <div className='service-wrapper'>
                    <div className='inline-flex mt-2'>
                        {fingerprint}
                        <h1 className='service-heading text-gray-900'>
                            Branding
                        </h1>
                    </div>

                    <p className='description text-gray-500'>
                    We do everything that goes into creating a strong brand identity. Your brand is 
                    what everyone will see - you want to make a strong initial and lasting impression. 
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                    </div>

                    <div className='mt-14'>
                        <button className='button-main button-shadow mr-2 w-full sm:w-auto'>Get started</button>
                        <button className='pricing-button'><span className='group-hover:underline'>Pricing</span> ></button>
                    </div>
                </div>
                
                <SocialMediaPricing/>

                {/* Social content */}
                <div className='service-wrapper'>
                    <div className='inline-flex mt-2'>
                        {/* Icon */}
                        {phone}
                        {/* Heading */}
                        <h1 className='service-heading text-gray-900'>
                            Social content
                        </h1>
                    </div>

                    <p className='description text-gray-500'>
                    Social media is the place to be. It's <span className='text-black font-medium'>everything</span> in this modern world. 
                    It's where you showcase your expertise, your work & your results. Stand out, generate leads & create social noise.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-14'>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                    </div>

                    <div className='mt-14'>
                        <button className='button-main button-shadow mr-2 w-full sm:w-auto'>Get started</button>
                        <button className='pricing-button'><span className='group-hover:underline'>Pricing</span> ></button>
                    </div>
                </div>

                {/* Web design */}
                <div className='service-wrapper'>
                    <div className='inline-flex mt-2'>
                        {/* Icon */}
                        {mouse}
                        {/* Heading */}
                        <h1 className='service-heading text-gray-900'>
                            Web design
                        </h1>
                    </div>

                    <p className='description text-gray-500'>
                    Have you got your own little corner of the Internet? Somewhere people see what you're all about?
                    It's time to get involved. A website is <span className='text-black font-medium'>essential</span> for building a reputable business.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-14'>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                        <div className='bg-gray-100 py-24 rounded-xl'>
                        </div>
                    </div>

                    <div className='mt-14'>
                        <button className='button-main button-shadow mr-2 w-full sm:w-auto'>Get started</button>
                        <button className='pricing-button'><span className='group-hover:underline'>Pricing</span> ></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
