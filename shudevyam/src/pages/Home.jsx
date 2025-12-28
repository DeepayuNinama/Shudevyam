import React from 'react';
import HorizontalScrollSection from '../components/HorizontalScrollSection.jsx'
import tempBg from '/images/temp.jpg';
import { redirect, useNavigate  } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='w-screen  ml-[50%] -translate-x-1/2  '>

      <section className="flex w-full h-screen bg-cover bg-top   " style={{ backgroundImage: `url(${tempBg})` }}>
        <div className='w-2/4 flex flex-col  items-left justify-end pl-20 pb-28  gap-8 font-[montserat]'>
          <p className='text-white text-2xl text-start'>Bold looks for the next era</p>
          <p className='text-white text-8xl text-start'>"Where moments become monuments"</p>
        </div>
      </section>

      <section className='flex mx-20 justify-between  mt-28'>
        <div className='w-1/6 flex'>
          <h1 className='text-6xl text-stone-200'>11</h1>
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

          <button className='mt-36 relative z-10 px-8 py-3 border border-black uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-all duration-300' 
          onClick={() => navigate('/gallery')}>
            Explore More
          </button>
      </section>

      <section className='flex mt-38 items-start -mb-40 bg-[#800000] w-full h-180 justify-center'>
        
        <div className='flex flex-col justify-start items-star'>
          <h1 className='text-white font-rozha text-[400px] hover:text-[#4f0303] transition-all duration-800'>शुदेवयम</h1>
          <p className='text-white text-end pr-10 -mt-30 text-2xl'>Since 2014 </p>
        </div>


      </section>
    </div>
  );
}
