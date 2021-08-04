import React from 'react';

const Service = ({
    subHeading,
    heading,
    description,
    buttonLabel,
    fromColorOne,
    toColorTwo,
    textColorThree,
    icon,
    customImage

}) => {
    return (
        <div className='lg:max-w-screen-xl my-20 sm:px-8 lg:px-18 py-7 px-6 bg-white flex lg:flex-row flex-col m-auto xl:border border-gray-200 hover:border-gray-300 rounded-2xl duration-300'>
            
            <div className='lg:w-4/6'>
                <div className={`bg-gradient-to-br ${fromColorOne} ${toColorTwo} text-white p-2.5 rounded-xl mb-8 w-12`}>
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
            </div>
            
            <div className='lg:w-2/6 mt-12 lg:mt-0 self-center'>
                <img src={customImage} className='' loading="lazy" alt=''/>
            </div>
        </div>
    )
}

export default Service
