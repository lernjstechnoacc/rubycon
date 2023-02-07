import React from "react";
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'


const PricingHead = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visable'
      viewport={{amount: 0.2, once:true}}
      className=" py-14 bg-gradient-to-b from-ruby/10   to-white ">
      <div className=" max-w-[1280px] mx-auto flex flex-col items-center">
        <div className="max-w-[700px] flex flex-col items-center">
          <motion.h1 custom={1} variants={animate.Opacity} className=" text-4xl font-bold mb-6 md:text-6xl">Choose your plan</motion.h1>
          <motion.p custom={2} variants={animate.Opacity} className=" text-center text-p px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui
            tellus morbi integer neque, malesuada ac nulla tellus pharetra sit
            laoreet quis.
          </motion.p>
        </div>

        <motion.div custom={3} variants={animate.Bottom} className="header-cards">
          <div className=" card-price bg-white">
            <div className="card-content">
              <div>
                <div className=" mb-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-16 h-16 inline-block px-2 py-1 mr-3 bg-ruby text-white rounded-xl">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>

                </div>
                <h2 className=" text-3xl font-bold mb-4">Startup</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
                <div className=" h-[1px] bg-slate-300 my-7 "></div>
                <h2 className=" text-3xl font-bold my-2">$ 99.00 USD</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
              </div>
              <div className="cart-block">
                <ul className=" space-y-4 ml-0  mb-2 sm:mb-0 mt-2 md:text-base">
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      All Build features
                    </h1>
                  </li>
                  <li>
                    <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Up to 100 template
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Mobile App
                    </h1>
                  </li>
                  <li>
                    <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Normal Support
                    </h1>
                  </li>
                </ul>
                <button className=" bg-ruby px-6 w-full py-4 rounded-xl flex justify-center  hover:scale-95 mt-4 ">
                  <span className=" text-white">Get started</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" card-price bg-ruby relative">
            <div className="card-content">
              <div>
                <div className=" mb-3  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 inline-block px-2 py-1 mr-3 bg-white text-ruby rounded-xl">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>

                  <div className=" bg-white absolute top-4 rounded-xl right-4 px-6 py-3 sm:right-[50%] lg:text-base lg:px-4 md:py-2 lg:right-4">
                    Featured
                  </div>
                </div>
                <h2 className=" text-3xl text-white font-bold mb-4">Growth</h2>
                <p className=" text-sm text-white">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
                <div className=" h-[1px] bg-slate-300 my-7 "></div>
                <h2 className=" text-3xl text-white  text-whitefont-bold my-2">
                  $ 199.00 USD
                </h2>
                <p className=" text-sm text-white">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
              </div>
              <div className="cart-block">
                <ul className=" space-y-4  mb-2 sm:mb-0 mt-4 text-white md:text-base">
                  <li>
                    <h1 className="block">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-white text-ruby rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      Everything on Startup
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-white text-ruby rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Up to 1,000 template
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-white text-ruby rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Unique design
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-white text-ruby rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Dedicated Support
                    </h1>
                  </li>
                </ul>
                <button className=" bg-white px-6 w-full py-4 rounded-xl flex justify-center  hover:scale-95 mt-4 ">
                  <span className=" text-ruby">Get started</span>
                </button>
              </div>

              
            </div>
          </div>
          <div className=" card-price bg-white">
            <div className="card-content">
              <div>
                <div className=" mb-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 inline-block px-2 py-1 mr-3 bg-ruby text-white rounded-xl">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>


                </div>
                <h2 className=" text-3xl font-bold mb-4">Enterprise</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
                <div className=" h-[1px] bg-slate-300 my-7 "></div>
                <h2 className=" text-3xl font-bold my-2">$ 399.00 USD</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
              </div>
              <div className="cart-block">
                <ul className=" space-y-4  mb-2 sm:mb-0 mt-4 md:text-base">
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Everything on Growth
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      SEO optimization
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      All Report features
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" w-8 h-8 inline-block px-2 py-1 mr-3 bg-ruby text-snow rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Premium Support
                    </h1>
                  </li>
                </ul>
                <button className=" bg-ruby px-6 w-full py-4 rounded-xl flex justify-center  hover:scale-95 mt-4 ">
                  <span className=" text-white">Get started</span>
                </button>
              </div>

            
            </div>
          </div>
        </motion.div>

        <motion.div custom={6} variants={animate.Opacity} className=" max-w-xl rounded-3xl mx-3 p-4  bg-ruby/10 mt-36 lg:px-16 md:p-11 md:mx-3">
            <div className="flex justify-center flex-wrap items-center">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className=" m-2 w-20  inline-block p-1  bg-ruby text-white rounded-xl">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
                
               
                <div className="flex m-2 max-w-xs flex-col justify-around">
                    <h2 className="  font-bold text-lg">Need a custom plan for your company?</h2>
                    <p className='  text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit rhoncus nunc ipsum ornare adipiscing fringilla lacinia pharetra congue nisl.</p>
                    <a href="">Contact us ➔</a>

                </div>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingHead;
