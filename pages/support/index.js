import Layout from '@/components/Layout'
import React from 'react'

const SupportPage = () => {
  return (
    <Layout>

        <div className='bg-hero bg-cover bg-center lg:h-[648px]
    bg-no-repeat relative
    min-h-[40vh]
    '>
            <div className='flex m-auto w-[80%] space-y-6 flex-col justify-center items-center pt-20 lg:pt-32'>
                <h3 className=' text-2xl md:text-5xl font-semibold text-white'>Contact Us</h3>
                <p className='text-xl text-center max-w-md leading-16 text-white'>Lets start something great together, get in touch with us today</p>
            </div>
            
            </div>

            <div className='m-auto w-[80%] flexible py-8'>
                <div className='horizontal w-full space-y-6'>
                <h3 className='normal-text text-3xl'>Get in touch</h3>
                <div>
                    <h3 className='normal-text'>Phone</h3>
                    <p className='gray-text'>+234 8139 4389 438 & +234 91 034 5473 76</p>
                </div>

                <div className='horizontal space-y-3'>
                    <h3>
                        Email
                    </h3>
                    <p className='text-[#306BB1]'>Hello@paidley.com</p>
                    <p className='text-[#306BB1]'>Paidley@hello.com</p>
                    <p className='text-[#306BB1]'>Support@paidley.com</p>

                </div>

                <div>
                    <h3>Office</h3>
                    <p className='gray-text max-w-sm'>302, folabi street externally plot 102 London Nigeria </p>
                </div>
                </div>

                <div className='py-3 px-4 max-w-3xl rounded-md shadow-md '>
                    <h3 className='normal-text text-2xl'>Contact us</h3>
                    <form className='horizontal space-y-4' action="">
                        <div className='flex flexible gap-3'>
                        <div className='horizontal space-y-3 mt-3'>
                            <label className='normal-text' htmlFor="first-name">
                                First Name
                            </label>
                            <input className='border-#EAF0F6 border bg-[#EAF0F6] p-3 rounded-md' type="text" placeholder='Enter first Name' />
                        </div>
                        <div className='horizontal space-y-3 mt-3'>
                            <label className='normal-text' htmlFor="first-name">
                                First Name
                            </label>
                            <input className='border-#EAF0F6 border bg-[#EAF0F6] p-3 rounded-md' type="text" placeholder='Enter first Name' />
                        </div>
                        </div>

                        <div className='horizontal space-y-3 mt-3'>
                            <label className='normal-text' htmlFor="first-name">
                                Email Address
                            </label>
                            <input className='border-#EAF0F6 border bg-[#EAF0F6] p-3 rounded-md placeholder:text-gray-text focus:bg-white' type="text" placeholder='Enter Email address' />
                        </div>
                        <div className='horizontal space-y-3 mt-3'>
                            <label className='normal-text' htmlFor="first-name">
                               Phone Number
                            </label>
                            <input className='border-#EAF0F6 border bg-[#EAF0F6] p-3 rounded-md placeholder:text-gray-text focus:bg-white' type="text" placeholder='Enter Email address' />
                        </div>

                        <div className='horizontal space-y-3 mt-3'>
                            <label className='normal-text' htmlFor="first-name">
                                Email Address
                            </label>
                            <textarea className='border-#EAF0F6 border bg-[#EAF0F6] p-3 rounded-md placeholder:text-gray-text focus:bg-white' type="text" placeholder='Enter Email address' />

                            <div className='flex justify-end items-end'>
                                <button className='btn'>Send</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>

    </Layout>
  )
}

export default SupportPage