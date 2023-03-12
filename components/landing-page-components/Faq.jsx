import { Faqs } from '@/utils/data'
import React from 'react'
import SingleFaq from './SingleFaq'

const Faq = () => {
  return (
    <div className='w-[80%] py-8 md:w-[60%] m-auto'>
        <h3 className='text-center uppercase text-2xl mb-4 font-bold'>Faq</h3>
        <div>
            <div className="faq flex flex-col gap-3">
                {Faqs.map((faq) =>(
                    <SingleFaq key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq