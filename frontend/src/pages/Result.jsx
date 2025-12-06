import React, { useContext, useState } from 'react'
import img4 from '../assets/img-2.png' // Make sure this path is correct based on your folder
import { motion } from "framer-motion"
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image, setImage] = useState(img4)
  const [isImageLoaded, setisImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const {genrateImage} = useContext(AppContext)

  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await genrateImage(input)
      if(image){
        setisImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form 
        onSubmit={onSubmitHandler} 
        className='flex flex-col min-h-[90vh] justify-center items-center p-4' // Added p-4 for mobile safety
        initial={{opacity:0.2, y:100}} 
        transition={{duration:1}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{ once:true}} 
    >
      <div>
        <div className='relative pb-4'>
          {/* Change 1: Image Styling
             - rounded-xl (smooth corners)
             - border border-slate-700 (definition)
             - shadow-2xl (depth)
          */}
          <img src={image} alt="" className='max-w-lg w-full rounded-2xl border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' />
          
          {/* Change 2: Loading Bar
             - 'bg-blue-500' hata kar Gradient lagaya (purple to cyan) jo theme match kare.
          */}
          <span className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} rounded-b-2xl`}></span>
        </div>
        
        {/* Loading Text */}
        <p className={!loading ? 'hidden' : 'text-slate-400 text-center mt-4'}>Generating your masterpiece...</p>
      </div>

      {/* --- INPUT SECTION --- */}
      {!isImageLoaded &&
        <div className='flex w-full max-w-xl bg-slate-800/50 border border-slate-700 shadow-lg text-white text-sm p-1 mt-10 rounded-full items-center'>
          <input 
            onChange={e =>setInput(e.target.value)} 
            value={input} 
            type="text" 
            placeholder='Describe what you want to generate...' 
            // Change 3: Input Colors
            // - bg-transparent (Dark bar ke andar)
            // - placeholder-slate-400 (Taake placeholder dim dikhe)
            // - text-white (User ka text bright dikhe)
            className='flex-1 bg-transparent outline-none pl-6 py-3 max-sm:w-20 placeholder-slate-400 text-white' 
          />
          
          {/* Change 4: Generate Button
             - 'bg-zinc-900' se hata kar 'bg-gradient' banaya.
             - Ye Primary Action hai, isliye colorful rakha.
          */}
          <button type='submit' className='bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-transform text-white px-8 sm:px-14 py-3 rounded-full font-medium'>
            Generate
          </button>
        </div>
      }

      {/* --- ACTION BUTTONS (Download / Retry) --- */}
      {isImageLoaded &&
        <div className='flex gap-4 flex-wrap justify-center text-white text-sm mt-10'>
          {/* Change 5: 'Generate Another' Button
             - Transparent background
             - White Border
             - Text White
          */}
          <p onClick={()=>{setisImageLoaded(false)}} className='bg-transparent border border-slate-600 text-white hover:bg-slate-800 transition-colors px-8 py-3 rounded-full cursor-pointer font-medium'>
            Generate Another
          </p>
          
          {/* Change 6: Download Button
             - White Background (High Contrast)
             - Black Text
          */}
          <a href={image} download className='bg-white text-black hover:scale-105 transition-transform px-10 py-3 rounded-full cursor-pointer font-bold shadow-lg'>
            Download
          </a>
        </div>
      }
    </motion.form>
  )
}

export default Result