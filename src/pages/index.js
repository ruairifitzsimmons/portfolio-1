import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import {serviceOne, serviceTwo, serviceThree} from '../pages/data';

const index = () => {
    return (
        <>
            <Hero/>
            <Service {...serviceOne}/>
            <Service {...serviceTwo}/>
            <Service {...serviceThree}/>
        </>
    )
}

export default index
