import React from 'react'
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion'
import * as animate from '../config/animateConfig'


const HeadInfo = () => {

    return (
        
            <motion.div
 
            initial='hidden'
            whileInView='visable'
            viewport={{amount: 0.2, once:true}}
            >
                <motion.div className=' py-28 bg-gradient-to-br from-ruby to-tealblue text-snow'>
                    <div className=' max-w-3xl flex flex-col items-center mx-auto'>
                        <motion.h1 custom={1} variants={animate.Opacity} className=' text-center font-bold px-4 text-2xl md:px-0 md:text-3xl lg:text-5xl xl:text-6xl'>We Are Fully Services Digital Agency</motion.h1>
                        <motion.p custom={2} variants={animate.Opacity} className='p-4 text-center text-p'>We are Rubycon agency, our strategists will help you set an objective and choose your tools, developing a plan that is custom built for your business</motion.p>
                    </div>
                </motion.div>
                    
            </motion.div>

    )
}

export default HeadInfo