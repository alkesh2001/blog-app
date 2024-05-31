import React from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'

function AddBlogBtn() {
  return (
    <div className=' pt-10 w-4/5'>
       <div className='py-5 px-5 flex  justify-between'>
          <div className=''>
            <Link to={'/AddBlog'}>
              <Button context={"Add-blog"} className="bg-black text-white px-4 py-2 rounded-lg text-lg font-medium" />
            </Link>
          </div>
          <div>
            <Button context={'My-Blog'} className="bg-black text-white px-4 py-2 rounded-lg text-lg font-medium"/>
          </div>
       </div>
    </div>
  )
}

export default AddBlogBtn
