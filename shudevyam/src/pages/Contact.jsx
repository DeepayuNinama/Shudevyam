import React, { useState } from 'react';
import tempBg from '/images/bg-contact.jpg';

const Contact = () => {
  const [selectedOption, setSelectedOption] = React.useState("Inquiry");
  const [showText, setShowText] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      interest: selectedOption,
      ...formData,
    });
  };

  return (
    <div className="w-screen ml-[50%] -translate-x-1/2 -mb-40">
      {/* DESKTOP VIEW */}
      <section className="hidden md:flex justify-end w-full h-screen bg-cover bg-top items-center" style={{ backgroundImage: `url(${tempBg})` }}>

        <form className="flex flex-col justify-center text-start text-white h-180 w-1/2 mt-24 mr-28 bg-[#800000] px-16 py-12" onSubmit={handleSubmit}>
          <h1 className="text-5xl">I'm Interested in..</h1>
          <div className="flex flex-row gap-5 justify-center w-full my-8 mt-16">
            {["Inquiry", "Place Order", "Bussiness"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setSelectedOption(label)}
                className={`
                  px-8 py-3 w-1/3 border uppercase tracking-widest transition-all duration-200
                ${selectedOption === label
                  ? "bg-[#b10000] border-[#b10000] text-white "
                  : "bg-[#800000] border-white text-[#ffffff] hover:border-[#e2e2e2] hover:text-[#e2e2e2] hover:bg-[#b10000]"
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
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b py-2 text-lg focus:outline-none text-white placeholder-white/70"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="(+91) Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b py-2 text-lg focus:outline-none text-white placeholder-white/70"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message for us"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b pb-32 py-2 text-lg focus:outline-none text-white placeholder-white/70 resize-none"
              required
            ></textarea>
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

      {/* MOBILE VIEW */}
      <section className="md:hidden min-h-screen relative bg-[#800000] pt-32 pb-16 px-4">
        <div className="flex flex-col">
          {/* Heading */}
          <div className="text-white mb-6">
            <h1 className="text-2xl font-bold leading-tight text-left">
              Find It Interesting?<br />
              Let's Connect
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <h2 className="text-white text-2xl font-light text-left">
              I'm Interested In ...
            </h2>

            {/* Interest Buttons - Grid */}
            <div className="grid grid-cols-2 gap-3">
              {["Inquiry", "Place Order", "Business"].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedOption(label)}
                  className={`py-3 px-4 border border-white/75 text-white text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                    selectedOption === label
                      ? "bg-white/20 border-white"
                      : ""
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-transparent border-b-2 border-white/60 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors"
              required
            />

            {/* Phone Input */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone No."
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-transparent border-b-2 border-white/60 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={2}
              className="w-full bg-transparent border-b-2 border-white/60 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors resize-none"
              required
            ></textarea>

            {/* Submit Button */}
            <div className="flex flex-col gap-4 mt-6">
              <button
                type="submit"
                className="bg-white text-[#800000] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-300 w-full"
              >
                Submit
              </button>
              <p className="text-white text-sm text-center">We Reply Within 24 Hours</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact; 