import React, { useContext, useState } from 'react'
import img4 from '../assets/img-2.png' 
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
    <motion.form  onSubmit={onSubmitHandler}  className='flex flex-col min-h-[90vh] justify-center items-center p-4' initial={{opacity:0.2, y:100}} transition={{duration:1}}  whileInView={{opacity:1, y:0}} viewport={{ once:true}} >
      <div>
        <div className='relative pb-4'>
          <img src={image} alt="" className='max-w-lg w-full rounded-2xl border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' />
          <span className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} rounded-b-2xl`}></span>
        </div>
        <p className={!loading ? 'hidden' : 'text-slate-400 text-center mt-4'}>Generating your masterpiece...</p>
      </div>

      
      {!isImageLoaded &&
        <div className='flex w-full max-w-xl bg-slate-800/50 border border-slate-700 shadow-lg text-white text-sm p-1 mt-10 rounded-full items-center'>
          <input  onChange={e =>setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate...' className='flex-1 bg-transparent outline-none pl-6 py-3 max-sm:w-20 placeholder-slate-400 text-white'  />
          <button type='submit' className='bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-transform text-white px-8 sm:px-14 py-3 rounded-full font-medium'>
            Generate
          </button>
        </div>
      }

      
      {isImageLoaded &&
        <div className='flex gap-4 flex-wrap justify-center text-white text-sm mt-10'>
          <p onClick={()=>{setisImageLoaded(false)}} className='bg-transparent border border-slate-600 text-white hover:bg-slate-800 transition-colors px-8 py-3 rounded-full cursor-pointer font-medium'>
            Generate Another
          </p>
          <a href={image} download className='bg-white text-black hover:scale-105 transition-transform px-10 py-3 rounded-full cursor-pointer font-bold shadow-lg'>
            Download
          </a>
        </div>
      }
    </motion.form>
  )
}

export default Result