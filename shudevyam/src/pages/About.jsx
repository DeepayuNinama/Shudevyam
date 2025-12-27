import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="w-screen  ml-[50%] -translate-x-1/2 mt-24 ">
        <section className="flex justify-between h-180 mt-40">
          <div className="flex  flex-col w-1/3 ml-20 items-start justify-end text-start -rotate-90 ">
            <p className='text-2xl uppercase '>founder</p>
            <h1 className='text-9xl'>Manasi Doctor</h1>
          </div>
          <div className="flex w-1/2 justify-between mr-28 gap-10">
            <img src="./images/temp.jpg" className="w-3/5  object-cover object-center" alt="" />
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
    </div>
  );
};

export default About; 