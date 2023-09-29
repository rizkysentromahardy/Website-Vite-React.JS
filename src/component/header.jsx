import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/logo.png'

const Header = () => {
    return (
        < >
            <nav className="bg-slate-800 sticky top-0 ">
                <div className="container bg-px-4 lg:px-20">
                    <div className='relative flex h-20 items-center justify-between'>
                        <div>
                            <img className='w-auto h-4 lg:h-6 flex self-center' src={image} alt='Logo react' />
                        </div>
                        <div className="flex flex-row gap-6 font-Quicksand" >
                                <Link to={'/'} className=" px-4 py-2 block lg:inline-block lg:mt-0 text-green-400 hover:text-white text-lg ">
                                    Home
                                </Link>
                                <Link to={'/portfolio'} className=" px-4 py-2 block lg:inline-block lg:mt-0 text-green-400 hover:text-white text-lg ">
                                    Portfolio
                                </Link>
                                <a className=' px-4 py-2 block lg:inline-block lg:mt-0 rounded-full bg-green-400 text-white hover:bg-green-600 cursor-pointer    text-lg '> Contact Me</a>
                            </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header