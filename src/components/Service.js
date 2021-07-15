import React from 'react';
import logo from '../images/logo.png';

const Service = ({
    subHeading,
    heading,
    description,
    buttonLabel,
    fromColorOne,
    toColorTwo,
    textColorThree,
    icon

}) => {
    return (
        <div className='lg:max-w-screen-xl mt-20 px-4 sm:px-8 lg:px-18 bg-white flex flex-col items-start justify-center m-auto'>

            <div className={`bg-gradient-to-br ${fromColorOne} ${toColorTwo} text-white p-2.5 rounded-xl mb-8`}>
                {icon}
            </div>

            {/* Sub heading */}
            <h1 className={`sub-heading ${textColorThree}`}>{subHeading}</h1>

            {/* Heading */}
            <h1 className='secondary-heading'>{heading}</h1>
            
            {/* Description */}
            <p className='description'>{description}</p>

            {/* Button */}
            <a className={`button-arrow ${textColorThree}`} href='/'>{buttonLabel}
                {<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>}
            </a>

            {/* Display */}
            <div className='w-full flex-none bg-gray-100 rounded-xl my-24 transform rotate-2'>
                <div className={`w-full flex-none bg-gradient-to-br ${fromColorOne} ${toColorTwo} rounded-3xl shadow-md transform -rotate-3`} >
                    <img src={logo} alt=''/>
                </div>
            </div>

        </div>
    )
}

export default Service
