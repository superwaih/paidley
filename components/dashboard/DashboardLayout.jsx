import React from 'react'
import Sidebar from './Sidebar'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex relative  mx-auto  h-screen'>
        <div className='flex-4'>
          {/* Sidebar */}
          <Sidebar />
      </div>

        <div className='flex flex-1 overflow-y-auto scrollbar-hide w-full  flex-col bg-generalbg'>
      <div className=''>
           
        {children}
      </div>
      

        </div>
        
       <div>
       </div>
    </div>
  )
}

export default DashboardLayout