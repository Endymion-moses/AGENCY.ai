import React from 'react'
import Title from './Title.jsx'
import {teamData} from '../assets/assets'

const OurTeam = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12
         lg:px-24 xl:px-40 pt-30 text-grey-800 dark:text-white'>
    <Title title = 'Meet the team'
    desc = "A passionate team of digital experts dedicated to your brand's success"/>
      
      <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5'>
      {teamData.map((team, index) => (
            <div key = {index} className='flex sm:flex-cols items-center gap-5 p-4
            rounded-xl border border-grey-100 dark:border-gray-700 bg-white
            dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
            hover:scale-105 transition-all duration-500'>
                <img src={team.image} alt="" className='w-12 h-12 round-full'/>
                <div className='flex-1'>
                    <h3 className='font-bold text-sm'>{team.name}</h3>
                    <p className='text-xs opacity-60'>{team.title}</p>
                </div>
            </div>

      ))}
           </div>
    </div>
  )
}

export default OurTeam