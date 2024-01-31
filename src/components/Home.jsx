import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Home() {
  const navigate = useNavigate()
  const signUp = () => {
   toast.success("signup successfully");
    navigate('/contact')
  }
  return (
    <>
    <div>Home</div>
    <button onClick={signUp} className='bg-[#3f3f3f] text-[#fff]'>signUp</button>
    </>
  )
}

export default Home