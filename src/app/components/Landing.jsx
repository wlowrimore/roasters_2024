// import CTAFeatures from "./CTAFeatures"
import HeroSection from "./HeroSection"
import Reviews from "./Reviews"
import Signup from "./forms/Signup"


const Landing = () => {
  return (
    <main className='w-full flex flex-col'>
      <HeroSection />
      {/* <CTAFeatures /> */}
      <Signup />
      <Reviews />
    </main>
  )
}

export default Landing