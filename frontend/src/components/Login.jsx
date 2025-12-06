import React, { useContext, useEffect, useState } from 'react'
import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion" 
import { MdCancel } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    
    const [state, setState] = useState('Login');
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmitHandler = async (e)=>{
        e.preventDefault();

        try {
            
            if(state === 'Login'){
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }

            }else{
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }

        } catch (err) {
            toast.error(err.message)
        }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return()=>{
            document.body.style.overflow = 'unset';
        }
    },[])
    
  return (
    
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm bg-black/60 flex justify-center items-center' >
        
        <motion.form onSubmit={onSubmitHandler} className='relative bg-slate-900/95 p-10 rounded-2xl shadow-2xl border border-slate-800 text-white w-[90%] max-w-sm'  initial={{opacity:0.2, y:50}} transition={{duration:0.3}}  whileInView={{opacity:1, y:0}}  viewport={{ once:true}} >
            <h1 className='text-center text-2xl text-white font-medium'>{state}</h1>
            <p className='text-sm text-slate-400 pb-8 text-center mt-2'>Welcome back! Please login to continue</p>
            
            {state !== 'Login' &&
            <div className='bg-slate-800 border border-slate-700 px-5 py-3 flex items-center gap-3 rounded-full mb-4 focus-within:border-blue-500 transition-colors'>
                    <BiUser size='22px' className='text-slate-400'/>
               <input onChange={e => setName(e.target.value)} value={name} type="text" className='bg-transparent outline-none text-sm text-white placeholder-slate-500 w-full' placeholder='Full Name' required />
            </div>
            }
            
            <div className='bg-slate-800 border border-slate-700 px-5 py-3 flex items-center gap-3 rounded-full mb-4 focus-within:border-blue-500 transition-colors'>
                    <MdOutlineEmail size='22px' className='text-slate-400'/>
               <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='bg-transparent outline-none text-sm text-white placeholder-slate-500 w-full' placeholder='Email' required />
            </div>

            <div className='bg-slate-800 border border-slate-700 px-5 py-3 flex items-center gap-3 rounded-full mb-4 focus-within:border-blue-500 transition-colors'>
                    <FaLock size='22px' className='text-slate-400'/>
               <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='bg-transparent outline-none text-sm text-white placeholder-slate-500 w-full' placeholder='Password' required />
            </div>
            
           
           {state === 'Login' ? <p className='text-sm text-blue-400 pb-4 cursor-pointer hover:text-blue-300 text-right'>Forgot password?</p> : ''}
                
           
           <button className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 w-full text-white py-3 rounded-full cursor-pointer shadow-lg transition-transform hover:scale-[1.02] font-medium'>
                {state === 'Login'? 'Login account':'Create account'}
           </button>

            {state ==='Login'?
            <p className='pt-5 text-center text-slate-400 text-sm'>Don't have an account? <span className='text-blue-400 cursor-pointer hover:underline' onClick={()=>{setState('Sign Up')}}>Sign Up</span></p>
            :
            <p className='pt-5 text-center text-slate-400 text-sm'>Already have an account? <span className='text-blue-400 cursor-pointer hover:underline' onClick={()=>{setState('Login')}}>Login In</span></p>
            }

           <MdCancel size={24} onClick={()=>setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer text-slate-400 hover:text-white transition-colors'/>
        </motion.form>
    </div>
  )
}

export default Login