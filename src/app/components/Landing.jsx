import { Suspense } from "react"
import CTAFeatures from "./CTAFeatures"
import HeroSection from "./HeroSection"
import Reviews from "./Reviews"
import Signup from "./forms/Signup"
import Recipes from "./recipes/Recipes"
import SecondarySignup from "./forms/SecondarySignup"


const Landing = () => {
  return (
    <main className='w-full h-screen flex flex-col lg:pt-10 2xl:mb-24'>
      <HeroSection />
      <Signup />
      <Recipes />
      <CTAFeatures />
      <Reviews />
      <SecondarySignup />
    </main>
  )
}

export default Landing