import Image from 'next/image'
import React from 'react'

const CTAFeatures = () => {
  return (
    <div className='py-8 px-4 lg:mb-0 bg-neutral-200'>
      <div className='grid grid-cols-2 lg:flex'>
        <div className='flex w-full justify-center items-center'>
          <Image
            src='/images/ctafeatures/free-shipping.webp'
            alt='free-shipping'
            width={500}
            height={500}
            className='w-20 lg:w-[6.5rem] opacity-80'
          />
        </div>
        <div className='flex w-full justify-center items-center'>
          <Image
            src='/images/ctafeatures/customer-support.webp'
            alt='customer-support'
            width={500}
            height={500}
            className='w-20 lg:w-28 opacity-80'
          />
        </div>
        <div className='flex w-full justify-center items-center mt-6 lg:mt-0'>
          <Image
            src='/images/ctafeatures/money-back.webp'
            alt='money-back-guarantee'
            width={500}
            height={500}
            className='w-[6.5rem] lg:w-[8.5rem] h-[5.3rem] lg:h-[7rem] opacity-80'
          />
        </div>
        <div className='flex w-full justify-center items-center mt-6 lg:mt-0'>
          <Image
            src='/images/ctafeatures/organic.webp'
            alt='organic'
            width={500}
            height={500}
            className='w-[6.5rem] lg:w-[8.5rem] opacity-80'
          />
        </div>
      </div>
    </div>
  )
}

export default CTAFeatures