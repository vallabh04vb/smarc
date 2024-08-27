import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-[#1D3459]'>
      <div className='flex flex-col items-center justify-center bg-[#1D3459] text-white'>
        <div className='bg-[#e9e9cc] w-full pt-2 flex flex-col items-center justify-center'>
          <h5 className='text-sm font-bold italic text-[#1D3459]'>
            Event Organized by
          </h5>
          <img
            src='/image/zavian.svg'
            alt='SMARC-2024 Logo'
            className='w-32 h-32 mb-4'
          />
        </div>
        <div className='mt-2'>
          <img
            src='/image/kims.svg'
            alt='SMARC-2024 Logo'
            className='w-56 h-56'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-8 bg-[#1D3459] text-white'>
        <p className='text-base mb-6 text-center'>
          KONASEEMA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH FOUNDATION
          Konaseema Institute of Medical Sciences & Research Foundation, one of
          the pioneering medical centres in Konaseema region with a par
          excellence reputation in addressing medical care and fostering the
          professional needs and imparting highest standard education to bring
          out talent in the field of medicine with a strong academic base.
        </p>
        <p className='text-base mb-6 text-center'>
          ISO certified in all three verticals, KIMS envisions delivering
          medical care conveniently to every spectrum of society and also serves
          the medical fraternity with best and desirable medical professionals.{' '}
          <span
            className={!open ? 'underline' : ''}
            onClick={() => setOpen(!open)}
          >
            {!open
              ? 'Read More'
              : 'KIMS is the only Super Speciality Hospital in the Konaseema region that dedicates its service in building the future of healthcare industry by serving approximately 214 villages with best medical facilities, contributing to academic wings through an administered educational opportunity and aiding the candidates with resources for research. Situated on the banks of Godavari, this city is on the lap of nature with lovely landscapes, lush paddy fields, meandering canals, swaying coconut and banana plantations. The city, known for its diverse and rich agricultural background will bring you closer to nature and KIMS will bring you to a comprehensive healthcare and sturdy educational environment.'}
          </span>
        </p>
        <button className='mt-4 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition duration-200 flex items-center'>
          <span className='mr-2 font-bold'>REGISTER NOW</span>
          <img src='/icons/arrow.svg' alt='' />
        </button>
      </div>
      <h5 className='text-md flex justify-center align-middle place-content-center font-bold py-2 my-3 w-full text-center text-[#1D3459] bg-[#e9e9cc]'>
        FACULTY
        <ChevronDown />
      </h5>
      <h5 className='text-md flex justify-center align-middle place-content-center font-bold py-2 w-full text-center text-[#1D3459] bg-[#e9e9cc]'>
        ORGANIZERS
        <ChevronDown />
      </h5>
    </div>
  );
};

export default About;
