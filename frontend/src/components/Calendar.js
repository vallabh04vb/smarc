import React from 'react';
import { useNavigate } from 'react-router-dom';
const Calendar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#1D3459] text-[#ffaa01] p-10'>
      <h1 className='text-2xl font-bold text-center mb-4'>
        MARK YOUR CALENDAR
      </h1>
      <img
        src='/image/calendar.png'
        alt='Calendar for September'
        className='w-80 mb-6'
      />
      {/* <h2 className='text-xl font-semibold text-center mb-4'>September</h2> */}

      <h3 className='text-lg font-bold mb-6 bg-white text-[#1D3459] px-2 py-0'>
        EVENT HIGHLIGHTS
      </h3>
      <ul className='mb-5'>
        <li className='flex items-center mb-5'>
          <img
            src='/icons/check.svg'
            alt='Check icon'
            className='w-4 h-4 mr-2'
          />
          Expert-Led Workshops
        </li>
        <li className='flex items-center mb-5'>
          <img
            src='/icons/check.svg'
            alt='Check icon'
            className='w-4 h-4 mr-2'
          />
          Participation Certificate
        </li>
        <li className='flex items-center mb-5'>
          <img
            src='/icons/check.svg'
            alt='Check icon'
            className='w-4 h-4 mr-2'
          />
          Scientific Paper Presentations
        </li>
        <li className='flex items-center mb-5'>
          <img
            src='/icons/check.svg'
            alt='Check icon'
            className='w-4 h-4 mr-2'
          />
          Celebrity Night
        </li>
        <li className='flex items-center mb-5'>
          <img
            src='/icons/check.svg'
            alt='Check icon'
            className='w-4 h-4 mr-2'
          />
          DJ Night
        </li>
        <li className='flex items-center mb-5'>
          <img
            src='/icons/check.svg'
            alt='Check icon'
            className='w-4 h-4 mr-2'
          />
          Cultural Performances
        </li>
        <li className='flex items-center mb-5'>
          <img
            src='/icons/check.svg'
            alt='Check icon'
            className='w-4 h-4 mr-2'
          />
          Fashion Parade
        </li>
      </ul>

      <p className='text-lg font-bold mb-4'>
        <span className='text-[#e9e9cc]'>Get Ready for</span>
        <span classname='text-[#ffaa01]'> SMARC 2024!</span>
      </p>
      <div className='flex justify-center items-center mt-3'>
        <span className='p-2 rounded-full mx-1'>
          <img src='/icons/19.svg' alt='' />
        </span>
        <span className='p-2 rounded-full mx-1'>
          <img src='/icons/20.svg' alt='' />
        </span>
        <span className='p-2 rounded-full mx-1'>
          <img src='/icons/21.svg' alt='' />
        </span>
      </div>
      <button className='mt-4 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition duration-200 flex items-center' onClick={() => navigate('/registration')}>
        <span className='mr-2 font-bold'>REGISTER NOW</span>
        <img src='/icons/arrow.svg' alt='' />
      </button>
    </div>
  );
};

export default Calendar;
