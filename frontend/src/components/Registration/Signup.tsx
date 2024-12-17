import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



function Signup() {

  type inputType = {
    email: string
    password: string
    username: string
  }

  const initialState: inputType = {
    email: "",
    password: "",
    username: ""
  }


  const [isPswrdHidden, setpswrdHidden] = useState('text')
  const [InputValues, setInputValues] = useState<inputType>(initialState)
  const [Emailerr, setEmailErr] = useState(" ")
  const navigate= useNavigate()

  const HandleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...InputValues, [name]: value })
    setEmailErr(" ")
  }
  const HandleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //make post request
    axios.defaults.withCredentials = true
    axios.defaults.baseURL = 'http://localhost:3000'

    await axios.post('/register', {InputValues})
    .then((response)=>{
      console.log(response)
      if(response.data){
        toast.success(response.data.message, {duration: 4000})
        navigate('/')
      }
    }).catch((err)=>{
        setEmailErr(err.response.data.error)
    })
   
  }

  const HandlepasswordVisible = () => {
    setpswrdHidden(isPswrdHidden === 'text' ? "password" : "text")
  }
  return (
    <>
      <div className='bg-[#CBC3E3] border-2 h-[100vh]'>
        <div className=' w-[880px] sm:w-full h-[590px] m-auto mt-10 sm:mt-0 shadow-2xl   flex items-center  '>
          <form onSubmit={HandleSubmit} action="" className='  hero overflow-hidden w-[455px] relative p-6 mt-4 bg-transparent shadow-2xl '>
            <p className='text-sm text-purple-600 relative '>Your Logo</p>
            <h1 className='font-bold text-4xl'>SignUp</h1>


            <div className='flex flex-col w-[335px] z-50  mt-4'>
              <label className='font-bold' htmlFor="email">Username</label>
              <input onChange={HandleValues} className='h-10 rounded-md pl-4 text-black outline-none' type="text" placeholder='username' name='username' />
            </div>

            <div className='flex flex-col w-[335px] z-50  mt-4'>
              <label className='font-bold' htmlFor="email">Email</label>
              <input onChange={HandleValues} className='h-10 rounded-md pl-4 text-black outline-none' type="email" placeholder='username@gmail.com' name='email' />
              <span className='text-xs  w-fit text-red-900 font-bold ml-2'>{Emailerr}</span>
            </div>

            <div className='flex flex-col w-[335px] z-50  my-4'>
              <label className='font-bold' htmlFor="password">Password</label>
              <div className='flex items-center relative'>
                <input onChange={HandleValues} className='h-10 rounded-md pl-4 text-black w-full outline-none' type={isPswrdHidden} name="password" placeholder='password' />
                <FaEye onClick={HandlepasswordVisible} className='absolute right-0 mr-4 cursor-pointer' />
                {isPswrdHidden === "text" ? <FaEye onClick={HandlepasswordVisible} className='absolute right-0 mr-4 cursor-pointer' /> : <FaEyeSlash onClick={HandlepasswordVisible} className='absolute right-0 mr-4 cursor-pointer' />
                }
              </div>

            </div>

            <button className='w-[335px] z-50 h-[32px] bg-purple-500 text-white my-4 rounded-sm cursor-pointer border-2 border-purple-900 font-semibold '>SignUp</button>
            <p className='text-sm my-4 w-80 text-center'> Already have an account? <Link to={'/'} className='text-red-900 cursor-pointer relative'>LogIn Now</Link></p>

          </form>
          <div className='noOpacity w-[455px] h-[400px] relative sm:hidden  '></div>

        </div>

      </div>
    </>
  )
}

export default Signup