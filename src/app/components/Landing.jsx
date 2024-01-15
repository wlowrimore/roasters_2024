import { Suspense } from "react"
import CTAFeatures from "./CTAFeatures"
import HeroSection from "./HeroSection"
import Reviews from "./Reviews"
import Signup from "./forms/Signup"
import Recipes from "./recipes/Recipes"


const Landing = () => {
  return (
    <main className='w-full h-screen flex flex-col lg:pt-10 2xl:mb-24'>
      <HeroSection />
      <Signup />
      <Recipes />
      <CTAFeatures />
      <Reviews />
    </main>
  )
}

export default Landing