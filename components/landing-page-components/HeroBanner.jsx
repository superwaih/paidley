import React from 'react'
import Hero from "../../public/images/hero.png"
import Image from 'next/image'
import { ArrowIcon } from '@/public/svgs/Arrow-Right'
const HeroBanner = () => {
  return (
    <div className='w-full bg-[#E8F7FD] pt-16 pb-8' >
        <div className='m-auto flex space-y-5 flex-col lg:flex-row justify-between w-[80%]'>
        <div className="hero__text w-full lg:w-1/2 flex flex-col space-y-6">
            <h3 className='text-brand-blue leading-16 max-w-2xl font-semibold text-4xl'>Expand your horizons, Invest, spend and exchange currencies globally.</h3>

            <p className='text-[#283341] leading-16 max-w-2xl'>
            Paidley is a financial technology company that develops and operates payment services, including virtual debit cards, foreign currency bank accounts with best low cost exchange rates and money services all from a smartphone app. Make easy international payments, send money across borders.
            </p>

            <button className='bg-brand-color flex items-center gap-4 text-white p-4 rounded-lg w-fit'>
                Get Started <ArrowIcon /> </button>
        </div>

        <div className='hero__image w-full lg:w-1/2 flex items-center justify-center lg:items-end lg:justify-end'>
            <Image
                width={0}
                height={0}
                src={Hero}
                alt=""
            />
        </div>
        
        </div>    
    </div>
  )
}

export default HeroBanner