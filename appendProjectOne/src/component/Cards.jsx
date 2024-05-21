import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className=' w-full py-16 bg-white px-4 text-white'>

       <div className='max-w-[1240px]   mx-auto  grid md:grid-cols-3 gap-8' >
        <div className='w-full border shadow-xl flex  flex-col p-4 my-2 rounded-lg  
        text-center text-[black] hover:scale-105 duration-300'> 
            <img className='  w-20 mx-auto mt-[3rem]' src={Single} alt="single-image" />
            <h2 className=' text-black py-2 text-2xl font-bold text-center '>Single User</h2>
            <p className='text-black '>$140</p>
            <div>
                <p className='py-2 '>500 GB Storage</p>
                <p className='py-2'>1 Granted User</p>
                <p className='py-2'> Send up to 2 GB</p>
            </div>
            <button className=' bg-[#00df91] w-[200px] rounded-md h-[50px]
          my-6 mx-auto font-bold text-black'>Start Trail</button>
        </div>
        <div className='w-full border shadow-xl flex  flex-col   md:my-0  p-4 my-2 rounded-lg  
        text-center text-[black] hover:scale-105 duration-300'> 
            <img className='  w-20 mx-auto mt-[3rem]' src={Double} alt="double-image" />
            <h2 className=' text-black py-2 text-2xl font-bold text-center '>Single User</h2>
            <p className='text-black '>$140</p>
            <div>
                <p className='py-2 '>500 GB Storage</p>
                <p className='py-2'>1 Granted User</p>
                <p className='py-2'> Send up to 2 GB</p>
            </div>
            <button className=' bg-[#00df91] w-[200px] rounded-md h-[50px]
          my-6 mx-auto font-bold text-black'>Start Trail</button>
        </div>
        <div className='w-full border shadow-xl flex  flex-col p-4 my-2 rounded-lg  
        text-center text-[black] hover:scale-105 duration-300'> 
            <img className='  w-20 mx-auto mt-[3rem]' src={Triple} alt="triple-image" />
            <h2 className=' text-black py-2 text-2xl font-bold text-center '>Single User</h2>
            <p className='text-black '>$140</p>
            <div>
                <p className='py-2 '>500 GB Storage</p>
                <p className='py-2'>1 Granted User</p>
                <p className='py-2'> Send up to 2 GB</p>
            </div>
            <button className=' bg-[#00df91] w-[200px] rounded-md h-[50px]
          my-6 mx-auto font-bold text-black'>Start Trail</button>
        </div>
       
        
       </div>
      
    </div>
  )
}

export default Cards
