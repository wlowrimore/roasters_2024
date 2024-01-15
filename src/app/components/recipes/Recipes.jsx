'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Macchiato from '/public/images/macchiato.webp'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
const Recipes = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/json/recipes.json')
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
        setRecipes(data)
      } catch (error) {
        console.error('Error fetching JSON data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Fade direction='up' triggerOnce='true'>
        <div className='md:hidden flex flex-col mt-[-0.5rem] md:flex-row w-full'>
          <div className='bg-yellow-900/80 text-white p-4'>
            <h1 className='text-xl tracking-wide font-semibold'>Cafe Mocchiato</h1>
            <div className='flex py-2'>
              <Image
                src={Macchiato}
                alt='recipe name'
                width={500}
                height={500}
                className='w-32 rounded'
              />
              <ul className='list-disc pl-6 pr-2 text-sm tracking-wider'>
                <li>1 shot espresso</li>
                <li>Top with 1-2 tbsp steamed milk</li>
              </ul>
            </div>
            <div id='card-body' className='text-sm tracking-wide leading-2'>
              <p>The caffè macchiato has the highest ratio of espresso to milk of any drink made with those ingredients. The intent is that the milk moderates, rather than overwhelms, the taste of the coffee while adding a touch of sweetness.</p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade direction='up' triggerOnce='true'>
        <div className='hidden md:flex px-4 lg:px-16 w-full gap-4'>
          {recipes?.map((recipe) => (
            <div key={recipe.id} className='bg-yellow-900/80 text-white p-4 w-[15rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[32rem] rounded'>
              <h1 className='text-xl tracking-wide font-semibold'>{recipe.name}</h1>
              <div id='card-image' className='flex flex-col py-2'>
                <Image
                  src={recipe.imgURL}
                  alt={recipe.name}
                  width={500}
                  height={500}
                  className='w-52 lg:w-64 xl:w-80 2xl:w-full 2xl:pl-0 xl:pl-2 rounded mb-4'
                />
                {recipe.steps?.map((step, index) => (
                  <div key={index}>
                    <ul className='list-disc pl-4 pr-2 text-sm tracking-wider'>
                      <li>{step}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className='text-sm tracking-wide leading-2'>
                <p>{recipe.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <div className='flex justify-center'>
        <Link href='#'><p className='2xl:text-xl text-sm text-yellow-900 italic text-center my-4 px-4 hover:underline hover:text-emerald-700 w-fit'>Click here or more recipes.</p></Link>
      </div>
    </>
  )
}

export default Recipes