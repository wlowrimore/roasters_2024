import React from 'react'

const Signup = () => {
  return (
    <form className='flex flex-col w-full p-4 bg-yellow-900/60 mb-2'>
      <div className='leading-tight mb-4'>
        <h3 className='text-2xl font-semibold tracking-wider'>Sign Up Today</h3>
        <p>and receive 15&#37; off your first order!</p>
      </div>
      <div className='flrx flex-col md:flex-row space-y-3'>
        <div className='flex flex-col'>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' name='first-name' className='rounded text-black outline-none px-1' required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' name='last-name' className='rounded text-black outline-none px-1' required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='rounded text-black outline-none px-1' required />
        </div>
        <div className='flex gap-1 items-center text-sm'>
          <input type='checkbox' name='age-check' />
          <label htmlFor='age-check'>I am at least 18 years of age.</label>
        </div>
        <button className='w-full py-1 px-4 text-[#EFCA99] bg-yellow-800 rounded'>Sign Me Up</button>
      </div>
      <em className='text-xs py-4'>&dagger;&nbsp;We will never share or sell your information.</em>
    </form>
  )
}

export default Signup