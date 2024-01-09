import Image from "next/image"
import CoffeeCrop from '/public/images/test-images/coffee_crop_columbia.webp'
// import CTAFeatures from "../CTAFeatures"

const Signup = () => {
  return (
    <div className='relative md:mx-4 lg:mx-16 md:mt-[0.05rem] lg:mb-12'>
      <div className='flex mb-2 w-full bg-neutral-900/90'>
        <Image
          src={CoffeeCrop}
          alt='columbian coffee crop'
          widht={500}
          height={500}
          className='h-[24rem] md:h-[19.2rem] lg:h-[21rem] object-cover w-full opacity-30'
        />
      </div>
      {/* <div className='absolute left-32'><CTAFeatures /></div> */}
      <form className='absolute top-0 right-0 h-full flex flex-col w-full lg:w-[34%] bg-blue-50/20 p-6 mb-2'>
        <div className='text-emerald-100 leading-tight mb-4'>
          <h3 className='text-2xl font-semibold tracking-wider'>Sign Our Guest Book</h3>
          <p>receive <span className='text-yellow-300 font-bold'>15&#37; off</span> your first order!</p>
        </div>
        <div className='text-emerald-100 flex-col md:flex-row space-y-3'>
          <div className='md:flex md:gap-2'>
            <div className='flex flex-col w-full'>
              <label htmlFor='first-name'>First Name</label>
              <input type='text' name='first-name' className='border border-neutral-900/20 text-black outline-none px-1 w-full' required />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='last-name'>Last Name</label>
              <input type='text' name='last-name' className='border border-neutral-900/20 text-black outline-none px-1 w-full' required />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' className='border border-neutral-900/20 text-black outline-none px-1' required />
          </div>
          <button className='w-full py-1 px-4 text-lg font-semibold text-neutral-900 bg-emerald-400/70 rounded'>Get my 15&#37; off!</button>
        </div>
        <em className='text-emerald-100 text-xs py-4 xl:mt-4'>&dagger;&nbsp;We will never share or sell your information.</em>
      </form>
      <div className='w-full hidden lg:flex flex-col items-center p-4 absolute lg:right-36 xl:right-44 lg:top-16 text-2xl text-white'>
        <p className='w-1/2'>Don&apos;t know where to begin?  Let us help.  A short questionaire will guide you from the crop to the cup.</p>
        <div className='flex justify-center'>
          <button className='w-fit lg:mt-6 lg:mr-8 py-1 px-6 text-xl bg-yellow-800 rounded'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Signup