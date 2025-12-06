import React from 'react'
import { MdStars } from "react-icons/md"
import { testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div initial={{opacity:0.2, y:100}}  transition={{duration:1}}  whileInView={{opacity:1, y:0}}  viewport={{ once:true}} className='flex flex-col items-center justify-center my-10 p-20'>

        <h1 className='text-3xl sm:text-4xl font-semibold pb-2 text-white'>Top Customers</h1>
        <p className='text-gray-400 pb-12'>What Our Users Are Saying</p>

        <div className='flex flex-wrap items-center gap-6 p-10'>

            {testimonialsData.map((testimonial, idx)=>(
                <div key={idx} className='bg-white/10 p-12  rounded-xl shadow-lg border border-slate-700 w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300' >
                    
                    <div className='flex flex-col items-center'>
                        <img src={testimonial.image} alt="" className='rounded-full w-14 border-2 border-slate-600'/>
                        
                        <h2 className='text-xl font-semibold pt-3 text-white'>{testimonial.name}</h2>
                        <p className='text-gray-500 pb-4 text-sm'>{testimonial.role}</p>
        
                        <div className='flex pb-4 gap-1 text-yellow-500'>
                            <MdStars size='20px' />
                            <MdStars size='20px' />
                            <MdStars size='20px' />
                            <MdStars size='20px' />
                            <MdStars size='20px' />
                        </div>

                        
                        <p className='text-center text-sm text-gray-300 leading-6'>{testimonial.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials