import Image from 'next/image'
import SmilingCoffee from '/public/images/test-images/smiling_lady_drinking_coffee.webp'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:h-72 lg:h-[22rem] pt-14 pb-4 flex px-4 lg:px-12 flex-col justify-center'>
        <h1 className='uppercase tracking-wide font-bold text-4xl lg:text-5xl leading-8 mb-2 '>International Coffee Roasters</h1>
        <h2 className='tracking-wide font-semibold text-xl lg:text-2xl leading-6 mb-2'>Fair Trade. Indigenous Cacao. Right Price.</h2>
        {/* <p className='text-sm font-thin'><b>International Coffee Roasters</b> supports the fair trade market for homegrown cacao beans indigenous to their respective countries.  Because of our love for quality coffee, we&apos;ve invested time, energy, and capital into the farmers who supply the millions of carefully cultivated crops, and have the world&apos;s finest coffee sommeliers on hand to ensure that our beans are the best.</p> */}
        <p className='text-sm lg:text-lg tracking-wide lg:tracking-normal'>Don&apos;t pay high prices for low quality java.  We eliminate the middle-man so we can bring to you, from the farm, freshly harvested coffee, custom roasted to your specifications.</p>
      </div>
      <div className='relative w-full h-[12.6rem] bg-yellow-800/90'>
        <Image
          priority
          src={SmilingCoffee}
          alt='smiling-lady-drinking-coffee'
          width={1000}
          height={1000}
          className='md:object-cover md:h-72 lg:h-[22rem]'
        />
        <div className='absolute z-10 top-6 md:top-20 left-4 md:left-14 flex flex-col text-white/60'>
          <h3 className='text-lg lg:text-2xl font-bold'>100&#37; Organic</h3>
          <ul className='list-disc ml-5 lg:text-lg'>
            <li>Robusta</li>
            <li>Arabica</li>
            <li>Liberica</li>
            <li>Excelsa</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroSection