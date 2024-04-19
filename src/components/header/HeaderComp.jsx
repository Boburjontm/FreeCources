import React from 'react'
import { GrFormNextLink } from "react-icons/gr"
import SiteLogo from "../../../public/img/Logo.svg"


const HeaderComp = () => {
  return (
    <div className='container mx-auto'>
     <div className="bg-orange-400 flex mx-auto justify-center my-5 py-4 mx-6 rounded">
        <p className="text-white flex items-center gap-2 text-center">Free Courses 🌟 Sale Ends Soon, Get It Now <GrFormNextLink className=" text-white"/></p>
      </div>
      <div className="head__bottom container">
        <div className="navbar flex justify-around">
            <ul className=' flex gap-2'>
                <li className=''><img src={SiteLogo} alt="" /></li>
                <li className='items-center flex'><a href="#" className='p-3 hover:bg-[#F1F1F3] items-center'>Home</a></li>
                <li className='items-center flex'><a href="#" className='p-3 hover:bg-[#F1F1F3] items-center'>Courses</a></li>
                <li className='items-center flex'><a href="#" className='p-3 hover:bg-[#F1F1F3] items-center'>About Us</a></li>
                <li className='items-center flex'><a href="#" className='p-3 hover:bg-[#F1F1F3] items-center'>Pricing</a></li>
                <li className='items-center flex'><a href="#" className='p-3 hover:bg-[#F1F1F3] items-center'>Contact</a></li>
            </ul>
            <div className="signup">
                <button className='px-5 py-3 hover:bg-blue-600 rounded-lg  hover:text-white transition-all duration 2000 active:bg-green-600 '>Sign up</button>
                <button className='px-5 py-3 bg-orange-400 rounded-lg text-white hover:bg-red-600 transition-all duration 2000 active:bg-red-800'>Login</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default HeaderComp
