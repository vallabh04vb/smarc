import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h5 className='text-md font-bold py-2  w-full text-center text-[#1D3459] bg-[#e9e9cc]'>
        Welcome to SMARC-2024
      </h5>
      <div className='flex flex-col text-center items-center justify-center p-8 bg-[#1D3459] text-white'>
        <img
          src='/image/logo.svg'
          alt='SMARC-2024 Logo'
          className='w-52 h-52 mb-4'
        />
        <h2 className='text-xl font-bold mb-2'>Hello there! 👋</h2>
        <p className='text-lg mb-4'>
          Bored with day to day routine in colleges?
        </p>
        <p className='text-base mb-6 text-center'>
          No worries SMARC 2k24 is here & we invite all the medicos to light up
          this event with your presence. This journey includes remakarkable
          workshops & unforgettable culturals, various scientific activities &
          games.
        </p>
        <p className='text-base mb-6 text-center'>
          From insightful knowledge to incredible fun.
        </p>
        <p className='text-base mb-6 text-center'>What not !</p>
        <p className='text-base mb-6 text-center font-bold'>
          Click below to Register for the Event
        </p>
        <button className='mt-4 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition duration-200 flex items-center' onClick={()=>navigate("./registration")}>
          <span className='mr-2 font-bold'>REGISTER NOW</span>
          <img src='/icons/arrow.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
