import React, { useContext } from 'react'
import { plans } from '../assets/assets'
import logo from '../assets/logo_icon.png'
import { motion } from "framer-motion" 
import { AppContext } from '../context/AppContext'

const Buy = () => {

  const {user} = useContext(AppContext)

  return (
    <motion.div 
      initial={{opacity:0.2, y:100}} 
      transition={{duration:1}} 
      whileInView={{opacity:1, y:0}} 
      viewport={{ once:true}}
      className='min-h-[80vh] text-center pt-14 mb-10' 
    >
    
      <button className='border border-slate-600 px-10 py-2 rounded-full mb-6 bg-white/5 text-slate-300 uppercase tracking-wider text-sm hover:bg-white/10 transition-all'>
        Our Plans
      </button>
   
      <h1 className='text-center text-3xl font-medium pb-6 sm:pb-10 pt-3 text-white'>
        Choose the plan
      </h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, idx)=>(
            <div  key={idx} className='bg-white/10 drop-shadow-lg border border-slate-700 rounded-xl py-12 px-8 text-white hover:scale-105 transition-all duration-500 hover:border-cyan-500/50'> 
                <img src={logo} alt="" className='w-20 invert opacity-80' /> 
                <p className='pt-3 pb-1 font-semibold text-lg mt-3'>{item.id}</p>
                <p className='text-sm text-slate-400'>{item.desc}</p>
                <p className='pt-6 pb-9'> 
                  <span className='text-3xl font-medium text-cyan-400'>{item.price}</span> 
                  <span className='text-slate-400 text-sm'> / {item.credits} credits</span>
                </p>
                <button className='w-full bg-white text-black font-medium text-sm rounded-lg py-3 min-w-52 cursor-pointer hover:bg-gray-100 transition-colors shadow-lg'>
                  {user ? 'Purchase' : 'Get Started' }
                </button>
            </div>
        ))}
      </div>
      </motion.div>
  )
}

export default Buy