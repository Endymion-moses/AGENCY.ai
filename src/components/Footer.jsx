import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10  sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div className='text-sm text-gray-700 dark:text-gray-400  space-y-5'>
                <img  className = 'w-32 sm:w-44' src={theme === 'dark' ? assets.logo_dark : assets.logo} alt=""/>
            
                <p className='max-w-md text-gray-500 dark:text-white'>From strategies to execution,we craft digital solutions that move 
                    your business forward</p>
                <ul className='flex gap-8' >
                    <li><a className='hover:text-primary '    href="#">Home</a> </li>
                   <li><a className='hover:text-primary '    href="#services">Services</a></li>
                    <li><a className='hover:text-primary '    href="#our-work">Our work</a></li>
                    <li><a className='hover:text-primary '    href="#contact-us">Contact us</a></li>

                </ul>
            </div>
                 
            <div className='space-y-5'>
                 <h3 className='text-md font-bold text-gray-700 dark:text-white '>Subscribe to our newsletter</h3>
                 <p className='text-sm text-gray-500 dark:text-white'>The latest news,articles and resources, sent to your inbox weekly.</p>
                 
                 <div className='flex gap-4'>
                    <input type="text" placeholder='Enter your email'
                  className='w-full p-3 text-sm dark:text-gray-200 outline-none border border-gray-300
                 rounded bg-transparent dark:border-gray-500'/>
                    <button className='bg-primary rounded px-6 '>subscribe</button>
                 </div>

            </div>
        </div>

        <hr className='border-gray-300 dark:border-gray-600 my-6'/>

        <div className='flex gap-4 flex-wrap justify-center pb-6 flex-wrap sm:justify-between text-sm text-gray-600
        dark:text-gray-300'>
            <p>copyright 2025 @ Endymion-moses-All rights reserved.</p>

            <div className='flex gap-4  items-center'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer