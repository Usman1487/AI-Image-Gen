import React from 'react'
import img3 from '../assets/image-3.png'
import { motion } from "framer-motion"

const Description = () => {
  return (
    <motion.div initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{ once:true}} className='flex flex-col items-center justify-center py-20 p-6 md:px-28'  >
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-white'>Create Anything</h1>
        <p className='text-gray-400 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 pt-9 md:gap-14 md:flex-row items-center'>
            
           
            <img src={img3}  alt="AI Description" className='w-80 xl:w-96 rounded-xl border border-slate-700 shadow-xl'/>

            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl pt-3 font-medium max-w-lg text-white'>
                    Introducing the AI-Powered Text to Image Generator
                </h2>
                
                <p className='text-gray-400 leading-relaxed'>
                    Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals for a project or unique artwork for your creative portfolio, our tool understands your text and transforms it into high-quality images instantly.
                </p>
                
                <p className='text-gray-400 leading-relaxed'>
                    Simply type a text prompt, and watch our advanced neural networks generate realistic visuals, abstract art, or 3D renders in seconds. No design skills required—just your imagination.
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description