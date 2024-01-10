import CTAFeatures from "./CTAFeatures"
import HeroSection from "./HeroSection"
import Reviews from "./Reviews"
import Signup from "./forms/Signup"
import Recipes from "./recipes/Recipes"


const Landing = () => {
  return (
    <main className='w-full h-screen flex flex-col lg:pt-10'>
      <HeroSection />
      <Signup />
      <Recipes />
      <CTAFeatures />
      <Reviews />
    </main>
  )
}

export default Landing