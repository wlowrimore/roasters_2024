'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

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
    <div className='flex flex-col mb-8 md:grid grid-cols-2 justify-start px-4 space-y-8'>
      {reviews?.map((review) => (
        <div className='' key={review.id}>
          <div className='flex w-full'>
            <div className='flex flex-col w-1/2'>
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
              <p className='text-xs tracking-wider'>{review.review}</p>
              <p className='text-xs font-semibold italic'>-&nbsp;{review.name}</p>
            </div>
          </div>
        </div>
      ))}
      <button className='text-sm italic text-end'>...more reviews</button>
    </div>
  )
}

export default Reviews