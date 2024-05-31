import React, { useState } from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import axios from 'axios'
import { useNavigate , Link } from 'react-router-dom'

function Login() {
 
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate()
    console.log(email,password)
 
  return (
    <div className='h-screen w-screen'>
        <div className='flex w-full h-full justify-center items-center'>
            <div className='bg-gray-400 py-5 px-5 rounded-lg'>
                <div className='text-xl text-center font-medium px-5 pb-5'>
                    welcome to blog-App
                </div>
                <div className='grid px-5 justify-center items-center gap-3'>
                   <Input  className="font-medium w-72" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"/>
                   <Input  className="font-medium w-72" onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"/>
                </div>
                <div className='flex justify-center pt-5'>
                    <Button context={'login'} className="bg-black text-white py-1 px-3 rounded-lg " 
                        onClick={ async ()=>{
                            const data = await axios.post("http://localhost:8000/api/v1/user/login",
                            {email, password})
                            if(data){
                                console.log(data)
                                localStorage.setItem('accessToke' ,data.data.accessToken)
                            }
                            navigate('/Home')
                        }}
                    />
                </div>
                <div className='text-center py-2'>
                    create account <span className='text-black-400 font-medium'><Link to={"/SignUp"}>SignUp</Link></span>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Login
