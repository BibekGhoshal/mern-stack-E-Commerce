import React from 'react'
import { bazar_logo_white, payment } from '../assets';
import {ImGithub} from "react-icons/im";
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaHome} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {BsPersonFill, BsPaypal} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            {/* logoIcon start */}
            <div className='flex flex-col gap-5'>
              <img className='w-32' src={bazar_logo_white} alt="Whitelogo" />
              <p className='text-white text-sm tracking-wide'>&copy; Bazaar.com</p>
              <img className='w-40' src={payment} alt="payment_logo" />
              <div className='flex gap-3 text-lg text-gray-400'>
                <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
                <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                <FaHome className='hover:text-white duration-300 cursor-pointer'/>
              </div>
            </div>
            {/* logoIcon End */}
            {/* Locateus start */}
            <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
            <div className='text-base flex flex-col gap-2'>
              <p>MBD,Ruwi, Muscat-Oman</p>
              <p>Mobile: 4582852245</p>
              <p>Phone: 7789565632</p>
              <p>email: bazar@gmail.com</p>
            </div>
            </div>
            {/* Locateus end */}
            {/* profile start */}
            <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
            <div className='flex flex-col gap-2 text-base'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span>my account</p>
            
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span>check out</p>
      
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn/></span>order tracking</p>
            
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome/></span>help & support</p>
            
            </div>
            </div>
             {/* profile end */}
             {/* subscribe start */}
             <div className='flex flex-col justify-center'>
              <input className='bg-transparent border px-4 py-2 text-sm' type='text' placeholder='e-mail'/>
              <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
             </div>
             {/* subscribe end */}
        </div>
    </div>
  )
}

export default Footer