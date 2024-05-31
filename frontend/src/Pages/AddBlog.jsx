import React, { useState } from 'react'
import Button from '../component/Button'
import axios from 'axios'

function AddBlog() {


  const [value , setValue] = useState('')

  return (
    <div className=' bg-gray-200 flex justify-center h-screen w-full'>
      <div className='w-3/5'>
        <div className='px-10 py-10 flex justify-center'>  
           <textarea name="" onChange={(e)=> setValue(e.target.value)} id="" rows="10" className='w-full p-5 font-medium outline-none border border-gray-300 rounded-lg'/>
        </div>
        <div className='flex justify-end px-10'>
           <Button className='bg-black text-white rounded-lg font-medium px-3 py-2' context={"Add-Blog"}
                   onClike={ async ()=> {
                     const res = await axios.post()
                   }}
           />
        </div>
      </div>
    </div>
  )
}

export default AddBlog
