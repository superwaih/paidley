import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import imageOne from "../../public/svgs/rocket.svg"
import LogoOne from "../../public/svgs/logo.svg"
import LogoTwo from "../../public/svgs/logo-white.svg"
import { ArrowIcon } from "@/public/svgs/Arrow-Right";
import useWindowDimensions from "@/hooks/useWindowDimension";

export function GetStartedModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const{windowDimensions} = useWindowDimensions()

  console.log(windowDimensions)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 bg-[#82C0FC]"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed  inset-0 overflow-y-auto">
          <div className="flex  min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-[980px] min-h-[300px] transform overflow-hidden rounded-2xl bg-[#E8F7FD] px-4 py-8 md:p-12 text-left
              
              justify-evenly items-center
              align-middle shadow-xl transition-all">
             
             <div className="flexible space-y-4">
             <div className="flex md:hidden w-full items-start justify-start ">
               <Image
                width={0}
                height={0}
                src={LogoOne}
                alt=""
               />
               </div>
             <div className="mt-2 flexible w-full 
             justify-start items-start md:justify-center md:items-center">
                  <div className="flex justify-center flex-col space-y-6">
                    <h3 className="text-2xl md:text-5xl max-w-sm text-[#0582FA]">
                      Stay tuned we are launching soon
                    </h3>
                    <p className="font-semibold text-[#011A32]">
                      Be the first to know when we launch
                    </p>

                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#EAF0F6] border-[#306BB1] border-[1px] w-full rounded-[12px] p-3 md:p-4"
                        placeholder="Email"
                      />
                      <button 
                      onClick={() =>setIsOpen(false)}
                      
                      className="
                      bg-brand-color flex items-center 
                      gap-2 text-white text-sm p-2 outline-none rounded-r-[12px] border w-fit hover:bg-brand-color/50 hover:bg-[#FAFAFA] hover:border-[#306BB2]
                      
                      absolute right-0 top-0 bottom-0 ">
                        Count me in <ArrowIcon />
                      </button>
                    </div>
                  </div>
                </div>


                <div className="px-12  py-4 flex justify-center items-center md:justify-end md:items-end">
                  <Image width={0} height={0} src={imageOne} alt="" />
                </div>
             </div>
               

               <div className="hidden pt-12 md:flex h-full w-full items-end justify-end ">
               <Image
                width={0}
                height={0}
                src={LogoTwo}
                alt=""
               />
               </div>


             

            
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

       
      </Dialog>
    </Transition>
  );
}
