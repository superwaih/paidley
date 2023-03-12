import React from 'react'
import Image from 'next/image'
import Logo from "../../public/svgs/logo.svg"
import {  AiOutlineYoutube } from 'react-icons/ai'
import {FiTwitter, FiFacebook} from "react-icons/fi"
import {BsInstagram} from "react-icons/bs"
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='bg-[#E8F7FD] mt-8'>
      <div className='m-auto w-[80%] py-6'>
       <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 py-6 w-full'>
        
        <div className='flex flex-col space-y-3'>
          <h5 className='text-[#283341] font-semibold'>Company</h5>
          <ul className='flex flex-col space-y-3'>
            <li className='text-[14px] text-[#283341] cursor-pointer'>
              <Link href="/features">
                Features
              </Link>
            </li>
            <li className='text-[14px] text-[#283341] cursor-pointer'>
                <Link href="/about-us">
                About Us
              </Link>
            </li>
            <li className='text-[14px] text-[#283341] cursor-pointer'>
            <Link href="/faq">
          FAQs          
                  </Link>

            </li>

          </ul>
        </div>

        <div className='flex flex-col space-y-3'>
          <h5 className='text-[#283341] font-semibold'>Legal</h5>
          <ul className='flex flex-col space-y-3'>
            <li className='text-[14px] text-[#283341]'>Acceptable Use Policy</li>
            <li className='text-[14px] text-[#283341]'>Terms of Service</li>
            <li className='text-[14px] text-[#283341]'>Privacy Policy</li>

          </ul>
        </div>
        <div className='flex flex-col space-y-3'>
          <h5 className='text-[#283341] font-semibold'>Products</h5>
          <ul className='flex flex-col space-y-3'>
            <li className='text-[14px] text-[#283341]'>Foreign Accounts</li>
            <li className='text-[14px] text-[#283341]'>Virtual Cards</li>
            <li className='text-[14px] text-[#283341]'>Currency Exchange</li>
            <li className='text-[14px] text-[#283341]'>Money Transfer</li>


          </ul>
        </div>
        <div className='flex flex-col space-y-3'>
          <h5 className='text-[#283341] font-semibold'>Support</h5>
          <ul className='flex flex-col space-y-3'>
            <li className='text-[14px] text-[#283341]'>Help Center</li>
          </ul>
        </div>

        <div className='flex flex-col space-y-3'>
          <h5 className='text-[#283341] font-semibold'>Contact Us</h5>
           <p className='text-[14px] text-[#283341]'>Support@Paidley.co</p>
          <ul className='flex flex-row gap-2'>
            <li className='text-[16px] cursor-pointer'>
              <FiTwitter className='text-[#074DA2]' />
              {/* <AiOutlineTwitter c /> */}
            </li>
            <li className='text-[16px] cursor-pointer'>
              <BsInstagram className='text-[#074DA2]' />
            </li>
            <li className='text-[16px] cursor-pointer'>
              <FiFacebook className='text-[#074DA2]' />
            </li>

            <li className='text-[16px] cursor-pointer'>
              <AiOutlineYoutube className='text-[#074DA2]' />
            </li>
            

          </ul>
        </div>
       

        
        

       </div>
       <div className='py-2 border-t md:flex-row flex-col flex items-center gap-3 md:gap-32  border-gray-300'>
        <Image
          width={0}
          height={0}
          src={Logo}
          alt=""
        />
        <p>All Rights Reserved</p>

       </div>
      </div>
    </footer>
  )
}

export default Footer