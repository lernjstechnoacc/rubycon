import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const ContactUs = () => {
    return (
        <motion.div
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2, once:true}}
        className=' bg-ruby/10 py-14 '>
            <div className=' max-w-[1280px] mx-auto px-4'>
                <div className='flex flex-wrap items-center lg:items-start'>
                    <div className=' lg:w-1/2 flex flex-col space-y-4 mb-6 w-full items-center lg:items-start '>
                        <motion.h1 custom={1} variants={animate.Opacity} className=' text-6xl font-bold'>Contact us</motion.h1>
                        <motion.p custom={2} className='pr-4' variants={animate.Opacity}>Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing elit, sed do eiusmod tempor.</motion.p>
                        <div className='w-full flex flex-col  space-y-4 '>
                            <motion.div custom={3} variants={animate.Bottom} className='flex max-w-[380px]  duration-700 bg-white px-5 py-6 rounded-xl border hover:border-ruby/70  focus:outline-none  cart hover:scale-95'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 p-3 mr-5 bg-ruby text-white rounded-xl">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                                <div className=' space-y-4'>
                                    <h1 className=' text-2xl font-bold'>Email us</h1>
                                    <span className=' text-base'>contact@example.com</span>
                                </div>
                            </motion.div>
                            
                            <motion.div custom={3} variants={animate.Bottom} className='flex max-w-[380px]  duration-700 bg-white px-5 py-6 rounded-xl border hover:border-ruby/70  focus:outline-none  cart hover:scale-95'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className=" w-16 h-16 p-3 mr-5 bg-ruby text-white rounded-xl  ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <div className=' space-y-4'>
                                    <h1 className=' text-2xl font-bold'>Call us</h1>
                                    <span className=' text-base'>(044) - 444 - 4444</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div custom={3} variants={animate.Bottom} className='  duration-700 bg-white p-10 flex justify-center rounded-2xl w-full lg:w-1/2'>
                        <form className='flex flex-col items-center '>
                            <div className='flex space-x-4 mb-4 '>
                                <div className=' w-1/2 space-y-2'>
                                    <label className=' block lg:text-xl font-extrabold text-lg'  htmlFor="name">Name</label>
                                    <input className='lg:text-base p-5 py-4 rounded-xl border  hover:border-ruby/70  focus:outline-none  border-slate-200 md:p-2 text-sm w-[90%]' placeholder='John Carter' name='name' type="text" />
                                </div>
                                <div className=' w-1/2 space-y-2 mb-3'>
                                    <label className=' block lg:text-xl font-extrabold text-lg ' htmlFor="email">Email</label>
                                    <input className='lg:text-base p-5 py-4 rounded-xl border  hover:border-ruby/70  focus:outline-none  border-slate-200 md:p-2 text-sm w-[90%]' placeholder='example@mail.com' name='email' type='email' />
                                </div>               
                            </div>
                            <div className='flex  space-x-4 mb-4 md:space-x-0'>
                                <div className=' w-1/2 space-y-2'>
                                    <label className=' block lg:text-xl font-extrabold text-lg'  htmlFor="phone">Phone</label>
                                    <input className=' lg:text-base p-5 py-4 rounded-xl border  hover:border-ruby/70  focus:outline-none  border-slate-200 md:p-2 text-sm w-[90%]'  placeholder='(044) 444 4444' name='phone' type="text" />
                                </div>
                                <div className=' w-1/2 space-y-2'>
                                    <label className=' block lg:text-xl font-extrabold text-lg ' htmlFor="company">Company</label>
                                    <input className=' lg:text-base p-5 py-4 rounded-xl border  hover:border-ruby/70  focus:outline-none  border-slate-200 md:p-2 text-sm w-[90%]' placeholder='ex. Facebook' name='company' type="text" />
                                </div>              
                            </div>
                            <div className=' space-y-2 mt-2'>
                                    <label className=' block lg:text-xl font-extrabold  text-lg' htmlFor="text">Message</label>
                                    <textarea className=' text-base lg:p-5 lg:w-full h-[100px] rounded-xl border hover:border-ruby/70  focus:outline-none  border-slate-200 p-2 sm:text-sm w-[90%]' name="text" id="" cols="50" rows="5"></textarea>
                            </div>

                            <div className='flex w-full justify-end'>
                            <button className=' bg-ruby px-6 py-4 rounded-xl flex  hover:scale-95 '>
                                <span className=' text-white'>Submit</span>
                            </button>
                            <div>

                            </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactUs