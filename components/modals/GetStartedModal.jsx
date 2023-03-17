import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import imageOne from "../../public/images/stay-tuned.png";
import imageTwo from "../../public/images/stay-tuned-small.png";
import { ArrowIcon } from "@/public/svgs/Arrow-Right";

export function GetStartedModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
              <Dialog.Panel className="max-w-[980px] min-h-[600px] transform overflow-hidden flexible rounded-2xl bg-[#E8F7FD] p-12 text-left
              
              justify-evenly items-center
              align-middle shadow-xl transition-all">
                <div className="mt-2 flexible justify-center items-center">
                  <div className="flex justify-center flex-col space-y-6">
                    <h3 className="text-xl md:text-5xl max-w-md text-[#0582FA]">
                      Stay tuned we are launching soon
                    </h3>
                    <p className="font-semibold text-[#011A32]">
                      Be the first to know when we launch
                    </p>

                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#EAF0F6] border-[#306BB1] border-[1px] w-full rounded-[12px] p-4"
                        placeholder="Enter your Email"
                      />
                      <button className="
                      bg-brand-color flex items-center gap-3 text-white p-3 rounded-r-[12px] border w-fit hover:bg-brand-color/50 hover:bg-[#FAFAFA] hover:border-[#306BB2]
                      
                      absolute right-0 top-0 bottom-0 ">
                        Count me in <ArrowIcon />
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div> */}

                <div className="px-12">
                  <Image width={0} height={0} src={imageOne} alt="" />
                </div>
                <div className="hidden">
                  <Image width={300} height={300} src={imageOne} alt="" />
                </div>

               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
