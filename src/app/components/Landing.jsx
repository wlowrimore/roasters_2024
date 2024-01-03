// import CoffeeFacts from "./CoffeeFacts"
import CTAFeatures from "./CTAFeatures"
import HeroSection from "./HeroSection"
import Reviews from "./Reviews"
import Signup from "./forms/Signup"


const Landing = () => {
  return (
    <main className='w-full flex flex-col md:flex-row'>
      <HeroSection />
      <CTAFeatures />
      <Reviews />
      <Signup />
    </main>
  )
}

export default Landing