import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dropdown = ({isOpen, toggle, setIsOpen}) => {

    const variants = {
        open: { opacity: 1},
        closed: { y:-30, opacity: 1},
      }

    return (
        <motion.div animate={isOpen ? 'open' : 'closed'} variants={variants}
        className={isOpen ? 'absolute w-full flex flex-col text-right px-3 py-2 bg-white rounded-b-xl text-gray-500 font-inter font-medium shadow-2xl' : 'hidden'} onClick={toggle}>
            <toggle is='toggle' onClick={() => setIsOpen(isOpen => !isOpen)} />

            <Link className='p-4 my-1 rounded-lg hover:bg-gray-100' to='/work'>Work</Link>
            
            <Link className='p-4 my-1 rounded-lg hover:bg-gray-100' to='/contact'>Get started now</Link>

        </motion.div>
    )
}

export default Dropdown
