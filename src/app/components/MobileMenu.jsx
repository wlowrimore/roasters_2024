'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import Logo from '/public/images/logo/mainLogo.webp'

const MobileMenu = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsToggled(!isToggled)
    setIsOpen(!isOpen)
  }

  return (
    <main>
      <section
        className='lg:hidden'>
        <button
          onClick={handleClick}
          className='w-28 bg-yellow-800 py-1 px-3 rounded-br-lg shadow shadow-yellow-900 text-[#EFCA99] text-lg absolute z-10 top-0 left-0 uppercase'
        >
          Menu
        </button>
        {isOpen ? (
          <div className='w-full h-[102rem] absolute top-0 z-20 bg-neutral-900/95'>
            <button onClick={handleClick} className='bg-yellow-700 text-[#efca99] text-lg text-start py-1 px-7 uppercase rounded-br-lg'>Close</button>
            <div className='text-[#efca99] px-5 mt-6'>
              <nav className='flex flex-col gap-4'>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Home</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Our Story</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>About Our Cacao</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Roasting Options</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Price Guide</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Fun Facts</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>FAQ</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Contact</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Privacy Policy</p></Link>
                <Link href='#'><p onClick={(e) => setIsOpen(false)} className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Terms & Conditions</p></Link>
              </nav>
            </div>
            <div className='w-full flex flex-col items-center p-4 mt-6 text-lg text-white'>
              <p className='md:w-1/2'>Don&apos;t know where to begin?  Let us help.  A short questionaire will guide you from the crop to the cup.</p>
              <div className='flex justify-center'>
                <button onClick={(e) => setIsOpen(false)} className='w-fit mt-4 py-1 px-3 text-lg bg-yellow-800 rounded'>Get Started</button>
              </div>
            </div>
          </div>
        ) : (
          null
        )}
      </section>

      {/* large screens navigation */}
      <section>
        <nav className='hidden lg:block fixed z-50 top-0 py-2 lg:left-0 xl:left-24 2xl:ml-52 2xl:py-4 2xl:text-xl'>
          <ul className={isScrolling ? 'transform flex items-center rounded-br-xl rounded-bl-xl lg:w-fit lg:pt-1 lg:bg-neutral-950/80 transition duration-300 text-white  h-[3rem] lg:ml-16 lg:mt-[-0.7rem] uppercase' : 'flex items-center w-full h-[2rem] mx-12 uppercase'}>
            <li>
              <Link href='#' className='py-2 px-4'>
                <Image
                  src={Logo}
                  alt='company logo'
                  width={1000}
                  height={1000}
                  className='w-10 pb-1 pl-1'
                />
              </Link>
            </li>
            <li><Link href='#' className='py-2 px-4 transition hover:opacity-40 duration-300'>Pricing</Link></li>
            <li><Link href='#' className='py-2 px-4 transition hover:opacity-40 duration-300'>Process</Link></li>
            <li><Link href='#' className='py-2 px-4 transition hover:opacity-40 duration-300'>Our Story</Link></li>
            <li><Link href='#' className='py-2 px-4 transition hover:opacity-40 duration-300'>Contact</Link></li>
          </ul>
        </nav>
      </section>

    </main>
  )
}


export default MobileMenu