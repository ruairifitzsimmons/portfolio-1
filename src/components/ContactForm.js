import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function ContactForm() {
    const [state, handleSubmit] = useForm('xayawrdl');
    if (state.succeeded) {
        return [<ContactForm/>,
        <div className='absolute text-center m-auto w-full rounded-md -mt-20'>
            <p className='text-center text-green-500 py-2 font-inter text-sm'>Thank you, your message has been sent.</p>
        </div>];
    }
    return (
        <form onSubmit={handleSubmit} className='font-inter sm:border border-gray-200 mt-12 my-24 w-max m-auto rounded-2xl'>

            <div className='mx-6 mt-6 mb-6'>
                <p className='sub-heading text-brand-1'>Work with us</p>
                <h1 className='secondary-heading'>Contact</h1>
            </div>

            <div className='flex flex-col mx-6'>
                <label htmlFor='name' className='text-xl tracking-wide text-gray-500'>Name</label>
                <input id='name' type ='name' name='name' className='border border-gray-200 text-xl tracking-wide rounded-md px-1 py-2'/>
                <ValidationError prefix='Name' field='name' errors={state.errors}/>
            </div>

            <div className='flex flex-col mx-6 mt-5'>
                <label htmlFor='email' className='text-xl tracking-wide text-gray-500'>Email Address</label>
                <input id='email' type ='email' name='email' className='border border-gray-200 text-xl tracking-wide rounded-md px-1 py-2'/>
                <ValidationError prefix='Email' field='email' errors={state.errors}/>
            </div>

            <div className='flex flex-col mx-6 mt-5'>
                <label htmlFor="message" className='text-xl tracking-wide text-gray-500'>Message</label>
                <textarea id='message' name='message' rows='4' className='border border-gray-200 text-xl tracking-wide rounded-md px-1 py-2'/>
                <ValidationError prefix='Message' field='message' errors={state.errors}/>
            </div>

            <div className='inline-flex mt-8 mb-6 justify-between'>
                <button type='submit' disabled={state.submitting} className='button-main mx-6'>Send message</button>

                <div className='inline-flex mx-6 text-xl text-gray-300 justify-between w-24 items-end '>
                    <a className='hover:text-gray-400 duration-300' href='/'><FaFacebookSquare/></a>
                    <a className='hover:text-gray-400 duration-300' href='/'><FaInstagram/></a>
                    <a className='hover:text-gray-400 duration-300' href='/'><FaLinkedinIn/></a>
                </div>
                
            </div>

        </form>
    )
}

export default ContactForm