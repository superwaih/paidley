import React, { useState } from 'react'
import {AiOutlineMinusSquare, AiOutlinePlusSquare} from "react-icons/ai"

const SingleFaq = ({question, answer}) => {
    const[showFaq, setShowFaq] = useState(false)
  return (
    <div
    onClick={() => setShowFaq(!showFaq)}
    className='p-4 border-[#CDDBEC] cursor-pointer border shadow-sm rounded-md'>
       <div className= {showFaq ? 'flex justify-between border-b border-[#306BB1] ' :'flex justify-between'}>
       <h3 className={showFaq ? 'font-semibold text-[12px] text-[#306BB1]'
         : 'font-semibold text-[12px] text-[#4C5561]'} >{question}</h3>
         <button className=''>
            {showFaq ? <AiOutlineMinusSquare className='text-[#306BB1]'  /> : <AiOutlinePlusSquare className='text-[#4C5561]' />}
         </button>
       </div>

      {showFaq ? <div className='py-4 text-[#4C5561]'>
        <p>{answer}</p>
       </div>
 : null } 

    </div>
  )
}

export default SingleFaq