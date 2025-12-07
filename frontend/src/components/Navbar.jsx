import React, { useContext, useState } from 'react' 
import { MdStars } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import logo from '../assets/logo1.png'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { user, setShowLogin, logout, credit } = useContext(AppContext)
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='flex items-center justify-between p-2'>
            <Link to='/'>
                <img src={logo} alt="logo" className='w-26 sm:w-27 lg:w-29 hover:scale-105 transition-all duration-500' />
            </Link>

            <div>
                {
                    user ?
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <button onClick={() => { navigate('/buy') }} className='flex items-center gap-2 bg-purple-300 px-4 sm:px-2.5 cursor-pointer sm:py-1 rounded-full hover:scale-105 transition-all duration-700 '>
                                <MdStars className='text-blue-600 text-xl sm:text-2xl' />
                                <p className='text-xs sm:text-sm font-semibold text-gray-600'>Credits left : {credit}</p>
                            </button>
                            <p className='max-sm:hidden pl-2'>Hi, {user.name}</p>
                            
                           
                            <div className='relative group'>
                               
                                <div onClick={() => setShowMenu(!showMenu)} className='cursor-pointer'>
                                     <FaUserCircle size='22px' className='drop-shadow' />
                                </div>

                                
                                <div className={`absolute top-0 right-0 z-10 text-black rounded pt-12 ${showMenu ? 'block' : 'hidden'} group-hover:block`}>
                                    <ul className='list-none m-0 p-2 bg-slate-800 rounded-md border border-slate-700 text-sm'>
                                    <li onClick={() => { logout(); setShowMenu(false); }} className='py-1 px-2 cursor-pointer pr-10 text-gray-200 hover:bg-slate-700 hover:text-white rounded'>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-3 sm:gap-5'>
                            <p onClick={() => { navigate('/buy') }} className='cursor-pointer text-gray-300 hover:text-white transition-colors'>Pricing</p>
                            <button onClick={() => setShowLogin(true)} className='bg-white text-black px-7 py-2 sm:px-10 text-sm rounded-full hover:scale-105 transition-all duration-500 cursor-pointer font-medium'>Login</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar