'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Coffee from '/public/images/coffee.webp'

const Reviews = () => {
  const [reviews, setReviews] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/json/reviews.json')
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        const data = await res.json()
        setReviews(data)
      } catch (error) {
        console.error("Error fetching JSON data", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='relative flex flex-col py-12 px-4 md:px-12 space-y-8 border-t border-neutral-900/20'>
      {reviews?.map((review) => (
        <div className='w-full md:w-1/2 h-full' key={review.id}>
          <div className='flex w-full'>
            <div className='flex flex-col mr-4'>
              <Image
                src={review.avatarURL}
                alt={review.name}
                width={500}
                height={500}
                className='w-16'
              />
            </div>
            <div className='flex flex-col w-full'>
              <Image
                src={review.starsURL}
                alt="five-star-rating"
                width={500}
                height={500}
                className='w-20'
              />
              <p className='text-xs lg:text-lg lg:tracking-normal tracking-wider'>{review.review}</p>
              <p className='text-xs font-semibold italic'>-&nbsp;{review.name}</p>
            </div>
          </div>
        </div>
      ))}
      <button className='w-full text-sm italic text-end'>...more reviews</button>
      <div className='hidden md:block md:absolute top-6 right-12 z-10'>
        <Image
          src={Coffee}
          alt='cup of coffee and coffee beans'
          width={500}
          height={500}
          className='w-[40rem] rounded shadow-lg shadow-neutral-700'
        />
      </div>
    </div>
  )
}

export default Reviews