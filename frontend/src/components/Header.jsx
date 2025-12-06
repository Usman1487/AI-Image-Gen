import React, { useContext } from 'react';
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import { motion } from "framer-motion";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6 sm:px-10 lg:px-20">
      
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-2">

        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}  transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 text-center lg:text-left space-y-8" >
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 justify-center lg:justify-start">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-slate-300 text-xs font-medium tracking-wide uppercase ">#1 AI Creative Tool</p>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] pb-3 pt-3">Imagine.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Create. Inspire.</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-lg leading-relaxed mx-auto lg:mx-0 pb-3">
            Don't just dream it. Type a prompt and watch our AI turn your words into breathtaking art in seconds.
          </p>

          <motion.button onClick={() => user ? navigate('/result') : setShowLogin(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-2 bg-white text-black font-bold rounded-full hover:bg-emerald-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Start Creating — It's Free
          </motion.button>

        </motion.div>


        
        <motion.div initial={{ opacity: 0, scale: 0.9 }}animate={{ opacity: 1, scale: 1 }}transition={{ duration: 1 }} className=" hidden lg:flex flex-1 w-full justify-end relative h-[500px]" >
            
            <motion.img src={img1} alt="Art 1" className="absolute right-10 top-10 w-3/4 max-w-[320px] rounded-3xl shadow-2xl border border-slate-700 opacity-60 rotate-6 blur-[1px]"animate={{ y: [0, -20, 0], rotate: [6, 8, 6] }}  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}/>
            <motion.img src={img2}  alt="Art 2" className="absolute right-20 bottom-10 w-3/4 max-w-[320px] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-2 border-slate-600 z-10 -rotate-3 hover:scale-105 transition-transform duration-500" animate={{ y: [0, 20, 0], rotate: [-3, -5, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}/>
       
            <motion.div className="absolute bottom-20 right-0 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl z-20 flex items-center gap-4 w-64" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
               <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✨</span>
               </div>
               <div>
                  <p className="text-xs text-slate-400">Prompt:</p>
                  <p className="text-sm text-white font-medium">Cyberpunk city...</p>
               </div>
            </motion.div>

        </motion.div>

      </div>
    </div>
  );
};

export default Header;