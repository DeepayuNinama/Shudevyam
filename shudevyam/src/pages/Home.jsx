import React from 'react';
import HorizontalScrollSection from '../components/HorizontalScrollSection.jsx'

export default function Home() {
  return (
    <div className='w-screen  ml-[50%] -translate-x-1/2  '>

      <section className="w-full h-screen bg-[url('/images/temp.jpg')] bg-cover bg-center flex  ">
        <div className='w-2/4 flex flex-col  items-left justify-end pl-20 pb-28  gap-8 font-[montserat]'>
          <p className='text-white text-2xl text-start'>Bold looks for the next era</p>
          <p className='text-white text-8xl text-start'>"Where moments become monuments"</p>
        </div>
      </section>

      <section className='flex mx-20 justify-between  mt-28'>
        <div className='w-1/6 flex'>
          <h1 className='text-6xl text-stone-200'>01</h1>
        </div>

        <div className='flex flex-col w-4/6 '>
          <h1 className='flex justify-start text-9xl uppercase text-[#141414] '>PROJECT</h1>
          <h1 className='flex justify-end text-9xl uppercase text-[#800000]'>OBECTIVE</h1>

          <div className='mt-10 flex gap-10'>
            <p className='w-1/2  text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut.
            </p>

            <img src="/images/temp.jpg" className='w-2/3 h-60' alt="" />
          </div>

        </div>
        <div className='w-1/6 flex justify-end'>
          <h1 className='text-1xl'>Since 11 years</h1>
        </div>
      </section>

      <section className=''>
        <div className='flex mx-20 mt-28 justify-between items-end'>
          <div className='w-1/2 text-start gap-10 flex flex-col'>
            <p className='uppercase text-[#800000]'>in house design</p>
            <p className='text-6xl '>Uniquly curated design for all occasions</p>
          </div>
          <p className='uppercase '>2014-2025 | FEATURED WORK</p>
        </div>

          <HorizontalScrollSection />
      </section>
    </div>
  );
}
