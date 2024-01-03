'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CoffeeFacts = () => {
  const [coffeeFacts, setCoffeeFacts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/json/facts.json')
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        const data = await res.json()
        setCoffeeFacts(data)
      } catch (error) {
        console.error('Error fetching JSON data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='w-full flex flex-col md:flex-row'>
      <div className='grid grid-cols-2 gap-2'>
        {coffeeFacts?.map((facts) => (
          <div className='flex flex-col bg-yellow-100' key={facts.id}>
            <div className='w-44'>
              <Image
                src={facts.imageURL}
                alt={facts.name}
                width={500}
                height={500}
                className='object-fit w-20 opacity-80'
              />
            </div>
            <h2>{facts.name}</h2>
            <p>{facts.caffeineLevel}</p>
            {facts?.description.map((desc, descIndex) => (
              <li className='' key={descIndex}>
                {desc}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoffeeFacts