'use client'

import { useState } from 'react'

const SecondarySignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = { firstName, lastName, email }
    alert(`The following information has successfully been stored to your computer's local storage: First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Email: ${formData.email}`)

    console.log("Information captured from secondary guest book:", formData)

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
      <form onSubmit={handleFormSubmit} className='absolute top-0 right-0 h-full flex flex-col w-full lg:w-[34% p-6 mb-2 border-t border-neutral-800'>
        <div className='leading-tight mb-4'>
          <h3 className='text-sm md:text-lg lg:text-xl md:mb-4 lg:mb-6 tracking-wider'>Don&apos;t forget to sign our guest book for your<span className='text-blue-500 font-bold'> 15&#37; </span>savings.</h3>
        </div>
        <div className='flex-col md:flex-row space-y-5'>
          <div className='md:flex md:gap-6 xl:gap-10 space-y-5 md:space-y-0'>
            <div className='flex flex-col w-full'>

              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='border-b border-neutral-900/50 text-black outline-none px-1 w-full focus:placeholder:text-emerald-950 focus:placeholder:translate-x-[20rem] focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out focus:placeholder:text-xs focus:placeholder:opacity-10'
                placeholder='First Name'
                required
              />
            </div>
            <div className='flex flex-col w-full'>

              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='border-b border-neutral-900/50 text-black outline-none px-1 w-full focus:placeholder:text-emerald-950 focus:placeholder:translate-x-[20rem] focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out focus:placeholder:text-xs focus:placeholder:opacity-10'
                placeholder='Last Name'
                required
              />
            </div>
          </div>
          <div className='flex flex-col'>

            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-b border-neutral-900/50 text-black outline-none px-1 w-full focus:placeholder:text-emerald-950 focus:placeholder:translate-x-[20rem] focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out focus:placeholder:text-xs focus:placeholder:opacity-10'
              placeholder='Email'
              required
            />
          </div>
          <button className='w-full py-1 px-4 text-lg font-semibold text-neutral-700 bg-blue-400/70 rounded hover:bg-blue-400/50 hover:text-neutral-900/80 duration-300'>Send</button>
        </div>
        <em className='text-neutral-800 text-xs pt-2 pb-10'>&dagger;&nbsp;We will never share or sell your information.</em>
      </form>
    </div>
  )
}

export default SecondarySignup