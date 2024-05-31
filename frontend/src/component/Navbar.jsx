import { Menu } from 'lucide-react'
import React from 'react'

function Navbar({userData}) {
  return (
    <div className='bg-black h-16 items-center px-10 w-full flex  justify-between'>
      <div className='text-white text- font-medium'>
         {userData && userData.username} 
      </div>
      <div className='text-white'>
         <Menu/>
      </div>
    </div>
  )
}

export default Navbar
