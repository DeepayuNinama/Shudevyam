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
    <div className="w-screen  ml-[50%] -translate-x-1/2 mt-24 ">
      <section className="flex justify-between h-180 mt-40">
        <div className="flex  flex-col w-1/3 ml-20 items-start justify-end text-start -rotate-90 ">
          <p className='text-2xl uppercase '>founder</p>
          <h1 className='text-9xl'>Manasi Doctor</h1>
        </div>
        <div className="flex w-1/2 justify-between mr-28 gap-10">
          <img src="/images/temp.jpg" className="w-3/5  object-cover object-center" alt="" />
          <div className="flex flex-col justify-between text-start">
            <p className="mt-10">
              <FontAwesomeIcon icon={faArrowUp} className="w-20 h-20 rotate-135 text-4xl mb-4" />
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.</p>

            <div className='flex flex-col gap-5'>
              <div className='border-b pb-4 flex justify-between'> <h1>PHONE NO.</h1> <p>+91 72268 03611</p></div>
              <div className='border-b pb-4 flex justify-between'> <h1>MAIL</h1> <p>ninamadeepayu@gmail.com</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#800000] w-full h-400 mt-28 rounded-[50px] -mb-40'>
        <div className=' flex justify-between pt-28 items-end border-b pb-20 border-white'>
          <h1 className='text-white text-8xl text-start uppercase font-rozha px-20'>Continued on <br /> our journey</h1>
          <h1 className='text-white text-start px-20'>Norm Interior is a design studio specializing in architecture, <br /> interior design, and furniture, creating spaces.</h1>
        </div>

        <div className='flex mx-20 mt-28 gap-20 justify-between'>

          <div className='flex flex-col mt-38 gap-10 w-1/2 text-start ' >
            {journeyMap.map((item, index) => (
              <div key={item.id} className='flex items-center border-b pb-8 text-white border-white gap-16'>
                <p>{String(index + 1).padStart(2, '0')}</p>
                <p>{item.title}</p>
                <p>{item.desc}</p>
                <p>{item.year}</p>
              </div>
            ))}
           
          </div>

          <img src="/images/temp.jpg" className='h-162.5 w-152.5 object-cover' alt="" />
        </div>
      </section>
    </div>
  );
};

export default About; 