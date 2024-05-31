import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios'
import AddBlogBtn from '../component/AddBlogBtn'

function Home() {

  const [userData , setUserData] = useState(null)

  useEffect(()=>{
    const getCurrentUser = async () =>{
        try {
            const response = await axios.get('http://localhost:8000/api/v1/user/getCurrentUser',{
              headers : {
                Authorization : 'Bearer' + localStorage.getItem('accessToke')
              }
            })
            if(response){
              console.log(response , "this is log console")
              setUserData(response.data.user)
            }
        } catch (error) {
           console.log(error , "error when current user fetched")
        }
    }
    getCurrentUser()
  },[])

  console.log(userData)


  return (
    <div className='text-center bg-gray-300 h-screen w-full'>
      <div className='w-full flex justify-center'>
           <AddBlogBtn/>
      </div>      
    </div>
  )
}

export default Home
