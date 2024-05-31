import React from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='h-screen w-screen'>
        <div className='flex w-full h-full justify-center items-center'>
            <div className='bg-gray-400 py-5 px-5 rounded-lg'>
                <div className='text-xl text-center font-medium px-5 pb-5'>
                    welcome to blog-App
                </div>5
                <div className='text-center pb-4'>
                    already account <span className='font-medium'><Link to={"/"}>login</Link></span> 
                </div>
                <div className='grid px-5 justify-center items-center gap-3 '>
                   <Input className="font-medium w-72" placeholder="username"/>
                   <Input  className="font-medium w-72" placeholder="fullname"/>
                   <Input  className="font-medium w-72" type="email" placeholder="email"/>
                   <Input  className="font-medium w-72" type="password" placeholder="password"/>
                </div>
                <div className='flex justify-center py-5'>
                    <Button context={'SignUp'} className="bg-black text-white py-1 px-3 rounded-lg "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp