import React, { useState } from 'react'

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {

    const[nav,setNav]=useState(true);

    const handleNavigation=()=>{
        setNav(!nav)

    }

  return (
    <div className='text-white flex gap-4 justify-between max-w-[1200px] h-24 items-center px-4 mx-auto '>
      <h1 className='w-full text-3xl font-bold text-[#00df91]'>REACT .</h1>
       
        <ul className=' hidden md:flex gap-4 '>
            <li ><a href="">Home</a></li>
            <li><a href="">Compnay</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>


        <div onClick={handleNavigation} className='block md:hidden'>
           {!nav ? <AiOutlineClose/> : <AiOutlineMenu/> }
           
        </div>

        <div className={!nav ? 'fixed left-0 top-0 h-full ease-in-out duration-500  w-[50%] border-r border-r-gray-100' : "fixed left-[-100%]"}>
            <ul className='pt-24 uppercase '>
            <li className='p-2'><a href="">Home</a></li>
            <li className='p-2'><a href="">Compnay</a></li>
            <li className='p-2'><a href="">Resources</a></li>
            <li className='p-2'><a href="">About</a></li>
            <li className='p-2'><a href="">Contact</a></li>

            </ul>
        </div>
     




    </div>
  )
}

export default NavBar
