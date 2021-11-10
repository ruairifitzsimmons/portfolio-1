import React, { useState } from 'react';
import { useFormspark } from "@formspark/use-formspark";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const FORMSPARK_FORM_ID = 'VqLRz2nY';

function ContactForm() {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await submit({ name, email, message });
        setName("")
        setEmail("")
        setMessage("")
        alert("Thank you, your messsage has been sent.");
    };

    return (
        <form onSubmit={onSubmit} className='font-inter sm:border border-gray-200 mt-18 my-24 w-max m-auto rounded-2xl'>

            <div className='mx-6 mt-6 mb-6'>
                <p className='sub-heading text-brand-1'>Work with us</p>
                <h1 className='secondary-heading'>Contact</h1>
            </div>

            <div className='flex flex-col mx-6'>
                <label value={name} className='text-xl tracking-wide text-gray-500'>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type ='name' name='name' className='border border-gray-200 text-xl tracking-wide rounded-md px-1 py-2'/>
                
            </div>

            <div className='flex flex-col mx-6 mt-5'>
                <label className='text-xl tracking-wide text-gray-500'>Email Address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type ='email' name='email' className='border border-gray-200 text-xl tracking-wide rounded-md px-1 py-2'/>
                
            </div>

            <div className='flex flex-col mx-6 mt-5'>
                <label value="message" className='text-xl tracking-wide text-gray-500'>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows='4' className='border border-gray-200 text-xl tracking-wide rounded-md px-1 py-2'/>
                
            </div>

            <div className='inline-flex mt-8 mb-6 justify-between'>
                <button type='submit' disabled={submitting} className='button-main mx-6'>Send message</button>

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