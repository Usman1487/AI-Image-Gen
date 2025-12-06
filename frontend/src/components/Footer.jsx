import React from 'react'
import logo from '../assets/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
  
    <div className='flex items-center justify-between gap-4 px-4 lg:px-5 border-t border-slate-800/50'>

        <img src={logo} alt="logo" className='w-16 lg:w-19 hover:scale-105 transition-all duration-500 cursor-pointer'/>
        <p className='flex-1 border-l border-slate-600 pl-4 text-sm text-slate-400 max-sm:hidden'>
            Copyright @Codewithusman | All rights reserved.
        </p>
        
        <div className='flex gap-4'>
            <FaFacebook size={18} className='text-slate-400 hover:text-blue-500 transition-colors cursor-pointer'/>
            <FaSquareTwitter size={18} className='text-slate-400 hover:text-sky-400 transition-colors cursor-pointer'/>
            <FaInstagramSquare size={18} className='text-slate-400 hover:text-pink-500 transition-colors cursor-pointer'/>
        </div>

    </div>
  )
}

export default Footer