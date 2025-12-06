import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "framer-motion"

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center py-20 px-4' initial={{opacity:0.2, y:100}}  transition={{duration:1}} whileInView={{opacity:1, y:0}}  viewport={{ once:true}} >
        <h1 className='text-3xl sm:text-4xl font-semibold pb-2 text-white'>How To Use</h1>
        <p className='text-lg text-slate-400 pb-12'>Transform Words Into Stunning Images</p>

        <div className='flex flex-wrap justify-center gap-8 w-full'>
          
          {stepsData.map((item, idx)=>(
            <div key={idx} className='flex flex-col items-center gap-4 p-8 bg-white/5 shadow-lg border border-slate-700 hover:scale-[1.02] hover:bg-slate-800/50 transition-all duration-300 rounded-xl cursor-pointer w-full sm:w-80' >

              <div className='w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 mb-2'>
                  <img width={30} src={item.icon} alt="" />
              </div>

              <div className='text-center'>
                  <h2 className='text-xl font-medium text-white mb-2'>{item.title}</h2>
                  <p className='text-slate-400 text-sm leading-relaxed'>{item.description}</p>
              </div>
              
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default Steps