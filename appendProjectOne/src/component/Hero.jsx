import React from 'react'
import { ReactTyped } from "react-typed"; 

const Hero = () => {
  return (
    <div className='text-white'>

        <div className='max-w-[800px] mt-[-96px] text-center w-full h-screen mx-auto 
         flex flex-col justify-center '> 
        
         <p className='text-[#00df91] font-bold p-2  '>GROWING WITH DATA ANALYTICS!</p>
         <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>

         <div className='flex justify-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold '>fast,flexible finacing for</p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl pl-3 font-bold' 
            strings={['BTB','BTC','Saas']} typeSpeed={120} 
             backSpeed={140} loop />

         </div>

         <p className=' text-gray-500 pt-5 text-xl md:text-2xl font-bold'>
            Monitor your data analytics to increase revenu BTB, BTC & SAAS </p>

         <button className='bg-[#00df91] w-[200px] rounded-md h-[50px]
          my-6 mx-auto font-bold text-black '> Get Started</button>
        
        </div>
      
    </div>
  )
}

export default Hero
