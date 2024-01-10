'use client'

import Image from "next/image"
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import MountainManImg from '/public/images/avatars/smile-man-mountain.webp'
import ShopLadyImg from '/public/images/avatars/smile-woman-shop.webp'
import LadyBunImg from '/public/images/avatars/smile-woman-bun.webp'
import Stars from '/public/images/stars.webp'

const Reviews = () => {
  return (
    <div className='space-y-4 p-4 lg:space-y-16 lg:mx-12 lg:mb-20'>
      <div className='flex space-x-2 lg:space-x-6 items-start lg:bg-emerald-100/50 lg:py-4 lg:px-4 lg:rounded lg:border border-neutral-200'>
        <Image
          src={MountainManImg}
          alt='man smiling in front of mountain'
          width={500}
          height={500}
          className='w-14 lg:w-72 object-contain rounded-full lg:rounded-lg lg:shadow-lg lg:shadow-neutral-300'
        />
        <div className='flex flex-col space-y-1'>
          <Image
            src={Stars}
            alt='5-star rating'
            width={500}
            height={500}
            className='w-20 lg:hidden'
          />
          <div className='lg:mx-8'>
            <div className='hidden lg:flex text-6xl opacity-80'><RiDoubleQuotesL /></div>
            <p className='text-xs lg:text-2xl lg:px-14 tracking-wide'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className='text-[0.6rem] lg:text-sm font-semibold lg:font-normal ml-2'>- Tim Lawrence</span>
            </p>
            <div className='hidden lg:flex text-6xl opacity-80 justify-end'><RiDoubleQuotesR /></div>
          </div>
        </div>
      </div>

      <div className='flex flex-row lg:flex-row-reverse space-x-2 lg:space-x-4 items-start lg:mb-20 lg:bg-emerald-100/50 lg:py-4 lg:px-4 lg:rounded lg:border border-neutral-200'>
        <Image
          src={ShopLadyImg}
          alt='lady smiling in shop'
          width={500}
          height={500}
          className='w-14 lg:w-72 object-contain rounded-full lg:rounded-lg lg:shadow-lg lg:shadow-neutral-300'
        />
        <div className='flex flex-col space-y-1'>
          <Image
            src={Stars}
            alt='5-star rating'
            width={500}
            height={500}
            className='w-20 lg:hidden'
          />
          <div className='lg:mr-14'>
            <div className='hidden lg:flex text-6xl opacity-80'><RiDoubleQuotesL /></div>
            <p className='text-xs lg:text-2xl lg:px-14 tracking-wide'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className='text-[0.6rem] lg:text-sm font-semibold lg:font-normal ml-2'>- Nichole Irving</span>
            </p>
            <div className='hidden lg:flex text-6xl opacity-80 justify-end'><RiDoubleQuotesR /></div>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 lg:space-x-6 lg:mb-20 items-start lg:bg-emerald-100/50 lg:py-4 lg:px-4 lg:rounded lg:border border-neutral-200'>
        <Image
          src={LadyBunImg}
          alt='lady smiling'
          width={500}
          height={500}
          className='w-14 lg:w-72 object-contain rounded-full lg:rounded-lg lg:shadow-lg lg:shadow-neutral-300'
        />
        <div className='flex flex-col space-y-1'>
          <Image
            src={Stars}
            alt='5-star rating'
            width={500}
            height={500}
            className='w-20 lg:hidden'
          />
          <div className='lg:mx-8'>
            <div className='hidden lg:flex text-6xl opacity-80'><RiDoubleQuotesL /></div>
            <p className='text-xs lg:text-2xl lg:px-14 tracking-wide'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className='text-[0.6rem] lg:text-sm font-semibold lg:font-normal ml-2'>- Maysa River</span>
            </p>
            <div className='hidden lg:flex text-6xl opacity-80 justify-end'><RiDoubleQuotesR /></div>
          </div>
        </div>
      </div>
      <p className='lg:hidden text-[0.7rem] text-end '>Load More Comments...</p>
    </div>
  )
}

export default Reviews