import { useDashboardProvider } from "@/context/DashboardProvider";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./mobile-componets/MobileSidebar";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import {HiOutlineChevronDown} from "react-icons/hi"

const solutions = [
  {
    name: "My Profile",
    description: "Measure actions your users take",
    href: "/profile",
 
  },
  {
    name: "Logout",
    description: "Create your own targeted content",
    href: "##",
  },
 
];
const SimpleNav = ({ title, user }) => {
  const { showMenu, setShowMenu } = useDashboardProvider();
  return (
    <div className="relative">
      <div className="md:px-9 py-4 px-3">
        <div className="flex md:flex-row flex-row-reverse justify-between items-center">
          <h3 className="font-semibold hidden md:inline-block capitalize normal-text text-xl">
            {title}
          </h3>

          <div onClick={() => setShowMenu(!showMenu)} className="flex md:hidden duration-300 ">
            {showMenu ?<AiOutlineClose className="text-2xl text-red-400" />  :  <AiOutlineMenu className="text-3xl text-brand-color" />}
          </div>
          <div className="flex  items-center gap-1 md:gap-2">
            {/* <div className="md:w-12 w-8 h-8 md:h-12 rounded-full bg-brand-blue"></div> */}
            <div className="">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
            <div className="md:w-12 w-8 h-8 md:h-12 rounded-full bg-brand-blue"></div>

                      <span> John Okafor</span>
                      <HiOutlineChevronDown
                        className={`${open ? "" : "text-opacity-70"}
                   text-black text-xl transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/4 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative bg-white p-5">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className=" flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                  <item.icon aria-hidden="true" />
                                </div> */}
                                
                                <div className="">
                                  <p className="text-md font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  
                                </div>
                              </Link>
                            ))}
                          </div>
                       
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>


          </div>
        </div>
      </div>

      {showMenu && <MobileSidebar />}
    </div>
  );
};

export default SimpleNav;

