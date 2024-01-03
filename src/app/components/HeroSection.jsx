import Image from 'next/image'
import Coffee from '/public/images/coffee.webp'

const HeroSection = () => {
  return (
    <>
      <div className='w-full md:h-72 py-8 flex px-4 flex-col bg-yellow-900 text-[#EFCA99]'>
        <h1 className='uppercase tracking-wide font-bold text-4xl'>International Coffee Roasters</h1>
        <h2 className='tracking-wide font-semibold text-xl'>Fair Trade. Indigenous Cacao. Right Price.</h2>
        <p className='text-sm font-thin'><b>International Coffee Roasters</b> supports the fair trade market for homegrown cacao beans indigenous to their respective countries.  Because of our love for quality coffee, we&apos;ve invested time, energy, and capital into the farmers who supply the millions of carefully cultivated crops, and have the world&apos;s finest coffee sommeliers on hand to ensure that our beans are the best.</p>
      </div>
      <div className='w-full h-[14rem]'>
        <Image
          src={Coffee}
          alt='steaming-cup-of-coffee'
          width={1000}
          height={1000}
          className='md:object-cover md:h-72'
        />
        <button
          className='w-28 bg-yellow-900 py-1 px-3 rounded-br shadow shadow-yellow-900 text-[#EFCA99] text-lg relative bottom-[14rem] right-2 md:bottom-40 md:left-20 uppercase'
        >
          Menu
        </button>
      </div>
    </>
  )
}

export default HeroSection