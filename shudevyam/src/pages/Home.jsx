import React from 'react';
import HorizontalScrollSection from '../components/HorizontalScrollSection.jsx'
import landingImg from '/images/landing_img.png';
import tempBg from '/images/temp.jpg';
import { redirect, useNavigate  } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='w-full overflow-x-hidden'>

      {/* MOBILE VIEW - Landing Image */}
      <section className="md:hidden flex w-full h-screen bg-cover bg-top" style={{ backgroundImage: `url(${landingImg})` }}>
        <div className='w-full flex flex-col items-start justify-end pl-6 pb-16 gap-4'>
          <p className='text-white text-lg text-start'>Bold looks for the next era</p>
          <p className='text-white text-3xl text-start'>"Where moments become monuments"</p>
        </div>
      </section>

      {/* DESKTOP VIEW - Default Image */}
      <section className="hidden md:flex w-full h-screen bg-cover bg-top" style={{ backgroundImage: `url(${tempBg})` }}>
        <div className='w-2/4 flex flex-col  items-left justify-end pl-20 pb-28  gap-8 '>
          <p className='text-white text-2xl text-start'>Bold looks for the next era</p>
          <p className='text-white text-7xl text-start'>"Where moments become monuments"</p>
        </div>
      </section>

      <section className='flex flex-col md:flex-row mx-4 md:mx-20 justify-between gap-6 md:gap-10 mt-20 md:mt-28'>
        <div className='hidden md:flex w-full md:w-1/6'>
          <h1 className='text-4xl md:text-6xl text-stone-200'>11</h1>
        </div>

        <div className='flex flex-col w-full md:w-4/6'>
          <h1 className='flex justify-start text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-[#141414]'>PROJECT</h1>
          <h1 className='flex justify-start sm:justify-end text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-[#800000]'>OBJECTIVE</h1>

          <div className='mt-6 md:mt-10 flex flex-col md:flex-row gap-6 md:gap-10'>
            <p className='w-full md:w-1/2 text-sm sm:text-base text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut.
            </p>

            <img src="/images/temp.jpg" className='w-full md:w-2/3 h-40 sm:h-48 md:h-60 object-cover' alt="" />
          </div>

        </div>
        <div className='hidden md:flex w-full md:w-1/6 justify-end'>
          <h1 className='text-sm sm:text-base'>Since 11 years</h1>
        </div>
      </section>

      <section className=''>
        <div className='flex flex-col md:flex-row mx-4 md:mx-20 mt-20 md:mt-28 justify-between items-start md:items-end gap-8 md:gap-0'>
          <div className='w-full md:w-1/2 text-start gap-6 md:gap-10 flex flex-col'>
            <p className='uppercase text-xs sm:text-sm text-[#800000]'>in house design</p>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Uniquly curated design for all occasions</p>
          </div>
          <p className='uppercase text-xs sm:text-sm tracking-widest'>2014-2025 | FEATURED WORK</p>
        </div>

          <HorizontalScrollSection />

          <button className='mt-10 md:mt-20 ml-4 md:ml-20 relative z-10 px-6 md:px-8 py-2 md:py-3 border border-black uppercase tracking-widest text-xs md:text-sm hover:bg-[#800000] hover:text-white transition-all duration-300' 
          onClick={() => navigate('/gallery')}>
            Explore More
          </button>
      </section>

      <section className='relative flex mt-10 sm:mt-20 md:mt-28 lg:mt-38 items-center bg-[#800000] w-full h-[220px] sm:h-[500px] md:h-[650px] lg:h-[800px] xl:h-180 justify-start overflow-hidden'>
  
  <div className='relative w-full h-full flex items-center justify-center md:justify-start'>
    <div className='flex flex-col items-end md:items-start w-fit mx-auto md:mx-0 md:w-full'>
      <h1 className='text-white font-rozha text-[120px] sm:text-[160px] md:text-[240px] lg:text-[340px] xl:text-[450px] 2xl:text-[550px] hover:text-[#4f0303] transition-all duration-800 leading-[0.55] tracking-tight drop-shadow-[0_25px_25px_rgba(79,3,3,0.9)] text-center md:text-left md:pl-12 lg:pl-16 xl:pl-20'>
        शुदेवयम
      </h1>
      <p className='mt-1 sm:mt-1 md:mt-0 text-white text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-right md:text-left self-end md:absolute md:bottom-24 lg:bottom-28 xl:bottom-32 md:right-14 lg:right-16 xl:right-20'>
        Since 2014
      </p>
    </div>
  </div>
</section>
    </div>
  );
}
