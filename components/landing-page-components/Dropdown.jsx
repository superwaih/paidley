import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import {GoChevronDown} from "react-icons/go"
import Link from 'next/link'


export default function Example() {
  return (
    <div className="bg-inherit w-full">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-md text-[#283341] px-4 py-2 gap-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Features
            <GoChevronDown
              className=" h-5 w-5 text-[#010F20] "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute 
          left-4 mt-8 w-[400px]  
          origin-top-right divide-y divide-gray-100
           rounded-md bg-white shadow-lg ring-1 p-3 space-y-4
           ring-black ring-opacity-5 focus:outline-none">
            <div className="flex w-full gap-4">
              <Menu.Item>
               <>
               <Link href="/features/convert">
                  <div className='flex flex-col  w-full'>
                     <h3 className='normal-text font-semibold'>Foreign Accounts</h3>
                     <p className='gray-text max-w-[200px]'>Get a free Dollar, Pound, Euro and more.</p>
                
                  </div>
               
               </Link>
               
               </>
              </Menu.Item>

              <Menu.Item>
               <>
               <Link href="/features/transfer">
                  <div className=' flex flex-col w-full'>
                     <h3 className='normal-text font-semibold'>Money Transfer</h3>
                     <p className='gray-text max-w-[200px]'>Receive payments from anywhere.</p>
                
                  </div>
               
               </Link>
               
               </>
              </Menu.Item>
             
            </div>
            <div className="flex  w-full gap-4">
            <Menu.Item>
               <>
               <Link href="/features">
                  <div className='w-full flex flex-col'>
                     <h3 className='normal-text font-semibold'>Virtual Cards</h3>
                     <p className='gray-text max-w-[200px]'>Shop and pay for your online bills anywhere.</p>
                
                  </div>
               
               </Link>
               
               </>
              </Menu.Item>

              <Menu.Item>
               <>
               <Link href="/features/virtual">
                  <div className=' flex flex-col '>
                     <h3 className='normal-text font-semibold w-full'>Currency Exchange</h3>
                     <p className='gray-text max-w-[200px]'>Receive payments from anywhere and convert currency.</p>
                
                  </div>
               
               </Link>
               
               </>
              </Menu.Item>
            </div>
           
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}


