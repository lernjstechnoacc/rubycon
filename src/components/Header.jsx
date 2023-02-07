import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';


const navigation = [
    { id:1, title:'Home', path: '/' },
    { id:2, title:'About', path: '/about' },
    { id:3, title:'Pricing', path: '/pricing' },
    { id:4, title:'Contact', path: '/contact' },
]

const Header = () => {
    const { pathname } = useRouter()
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const onClickBurger = () => {
        let menu = document.querySelector('#mobile-menu');

        setIsActiveBurger(isActiveBurger => !isActiveBurger);
        menu.classList.toggle('hidden');

    }
    return (
        <div className=''>
            <div className=' max-w-7xl mx-auto py-8 px-4'>
                <div className='flex justify-between '>
                    <Link href={navigation[0].path} className=' cursor-pointer hover:scale-95 duration-700 flex items-center space-x-4'>
                        <Image fill={false} width={30} height={30} src='/rubyLogo.svg' alt='rubylogo' />
                        <span className='text-xl leading-5 font-bold '>Rubycon</span>

                    </Link>
                    
                    <nav className=' hidden items-center space-x-8 md:flex'>
                        <ul className=' flex space-x-8 text-base'>
                            { navigation.map( ({id, title, path}) =>{
                            return    <li key={id}>
                                    <Link key={id} 
                                    href={path} 
                                    className={(pathname === path ? 'menu-item active' : 'menu-item')}>
                                        {title}
                                    </Link>
                                </li>

                            })}                            
                        </ul>
                        <button className='flex items-center bg-ruby px-4 py-4 text-snow rounded-xl hover:space-x-2 '>
                            <span className=' '>Get started</span>

                        </button>
                    </nav>

                    <button onClick={onClickBurger} className=" md:hidden">
                        {isActiveBurger ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A31621" className="w-8 h-8">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                            :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg> }
                    </button>

                </div>
                <div>
                <nav id='mobile-menu' className=' hidden space-y-8 mt-4'>
                        <ul className='  flex-col  text-base'>
                        { navigation.map( ({id, title, path}) =>{
                            return    <li key={id}>
                                    <Link
                                    
                                    href={path} 
                                    className={(pathname === path ? 'menu-item active' : 'menu-item')}>
                                        {title}
                                    </Link>
                                </li>

                            })}   
                        </ul>
                        <button className='flex items-center bg-ruby px-4 py-2 text-snow rounded-full'>
                            <span className='mr-2'>Get started</span>

                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header