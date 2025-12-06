import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {
  
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <motion.div className='pb-16 text-center' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{ once:true}}>
       
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-white py-6 md:py-16'>
            See the magic. Try Now
        </h1>

        <button onClick={()=>{user? navigate('/result'): setShowLogin(true) }} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-white text-black font-bold m-auto cursor-pointer hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]' >
            Generate Images 
            <span className="text-xl">✨</span>
        </button>
        
    </motion.div>
  )
}

export default GenerateBtn