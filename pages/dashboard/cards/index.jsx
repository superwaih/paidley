import DashboardLayout from '@/components/dashboard/DashboardLayout'
import SimpleNav from '@/components/dashboard/SimpleNav'
import { PhysicalCard } from '@/public/svgs/physical-card'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { useState } from 'react'
import CardSample from "../../../public/images/card-sample.png"
const CardsPage = () => {
  const router = useRouter()
  const[cardType, setCardType] = useState("physical")
  return (
    <DashboardLayout>
          <SimpleNav title={"virtual cards"} />

          <div className='px-8 '>
          <button className=' rounded-[12px] border text-brand-color hover:bg-brand-color hover:text-white duration-300 border-brand-color px-4 py-2'>Back</button>
          </div>

          <div className='flex px-8 justify-center items-center  w-full'>
          <div className='flex mt-[10px] md:mt-[90px]  rounded-md border  hover:[#F3F7FA] bg-white px-6 py-4 flex-col space-y-6 rouned-md shadow-md max-w-lg'>
           <div className=' justify-between w-full'>
           <div className='px-16 duration-300 gap-4 flex'>
           <button onClick={() => setCardType("physical")}  className={cardType === "physical" ? 'border-brand-color border-b-2' : 'gray-text'}>Physical Card</button>
            <button onClick={() => setCardType("virtual")} className={cardType === "virtual" ? 'border-brand-color border-b-2' : 'gray-text'}>Virtual Card</button>
           </div>

           </div>
            {/* <PhysicalCard /> */}
            <Image
              width={0}
              height={0}
              objectFit="cover"
              src={CardSample}
              alt=""
            />
            {/* <h3 className='font-bold  text-xl'>Send Money</h3>
            <p className='gray-text '>Select Transfer Method</p> */}


            <div className='flex flex-col gap-4'>
                    <button onClick={() => router.push("/dashboard/transfer/send-money")} className='btn-full rounded-[12px] duration-300'>Proceed</button>
                    <button 
                    onClick={() => router.back()}
                    className='text-[#306BB1] flex w-full justify-center font-semibold items-center text-center'>Cancel and go back</button>
              </div>
          </div>
        </div>
    </DashboardLayout>
  )
}

export default CardsPage