import Image from "next/image"
import CoffeeCrop from '/public/images/test-images/coffee_crop_columbia.webp'
// import CTAFeatures from "../CTAFeatures"

const Signup = () => {
  return (
    <div className='relative mx-12 mt-2 mb-2'>
      <div className='flex mb-2 w-full bg-neutral-900/90'>
        <Image
          src={CoffeeCrop}
          alt='columbian coffee crop'
          widht={500}
          height={500}
          className='h-[19.2rem] object-cover w-full opacity-30'
        />
      </div>
      {/* <div className='absolute left-32'><CTAFeatures /></div> */}
      <form className='absolute top-0 right-0 h-full flex flex-col w-full lg:w-1/3 bg-blue-50/20 p-4 mb-2'>
        <div className='text-emerald-100 leading-tight mb-4'>
          <h3 className='text-2xl font-semibold tracking-wider'>Sign Up Today</h3>
          <p>receive <span className='text-yellow-300 font-bold'>15&#37; off</span> your first order!</p>
        </div>
        <div className='text-emerald-100 flex-col md:flex-row space-y-3'>
          <div className='lg:flex lg:gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='first-name'>First Name</label>
              <input type='text' name='first-name' className='border border-neutral-900/20 text-black outline-none max-w-[12.7rem] px-1' required />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='last-name'>Last Name</label>
              <input type='text' name='last-name' className='border border-neutral-900/20 text-black outline-none max-w-[12.7rem] px-1' required />
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
        <em className='text-emerald-100 text-xs py-4'>&dagger;&nbsp;We will never share or sell your information.</em>
      </form>
    </div>
  )
}

export default Signup