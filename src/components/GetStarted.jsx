import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const GetStarted = () => {
    return (
        <motion.div 
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.6, once:true}}
        className=' mb-14 bg-gradient-to-br from-tealblue to-ruby py-28'>
            <div className=" max-w-7xl px-4 mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between flex-wrap  space-y-4">
                    <h1  className=' max-w-xl   text-white text-h1'>Take your email marketing game to the next level</h1>
                    <div className=' flex flex-col'>
                        <div className=' px-2 rounded-xl bg-white py-2 mb-4 border border-zinc-200 hover:border-teal-500'>
                                <form className='flex w-full' action="">
                                    <input  className=' pl-2 flex-1 text focus:outline-none' placeholder='Enter your email' type="text" />
                                    <button className=' bg-ruby px-2 py-2 rounded-xl flex sm:px-6 sm:py-4 hover:scale-95'>
                                        <span className=' text-white   sm:text-base'>Get started</span>
                                    </button>
                                </form>
                        </div>
                        <motion.div custom={3} variants={animate.Left}  className=' duration-700'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" inline-block font-bold w-8 h-8 px-2 py-1 mr-3 bg-white text-teal-700 rounded-full">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>

                            <span className=' text-white font-bold'>No credit card required</span>
                        </motion.div>
                    </div>
            </div>
        </motion.div>
    )
}

export default GetStarted