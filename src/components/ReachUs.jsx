import React from 'react'
import assets from '../assets/assets'
import Title from './Title.jsx'
import toast from 'react-hot-toast';


const ReachUs = () => {
   
   const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "0dc3e11d-4c4e-4412-90f4-c07a526673f5");

    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Successfully submitted')
      event.target.reset();
    } else {
      toast.error(data.message)
      
    }
    } catch (error) {
      toast.error(error.message)
    }

   
  };

  return (
    <div id='contact-us'
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
      <Title title='Reach to us'
      desc = 'Ready to grow your brand? lets connect and build something exceptional together.'/>
    
     <form onSubmit = {onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
           <div>
                <p mb-2 text-sm font-medium>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                  <img src={assets.person_icon} alt="" />
                  <input name = 'name'
                  type="text" placeholder='Enter your name' className='w-full p-3 text-sm' required/>
                </div>
           </div>

           <div>
                <p mb-2 text-sm font-medium>Your email</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                  <img src={assets.email_icon} alt="" />
                  <input name = 'email' type="email" placeholder='Enter your email' className='w-full p-3 text-sm' required/>
                </div>
           </div>

           <div className='sm:col-span-2'>
                <p className='text-sm font-medium mb-2'>Message</p>
                <textarea  name = 'message' rows={8} placeholder = 'Enter your message' className='w-full p-3 outline-none rounded-lg border border-gray-300 dark:gray-600'></textarea>
           </div>

           <div>
            <button type = 'submit' className='w-max flex gap-2 text-sm bg-primary text-white 
            px-10 rounded-full py-3 cursor-pointer  hover:scale-105 transition-all'>
              submit <img src={assets.arrow_icon} alt="" className='w-3' />
            </button>
           </div>
     </form>
     </div>
  )
}

export default ReachUs