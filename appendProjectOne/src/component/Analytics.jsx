import React from 'react'
import laptopImage from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-20 px-4 '>
      <div className='max-w-[1250px] grid md:grid-cols-2 justify-items-center mx-auto '>
        <img className='w-[500px] mx-auto my-4'  src={laptopImage} alt="laptop-image" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df91] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Manage Data Analytics Centerlly</h1>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sint debitis ratione 
                quisquam officiis vero, ducimus aspernatur corporis nulla dolorum sed.</p>
            <button className=' text-[#00df91] mx-auto md:mx-0  bg-black p-2 my-2
             w-[150px] rounded-md'>Get Started</button>
        </div>

      </div>
      
    </div>
  )
}

export default Analytics
