import React from 'react'

const NewsLatter = () => {
  return (
    <div className='w-full py-16 text-white'> 

    <div className='max-w-[1240px] mx-auto grid  lg:grid-cols-3'>
      <div className='lg:col-span-2 my-4'>   <h1 className='md:text-4xl
       sm:text-3xl text-2xl py-2 font-bold '>Want tips & Tricks to optimize your flow?</h1>
      <p>Sign up to your newlatter and stay up to date</p></div>

      <div className='my-4'>
        
         <div className='flex flex-col  sm:flex-row items-center justify-between w-full ' >
            <input className=' w-full rounded-md mr-2 p-2 ' type="email" placeholder='Enter Email' />
            <button className='bg-[#00df91]  w-[150px] rounded-md h-[50px]
          my-6 mx-auto font-bold text-black ' >Notify Me</button>

        </div>
         <p >Lorem ipsum
            Consequatur, libero.
            <span className='text-[#00df91]  font-bold'>Privacy policy</span></p>
        
      


     </div>
      

         
    </div>


      
    </div>
  )
}

export default NewsLatter
