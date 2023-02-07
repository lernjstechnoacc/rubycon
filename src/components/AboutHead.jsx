import Image from 'next/image'
import React from 'react'
import img from '../../public/about.jpg'
import { motion } from 'framer-motion'
import * as animate from '../config/animateConfig'

const AboutHead = () => {
    return (
        <>
        <motion.div 
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2, once:true}}
        className=' relative'>
        <Image src={img} alt='background image' width={2000} height={1000} className='max-w-full block relative max-h-[700px] min-h-[300px] object-cover' placeholder="blur"/>
        <div className='absolute top-0 left-0 flex justify-center items-center text-white w-full h-full '>
            <div className='w-3/4 h-2/3 flex justify-center items-center '>
                <div>
                <motion.h1 custom={1} variants={animate.Opacity} className=' font-bold text-center text-xl sm:text-2xl  md:text-4xl lg:text-6xl xl:text-8xl'>About our company</motion.h1>
                <motion.p  custom={2} variants={animate.Opacity} className='p-4 text-center text-sm sm:text-base md:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui tellus morbi integer neque, malesuada ac nulla tellus pharetra.</motion.p>
                </div>

            </div>
                
        </div>
        </motion.div>
       

        </>
        

    )
}

export default AboutHead