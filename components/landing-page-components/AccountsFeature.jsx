import { Accounts } from '@/utils/data'
import React from 'react'
import Card from './Card'
import Image from 'next/image'
import ImageOne from "../../public/images/usd-account.png"
import ImageTwo from "../../public/images/eur-account.png"
import ImageThree from "../../public/images/usd-account-big.png"
import ImageFour from "../../public/images/eur-account-big.png"
const AccountsFeature = () => {
  return (
    <div className='m-auto flex flex-col md:flex-row gap-12 justify-between  w-[80%] py-8'>
         <div className='md:hidden flex-col flex justify-between space-y-8'>
           <h3 className='font-semibold text-lg md:text-2xl leading-12'>Free USD and EUR accounts for all your international transactions</h3>
            <p className='text-[#4C5561] text-md md:text-lg leading-12'>Free USD and EUR accounts for all your international transactions</p>
           </div>
        <div className='grid w-full gap-5 grid-cols-1 xl:grid-cols-2'>
            {Accounts.map((account) => (
                <Card key={account.id} href={account.href} Icon={account.icon} feature={account.feature} desc={account.desc} />
            ))}
        </div>

        <div className='flex flex-col space-y-8 p-4'>
           <div className='flex flex-col justify-between space-y-8'>
           <h3 className='font-semibold text-lg md:text-2xl leading-12'>Free USD and EUR accounts for all your international transactions</h3>
            <p className='text-[#4C5561] text-md md:text-lg leading-12'>Free USD and EUR accounts for all your international transactions</p>
           </div>


            <div className='flex  md:hidden flex-row justify-between gap-4'>
                <Image
                    width={100}
                    height={100}
                    src={ImageOne}
                    alt=""
                />
                <Image
                    width={100}
                    height={100}
                    src={ImageTwo}
                    alt=""
                />


            </div>

            <div className='hidden md:flex md:flex-col xl:flex-row justify-between gap-4'>
                <Image
                    width={300}
                    height={30}
                    src={ImageThree}
                    alt=""
                />
                <Image
                    width={300}
                    height={300}
                    src={ImageFour}
                    alt=""
                />


            </div>
        </div>

        

    </div>
  )
}

export default AccountsFeature