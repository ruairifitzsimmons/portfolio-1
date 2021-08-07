import React from 'react';
const fingerprint = <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
</svg>

const design = <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

const computer = <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

const mobile = <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>

const lightbulb = <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>

const cursor = <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
</svg>

const OurServices = () => {
    return (
        <div className='lg:max-w-screen-xl mt-10 mb-20 sm:px-8 lg:px-18 py-7 px-6 m-auto font-inter'>
            
            <h2 className='sub-heading text-cyan-3'>What we do</h2>
            <h1 className='secondary-heading'>Services</h1>
            
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-3 justify-center text-center text-gray-600'>

                {/* Our services */}
                <div className='grid-square'>
                    {fingerprint}
                    <h2 className='grid-text'>Logos</h2>
                </div>

                <div className='grid-square'>
                    {design}
                    <h2 className='grid-text'>Branding</h2>
                </div>

                <div className='grid-square'>
                    {computer}
                    <h2 className='grid-text'>Graphics</h2>
                </div>

                <div className='grid-square'>
                    {mobile}
                    <h2 className='grid-text'>Content</h2>
                </div>

                <div className='grid-square'>
                    {lightbulb}
                    <h2 className='grid-text'>Marketing</h2>
                </div>

                <div className='grid-square'>
                    {cursor}
                    <h2 className='grid-text'>Websites</h2>
                </div>
            </div>

        </div>
    )
}

export default OurServices