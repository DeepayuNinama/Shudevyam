import React, { useState } from 'react';
import tempBg from '/images/bg-contact.jpg';

const Contact = () => {
  const [selectedOption, setSelectedOption] = React.useState("Option A");
  const [showText, setShowText] = useState(false);

  return (
    <div className="w-screen  ml-[50%] -translate-x-1/2 -mb-40 ">
      <section className="justify-end flex w-full h-screen bg-cover bg-top items-center " style={{ backgroundImage: `url(${tempBg})` }}>

        <form className=" flex flex-col justify-center text-start text-white h-180 w-1/2 mt-24 mr-28 bg-[#800000] px-16 py-12 " >
          <h1 className="text-5xl">I'm Interested in..</h1>
          <div className="flex flex-row gap-5 justify-center w-full my-8 mt-16">
            {["Inquiry", "Place Order", "Bussiness"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setSelectedOption(label)}
                className={`
                  px-8 py-3 w-1/3 border  uppercase tracking-widest transition-all duration-200
                ${selectedOption === label
                  ? "bg-[#b10000] border-[#b10000] text-white "
                        : "bg-[#80000] border-white text-[#ffffff] hover:border-[#e2e2e2] hover:text-[#e2e2e2] hover:bg-[#b10000]"
                  }
                `}
                  >
                  {label}
              </button>
            ))}
          </div>
          
          <div className='flex flex-col gap-10 mt-8'>
            <div className='flex gap-5'>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full bg-transparent border-b  py-2 text-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="(+91) Phone Number "
                className="w-full bg-transparent border-b  py-2 text-lg focus:outline-none  "
              />
            </div>
            <input
                type="text"
                placeholder="Message for us"
                className="w-full bg-transparent border-b pb-32 py-2 text-lg focus:outline-none "
              />
          </div>
          
          <div className='flex items-center gap-8'>
            <button
            type="submit" 
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
              className="px-8 py-3 w-1/3 bg-[#ffffff] text-[#800000] font-bold uppercase hover:bg-[#b10000] hover:text-white transition-all mt-8"
            >
            Submit
          </button>

          <div className="h-6 mt-4 py-2">
            {showText && (
              <p className="text-[#ffffff] font-medium transition-opacity duration-300">
                We'll reply within 24 hours
              </p>
            )}
          </div>
          </div>
          
        </form>

      </section>
    </div>
  );
};

export default Contact; 