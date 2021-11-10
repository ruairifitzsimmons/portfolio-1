import React, { useState, useEffect } from 'react';

const tick = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-6 opacity-50" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>

const x = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>

const SocialMediaPricing = () => {
    return (
        <>
            <div className='rounded-3xl shadow-2xl flex m-auto' id='myModal'>
                <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 gap-4 p-8'>

                    <div className='md:col-start-1 md:row-start-1'>
                        <h3 className='third-heading'>Stand out from the crowd.</h3>
                    </div> 

                    <div className='text-right'>
                        <button className='xButton bg-gray-100 hover:bg-gray-200 duration-200 p-2 rounded-full'>{x}</button>
                    </div>

                    <div className='col-span-2 md:col-span-1 row-start-2 md:row-start-2 bg-blue-50 rounded-2xl mt-4 p-6'>
                    <div className='flex justify-between'>
                            <h4 className='third-heading text-cyan-2'>Lite</h4>
                            <div className=''>
                                <p className='third-heading text-gray-700'>£220</p>
                                <p className='text-sm text-gray-400 text-right'>Monthly</p>
                            </div>
                        </div>
                        <p className='py-0.5 w-1/6 bg-cyan-2 opacity-50 rounded-md mt-2'></p>
                        <p className='mt-8 text-gray-700 font-bold tracking-tight'>Plan includes:</p>
                        <div className='flex flex-col text-black text-lg mt-4'>
                            <p className='inline-flex my-2'>{tick}8 monthly graphics</p>
                            <p className='inline-flex my-2'>{tick}2 story designs</p>
                            <p className='inline-flex my-2'>{tick}Custom branded</p>
                            <p className='inline-flex my-2'>{tick}Brand exposure</p>
                        </div>

                        <p className='text-center text-gray-700 text-sm mt-12'>Smaller text here</p>
                        <button className='w-full py-3 mt-4 font-semibold text-lg bg-cyan-2 text-white duration-200 hover:shadow-xl rounded-xl'>
                            Get started
                        </button>
                    </div>

                    <div className='col-span-2 md:col-span-1 row-start-3 md:row-start-2 rounded-2xl bg-gradient-to-br from-cyan-1 to-cyan-2 mt-4 p-6'>
                        <div className='flex justify-between'>
                            <h4 className='third-heading text-white'>Pro</h4>
                            <div className=''>
                                <p className='third-heading text-white'>£340</p>
                                <p className='text-sm text-blue-200 text-right'>Monthly</p>
                            </div>
                        </div>
                        <p className='py-0.5 w-1/6 bg-white opacity-50 rounded-md mt-2'></p>
                        <p className='mt-8 text-white font-bold tracking-tight'>Plan includes:</p>
                        <div className='flex flex-col text-white text-lg mt-4'>
                            <p className='inline-flex my-2'>{tick}12 monthly graphics</p>
                            <p className='inline-flex my-2'>{tick}Weekly story post(s)</p>
                            <p className='inline-flex my-2'>{tick}Custom branded</p>
                            <p className='inline-flex my-2'>{tick}Brand growth</p>
                        </div>

                        <p className='text-center text-white text-sm mt-12'>Something</p>
                        <button className='w-full py-3 mt-4 font-semibold text-lg bg-white duration-200 hover:shadow-xl rounded-xl'>
                            Get started
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SocialMediaPricing;
