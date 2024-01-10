import Image from 'next/image'
import React from 'react'

const CTAFeatures = () => {
  return (
    // <div className='py-8 px-4 lg:mb-0 bg-gradient-to-b from-neutral-200 to-white'>
    // <div className='grid grid-cols-2 lg:flex'>
    <div className='space-y-4 my-8 md:w-3/4 md:mx-auto'>
      <div className='flex gap-6 lg:gap-11 items-center mr-4 p-2 bg-gradient-to-r from-green-900 to-transparent rounded-tl-full rounded-bl-full'>
        <Image
          src='/images/ctafeatures/free-shipping.webp'
          alt='free-shipping'
          width={500}
          height={500}
          className='w-16 lg:w-[6.5rem]'
        />
        <p className='w-1/2 md:w-3/4 text-sm lg:text-xl 2xl:text-3xl'>Enjoy free shipping when you order $25 or more.</p>
      </div>
      <div className='flex gap-6 lg:gap-9 items-center mr-4 p-2 w-full bg-gradient-to-r from-green-900 to-white rounded-tl-full rounded-bl-full'>
        <Image
          src='/images/ctafeatures/customer-support.webp'
          alt='customer-support'
          width={500}
          height={500}
          className='w-16 lg:w-28'
        />
        <p className='w-1/2 md:w-3/4 text-sm lg:text-xl 2xl:text-3xl'>Place your orders around the clock.  1-800-ROASTED</p>
      </div>
      <div className='flex gap-3 items-center mr-4 p-2 w-full bg-gradient-to-r from-green-900 to-white rounded-tl-full rounded-bl-full'>
        <Image
          src='/images/ctafeatures/money-back.webp'
          alt='money-back-guarantee'
          width={500}
          height={500}
          className='w-[4.8rem] lg:w-[8.5rem] lg:h-[7rem]'
        />
        <p className='w-1/2 md:w-3/4 text-sm lg:text-xl 2xl:text-3xl'>If you are not completely satisfied, send it back for a full refund!.</p>
      </div>
      <div className='flex gap-3 items-center mr-4 p-2 w-full bg-gradient-to-r from-green-900 to-white rounded-tl-full rounded-bl-full'>
        <Image
          src='/images/ctafeatures/organic.webp'
          alt='organic'
          width={500}
          height={500}
          className='w-[4.8rem] lg:w-[8.5rem]'
        />
        <p className='w-1/2 md:w-3/4 text-sm lg:text-xl 2xl:text-3xl'>All of our cacao beans are certified 100% organic.</p>
      </div>
    </div>
    // </div>
    // </div>
  )
}

export default CTAFeatures