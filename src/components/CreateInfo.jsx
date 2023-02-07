

import React, { useEffect, useRef, useState } from 'react'

const CreateInfo = () => {
    const blockRef = useRef();

    const runCounter = (item) => {
        
        let start = +item.innerHTML;
        let end = +item.dataset.max;

        let interval = setInterval(function() {
            start = start + 15;
            item.innerHTML = start;
            if(start == end) {
                clearInterval(interval);
            }
        }, 5);
    }
    
    const [windowOffset, setWindowOfset] = useState(0)

    useEffect(() => {
        const onScroll = () => setWindowOfset(window.pageYOffset + window.innerHeight);

       
        window.addEventListener('scroll', onScroll);
        if(windowOffset > blockRef.current.offsetTop){
            window.removeEventListener('scroll', onScroll);
        }

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(()=>{
        let elemOffset = blockRef.current.offsetTop

        if(windowOffset >=  elemOffset){
            let counters = document.querySelectorAll('.counter')
            if(+counters[0].innerHTML === 0 ){
                counters.forEach(item => runCounter(item));
            }
            
            
        }
    },[windowOffset])



    return (
        <div  className=' py-14 bg-ruby/10'>
            <div className=' max-w-7xl mx-auto px-4'>
                <div className=' flex flex-col flex-wrap justify-between items-center lg:flex-row'>
                    <div className=' max-w-md flex flex-col space-y-4 sm:text-center lg:text-left'>
                        <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:4xl xl:text-5xl'>Create A Beautiful Landing PageIn Minute Not Weeks</h2>
                        <p className='text-lightgrey'>This should be used to tell a story and let your users know a little more about your product or service</p>
                        <div ref={blockRef} className='flex justify-around mb-4'>
                        <div className=' bg-snow py-2 px-3 flex items-center space-x-3 sm:py-4 sm:px-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className=" w-12 h-12 sm:w-14 sm:h-14 text-ruby">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <h3 className=' font-bold text-xl counter' data-max="1875">0</h3>
                                <span className=' text-lightgrey'>Project</span>
                            </div>    
                        </div>
              
                        <div className=' bg-snow py-2 px-3 flex items-center space-x-3 sm:py-4 sm:px-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 sm:w-14 sm:h-14 text-ruby">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>

                            <div>
                                <h3 className=' font-bold text-xl counter' data-max="2820">0</h3>
                                <span className=' text-lightgrey'>Clients</span>
                            </div>    
                        </div>
                    </div>
                    </div> 
                    <img className='w-[500px] my-6 xl:w-[660px]' src="/comand.png" alt="" />

                </div>

            </div>
        </div>
    )
}

export default CreateInfo