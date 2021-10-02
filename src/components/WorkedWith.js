import React from 'react'
import impactni from '../images/impact.png'
import fonehouse from '../images/fonehouse.png'
import selfdrive from '../images/selfdrive.png'
import jason from '../images/JasonMitchell.png'

const WorkedWith = () => {
    return (
        <div className='lg:max-w-screen-xl mt-20 grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-y-14 m-auto py-8 justify-around filter grayscale'>
            <div className=''>
                <img src={impactni} className='h-6 lg:h-8 mt-1 opacity-20' alt=''/>
            </div>

            <div className=''>
                <img src={fonehouse} className='h-8 lg:h-10 opacity-20' alt=''/>
            </div>

            <div className=''>
                <img src={selfdrive} className='h-8 lg:h-10 opacity-40' alt=''/>
            </div>

            <div className=''>
                <img src={jason} className='h-7 lg:h-9 opacity-50' alt=''/>
            </div>
        </div>
    )
}

export default WorkedWith
