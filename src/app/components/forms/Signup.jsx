const Signup = () => {
  return (
    <div className='lg:flex lg:justify-end lg:mr-12'>
      <form className='flex flex-col w-full lg:w-1/3 rounded bg-blue-50/50 lg:border lg:border-neutral-900/20 p-4 mb-2 lg:my-12'>
        <div className='leading-tight mb-4'>
          <h3 className='text-2xl font-semibold tracking-wider'>Sign Up Today</h3>
          <p>receive <span className='text-red-800 font-bold'>15&#37; off</span> your first order!</p>
        </div>
        <div className='flrx flex-col md:flex-row space-y-3'>
          <div className='lg:flex lg:gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='first-name'>First Name</label>
              <input type='text' name='first-name' className='border border-neutral-900/20 text-black outline-none px-1' required />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='last-name'>Last Name</label>
              <input type='text' name='last-name' className='border border-neutral-900/20 text-black outline-none px-1' required />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' className='border border-neutral-900/20 text-black outline-none px-1' required />
          </div>
          {/* <div className='flex gap-1 items-center text-sm'>
          <input type='checkbox' name='age-check' />
          <label htmlFor='age-check'>I am at least 18 years of age.</label>
        </div> */}
          <button className='w-full py-1 px-4 text-neutral-900 bg-emerald-400/70 rounded'>Sign Me Up</button>
        </div>
        <em className='text-xs py-4'>&dagger;&nbsp;We will never share or sell your information.</em>
      </form>
    </div>
  )
}

export default Signup