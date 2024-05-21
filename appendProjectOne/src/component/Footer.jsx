import React from 'react'
import {FaInstagram,FaTwitter,FaFacebook,
    FaGithubSquare,FaDribbbleSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-white px-4 py-16 gap-8 grid lg:grid-cols-3 '>
     
     <div>
     <h1 className='w-full text-3xl font-bold text-[#00df91]'>REACT .</h1>
     <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eveniet!</p>
     <div className='flex justify-between gap-4'>
        <FaDribbbleSquare size={30}  />
        <FaFacebook size={30}  />
        <FaInstagram size={30} />
        <FaGithubSquare size={30} />
        <FaTwitter size={30} />
        
     </div>
     </div>

     <div className='lg:col-span-2  text-center  items-center
     flex justify-between'>
        <div>
            <ul><li>Analytics</li>
            <li>Marketing</li>
            <li>Solutions</li>
            <li>Insight</li>
            </ul>
        </div>
        <div>
            <ul><li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>prees</li>
            </ul>
        </div>
        <div>
            <ul><li>Analytics</li>
            <li>Marketing</li>
            <li>Solutions</li>
            <li>Insight</li>
            </ul>
        </div>
        
        
     </div>
   

    </div>
  )
}

export default Footer
