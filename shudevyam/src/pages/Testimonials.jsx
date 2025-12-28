import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {

  const TestimonialData = [
    {
      id: 1,
      name: "Deepayu Ninama",
      paraOne: "For over a decade, we have been more than just a boutique—we are a destination for the modern woman. From breezy summer staples to luxurious wedding couture.",
      paraTwo: "Every design reflects a promise of quality and individuality.",
      imgLink: "./images/temp.jpg", // Ensure this path is correct
    },
    {
      id: 2,
      name: "Heer Shah",
      paraOne: "The attention to detail is simply unmatched. I felt like a queen on my wedding day thanks to their incredible craftsmanship and personalized service.",
      paraTwo: "I highly recommend them to anyone looking for elegance and comfort.",
      imgLink: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Sarah J.",
      paraOne: "What started as a simple consultation turned into a relationship I cherish. They understand my style better than I do myself!",
      paraTwo: "The fabrics are top-notch and the fit is always perfect.",
      imgLink: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop",
    },
  ];

  // 1. STATE: Track which testimonial is currently showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. LOGIC: Handle Next/Prev clicks with looping
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TestimonialData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TestimonialData.length - 1 : prev - 1));
  };

  // Helper to access current data easily
  const currentData = TestimonialData[currentIndex];

  return (
    <div className='w-screen ml-[50%] -translate-x-1/2 mb-20'>

      <section className='flex flex-col gap-8 justify-end text-start mt-40 mx-20'>
        <h1 className='text-9xl uppercase'>Testimonials</h1>
        <p className='w-1/2 pr-28'>
          For over a decade, we have been more than just a boutique—we are a destination for the modern woman. From breezy summer staples to luxurious wedding couture, explore the designs that have defined our journey
        </p>
      </section>

      <section className='relative mt-28 mx-20'>
        
        {/* BACKGROUND IMAGE - Dynamic based on current slide */}
        {/* AnimatePresence allows the exiting image to fade out while new one fades in */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentData.id} // Key change triggers animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-cover bg-center blur-md bg-black"
              style={{ backgroundImage: `url('${currentData.imgLink}')` }}
            />
          </AnimatePresence>
        </div>

        {/* CONTENT CONTAINER */}
        <div className='bg-red-950/40 p-16'>
            
            {/* 3. ANIMATION: Wrap content in AnimatePresence + motion.div */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex} // Crucial: Tells React this is new content
                initial={{ opacity: 0, x: 20 }} // Start slightly invisible and to the right
                animate={{ opacity: 1, x: 0 }}   // Fade in and slide to center
                exit={{ opacity: 0, x: -20 }}    // Fade out and slide to left
                transition={{ duration: 0.4 }}
                className='flex justify-between relative z-10 gap-10'
              >
                
                {/* LEFT: Name */}
                <div className='flex flex-col mt-8 text-white text-end gap-2 w-1/3 '>
                  <p className='text-sm'>// TESTIMONIAL</p>
                  <p className='uppercase text-5xl font-semibold'>
                    {currentData.name}
                  </p>
                </div>
                
                {/* MIDDLE: Image */}
                <img 
                  src={currentData.imgLink} 
                  className='w-1/3 h-150 object-cover shadow-2xl' 
                  alt={currentData.name} 
                />

                {/* RIGHT: Text */}
                <div className='flex flex-col text-white justify-between w-1/3 text-start mt-8'>
                  <div>
                    <p className='pb-10 leading-relaxed'>
                      {currentData.paraOne}
                    </p>
                    <p className='leading-relaxed'>
                      {currentData.paraTwo}
                    </p>
                  </div>
                  
                  {/* BUTTONS: Note - We keep buttons OUTSIDE the motion.div if we want them static, 
                      or INSIDE if we want them to fade too. Here they are inside. 
                      If you want buttons to stay fixed while text moves, move this div OUTSIDE the <motion.div> closing tag.
                  */}
                </div>

              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION BUTTONS (Placed outside animation wrapper to stay stable) */}
            <div className='flex justify-end gap-5 mt-[-4rem] relative z-20'>
                <button 
                  onClick={handlePrev}
                  className='p-4 border rounded-full border-[#ffffff2f] hover:bg-[#ffffff2f] transition-all text-white'
                >
                  <FontAwesomeIcon icon={faAngleLeft} className="text-3xl" />
                </button>
                <button 
                  onClick={handleNext}
                  className='p-4 border rounded-full border-[#ffffff2f] hover:bg-[#ffffff2f] transition-all text-white'
                >
                  <FontAwesomeIcon icon={faAngleRight} className="text-3xl" />
                </button>
            </div>

        </div>
      </section>
    </div>
  );
}