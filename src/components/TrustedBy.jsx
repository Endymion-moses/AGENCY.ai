import React from 'react'
import company_logos from '../assets/assets';

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24
     xl:px-40 gap-10 text-gray-700 dark:text-white/80'>

        <h3 className='font-semibold'>Trusted by leading companies</h3>

        <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
             <img src={company_logos.coinbase_logo} alt=""  className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
             <img src={company_logos.google_logo} alt=""   className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
             <img src={company_logos.rakuten_logo} alt=""   className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
             <img src={company_logos.microsoft_logo} alt=""   className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
             <img src={company_logos.airbnb_logo} alt=""   className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
             <img src={company_logos.zoom_logo} alt=""   className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
        </div>
    </div>
  )
}

export default TrustedBy