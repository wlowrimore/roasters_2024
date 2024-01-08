'use client'

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isToggled, setIsToggled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
          className='w-28 bg-yellow-700 py-1 px-3 rounded-br-lg shadow shadow-yellow-900 text-[#EFCA99] text-lg absolute z-10 top-0 left-0 uppercase'
        >
          Menu
        </button>
        {isOpen ? (
          <div className='w-full h-[32rem] absolute top-0 z-20 bg-gradient-to-b from-yellow-900 to-yellow-800 shadow-xl shadow-yellow-900'>
            <button onClick={handleClick} className='bg-yellow-700 text-[#efca99] text-lg text-start py-1 px-7 uppercase rounded-br-lg'>Close</button>
            <div className='text-[#efca99] px-5 space-y-2 my-4'>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Home</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Our Story</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>About Our Cacao</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Roasting Options</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Price Guide</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Fun Facts</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>FAQ</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Contact</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Privacy Policy</p></Link>
              <Link href='#'><p className='active:bg-yellow-900/90 w-[13rem] rounded-r-lg rounded-l-md px-2 py-1'>Terms & Conditions</p></Link>
            </div>
          </div>
        ) : (
          null
        )}
      </section>

      {/* large screens navigation */}
      <section>
        <nav className='hidden lg:block fixed top-2 lg:left-0 xl:left-24'>
          <ul className='flex items-center w-full h-[2rem] mx-12 uppercase'>
            <li><Link href='#' className='py-2 px-4'>ICR</Link></li>
            <li><Link href='#' className='py-2 px-4'>Pricing</Link></li>
            <li><Link href='#' className='py-2 px-4'>Process</Link></li>
            <li><Link href='#' className='py-2 px-4'>Our Story</Link></li>
            <li><Link href='#' className='py-2 px-4'>Contact</Link></li>
          </ul>
        </nav>
      </section>

    </main>
  )
}


export default MobileMenu