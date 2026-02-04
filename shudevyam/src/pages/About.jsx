import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const About = () => {

  const journeyMap = [
    { id:1 , title:"Established Year",  desc:"Norm Interior is a design studio studiostudio studio", year:"2014" },
    { id:2 , title:"Established Year",  desc:"Norm Interior is a design studio studiostudio studio", year:"2015" },
    { id:3 , title:"Established Year",  desc:"Norm Interior is a design studio studiostudio studio", year:"2018" },
    { id:4 , title:"Established Year",  desc:"Norm Interior is a design studio studiostudio studio", year:"2019" },
    { id:5 , title:"Established Year",  desc:"Norm Interior is a design studio studiostudio studio", year:"2021" },
    { id:6 , title:"Established Year",  desc:"Norm Interior is a design studio studiostudio studio", year:"2024" },
  ];
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-24 px-6 sm:px-10 lg:px-0 lg:max-w-none lg:w-screen lg:ml-[50%] lg:-translate-x-1/2">
      <section className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 mt-16 lg:mt-40 lg:h-180">
        <div className="flex flex-col w-full lg:w-1/3 items-start justify-end text-start lg:ml-20 lg:-rotate-90">
          <p className='text-base sm:text-xl lg:text-2xl uppercase mt-6 sm:mt-10 lg:mt-0'>founder</p>
          <h1 className='text-4xl sm:text-6xl lg:text-9xl'>Manasi Doctor</h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-1/2 justify-between gap-8 lg:gap-10 lg:mr-28">
          <img src="/images/temp.jpg" className="w-full lg:w-3/5 h-72 sm:h-96 lg:h-auto object-cover object-center" alt="" />
          <div className="flex flex-col justify-between text-start gap-8 lg:gap-0">
            <p className="mt-0 lg:mt-10 text-sm sm:text-base">
              <FontAwesomeIcon icon={faArrowUp} className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rotate-135 text-2xl sm:text-4xl mb-4" />
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.</p>

            <div className='flex flex-col gap-4 sm:gap-5 text-sm sm:text-base lg:gap-5'>
              <div className='border-b pb-4 flex justify-between gap-4'> <h1>PHONE NO.</h1> <p className="text-right">+91 72268 03611</p></div>
              <div className='border-b pb-4 flex justify-between gap-4'> <h1>MAIL</h1> <p className="text-right">ninamadeepayu@gmail.com</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#800000] w-full mt-16 sm:mt-24 lg:mt-28 rounded-[32px] sm:rounded-[50px] lg:rounded-[50px] -mb-24 sm:-mb-32 lg:-mb-40 lg:h-400'>
        <div className='flex flex-col lg:flex-row justify-between pt-16 sm:pt-24 lg:pt-28 items-start lg:items-end border-b pb-10 sm:pb-16 lg:pb-20 border-white px-6 sm:px-10 lg:px-20 gap-6'>
          <h1 className='text-white text-3xl sm:text-5xl lg:text-8xl text-start uppercase font-rozha'>Continued on <br /> our journey</h1>
          <h1 className='text-white text-start text-sm sm:text-base lg:text-lg lg:px-20'>Norm Interior is a design studio specializing in architecture, <br /> interior design, and furniture, creating spaces.</h1>
        </div>

        <div className='flex flex-col lg:flex-row mx-6 sm:mx-10 lg:mx-20 mt-10 sm:mt-16 lg:mt-28 gap-10 lg:gap-20 justify-between pb-12 lg:pb-20'>

          <div className='flex flex-col gap-8 lg:gap-10 w-full lg:w-1/2 text-start lg:mt-38'>
            {journeyMap.map((item, index) => (
              <div key={item.id} className='flex flex-col sm:flex-row sm:items-center border-b pb-6 sm:pb-8 text-white border-white gap-3 sm:gap-8 lg:gap-16 lg:flex-row lg:items-center lg:pb-8'>
                <p className="text-sm sm:text-base">{String(index + 1).padStart(2, '0')}</p>
                <p className="text-sm sm:text-base">{item.title}</p>
                <p className="text-sm sm:text-base">{item.desc}</p>
                <p className="text-sm sm:text-base">{item.year}</p>
              </div>
            ))}
           
          </div>

          <img src="/images/temp.jpg" className='w-full lg:w-152.5 h-72 sm:h-96 lg:h-162.5 object-cover' alt="" />
        </div>
      </section>
    </div>
  );
};

export default About; 
