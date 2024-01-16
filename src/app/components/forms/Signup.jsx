'use client'

import { useState } from 'react'
import Image from "next/image"
import CoffeeCrop from '/public/images/test-images/coffee_crop_columbia.webp'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = { firstName, lastName, email }
    alert(`The following information has successfully been stored to your computer's local storage: First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Email: ${formData.email}`)

    console.log("Information captured from main guest book:", formData)

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("First Name", firstName);
      localStorage.setItem('Last Name', lastName);
      localStorage.setItem('Email', email);
    }

    setFirstName('')
    setLastName('')
    setEmail('')
  }

  return (
    <div className='relative md:mx-4 lg:mx-16 md:mt-[0.05rem] lg:mb-12'>
      <div className='flex mb-2 w-full bg-neutral-900/90'>
        <Image
          priority
          src={CoffeeCrop}
          alt='columbian coffee crop'
          widht={500}
          height={500}
          className='h-[24rem] md:h-[19.2rem] lg:h-[21rem] object-cover w-full opacity-30'
        />
      </div>
      <form onSubmit={handleFormSubmit} className='absolute top-0 right-0 h-full flex flex-col w-full lg:w-[34%] bg-blue-50/20 p-6 mb-2'>
        <div className='text-emerald-100 leading-tight mb-4 space-y-3'>
          <h3 className='text-2xl font-semibold tracking-wider'>Sign Our Guest Book</h3>
          <p>receive <span className='text-yellow-300 font-bold'>15&#37; off</span> your first order!</p>
        </div>
        <div className='text-emerald-100 flex-col md:flex-row space-y-3'>
          <div className='md:flex md:gap-2 space-y-3 md:space-y-0'>
            <div className='flex flex-col w-full'>
              <label htmlFor='first-name'>First Name</label>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='border border-neutral-900/20 text-black outline-none px-1 w-full'
                required
              />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='last-name'>Last Name</label>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='border border-neutral-900/20 text-black outline-none px-1 w-full'
                required
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border border-neutral-900/20 text-black outline-none px-1'
              required
            />
          </div>
          <button className='w-full py-1 px-4 text-lg font-semibold text-neutral-900 bg-emerald-400/70 rounded hover:bg-emerald-400/50 hover:text-neutral-900/70 duration-300'>Get my 15&#37; off!</button>
        </div>
        <em className='text-emerald-100 text-xs py-4 xl:mt-4'>&dagger;&nbsp;We will never share or sell your information.</em>
      </form>
      <div className='w-full lg:w-[65%] hidden lg:flex flex-col items-center p-4 absolute lg:right-[33%] xl:right-[34%] 2xl:right-[34%] lg:top-20 text-2xl text-white'>
        <p className='w-1/2 lg:w-full 2xl:w-3/4'>Don&apos;t know where to begin?  Let us help.  A short questionaire will guide you from the crop to the cup.</p>
        <div className='flex justify-center'>
          <button className='w-fit lg:mt-6 lg:mr-8 py-1 px-6 text-xl bg-yellow-800 rounded outline-none hover:opacity-70 duration-300'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Signup