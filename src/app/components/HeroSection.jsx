import Image from 'next/image'
import SmilingCoffee from '/public/images/test-images/smiling_lady_drinking_coffee.webp'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row md:mx-4 lg:mb-1'>
      <div className='w-full md:h-72 lg:h-[22rem] pt-14 xl:pt-0 pb-4 flex px-4 lg:px-12 flex-col justify-center'>
        <h1 className='uppercase tracking-wide font-bold text-neutral-600 text-4xl lg:text-4xl leading-8 mb-2 lg:mb-0 '>International Coffee Roasters</h1>
        <h2 className='tracking-wide font-semibold text-neutral-600 text-xl lg:text-2xl leading-6 mb-2'>Fair Trade. Indigenous Cacao. Right Price.</h2>
        <p className='text-sm lg:text-lg tracking-wide lg:tracking-normal lg:leading-6'>Don&apos;t pay high prices for low quality java.  We eliminate the middle-man so we can bring to you, from the farm, freshly harvested coffee, custom roasted to your specifications.</p>
      </div>
      <div className='relative w-full h-[12.6rem] bg-yellow-800/90 lg:bg-transparent'>
        <Image
          priority
          src={SmilingCoffee}
          alt='smiling-lady-drinking-coffee'
          width={1000}
          height={1000}
          className='md:object-cover md:h-72 lg:h-[22rem] lg:pr-12'
        />
        <div className='absolute z-10 top-6 md:top-14 lg:top-[4.2rem] left-4 lg:left-8 flex flex-col text-white/60'>
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