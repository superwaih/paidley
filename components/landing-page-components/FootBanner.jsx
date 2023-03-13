import React from 'react'

const FootBanner = () => {
  return (
    <section className='bg-[#E8F7FD] '>
        <div className='m-auto flex flex-col space-y-5 items-center justify-center text-center w-[80%] md:w-[50%] py-8'>
                <h3 className='text-2xl md:text-4xl font-semibold '>Begin to Enjoy Borderless Financial Freedom</h3>
                <p className='text-lg gray-text  max-w-md'>Open an account today with paidley to begin to enjoy the benefits</p>
                <button className='btn'>Create Account</button>
        </div>

    </section>
  )
}

export default FootBanner