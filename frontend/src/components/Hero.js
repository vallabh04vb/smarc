import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageCarousel from './ImageCarousel';

const HeroSection = () => {
  const images = [
  '/image/banner.png',
  '/image/c1.jpg',
  '/image/c3.jpg',
  ];
  const navigate = useNavigate();
  return (
    <section className='pt-20 bg-[#1D3459] text-white min-h-screen flex flex-col justify-center items-center p-6'>
      <p className='text-sm text-[#ee9d06] font-bold uppercase tracking-wider mt-4 mb-4 text-center'>
        8th Annual Life Science Conference
      </p>
      <div className='m-2'>
       <ImageCarousel images={images}  className="w-10 h-20 p-2 m-2" />
    </div>
      <div className='text-center flex flex-col justify-center items-center font-bold'>
        <p className='bg-[#ee9d06] text-[#1D3459] font-bold px-2 py-1 text-xs uppercase tracking-wide rounded-sm mb-4'>
          Southern Medicos Annual Research Conference
        </p>
        <ul className='space-y-4 text-sm'>
          <li className='flex items-center space-x-2'>
            <span className='material-icons'>
              <img src='/icons/calendar.svg' alt='' />
            </span>
            <span>September 19, 20, 21</span>
          </li>
          <li className='flex items-center space-x-2'>
            <span className='material-icons'>
              <img src='/icons/event.svg' alt='' />
            </span>
            <span>Three Day Event</span>
          </li>
          <li className='flex items-center space-x-2'>
            <span className='material-icons'>
              <img src='/icons/workshop.svg' alt='' />
            </span>
            <span>Workshops</span>
          </li>
          <li className='flex items-center space-x-2'>
            <span className='material-icons'>
              <img src='/icons/cultural.svg' alt='' />
            </span>
            <span>Cultural Events</span>
          </li>
          <li className='flex items-center space-x-2'>
            <span className='material-icons'>
              <img src='/icons/scientific.svg' alt='' />
            </span>
            <span>Scientific Events</span>
          </li>
          <li className='flex items-center space-x-2'>
            <span className='material-icons'>
              <img src='/icons/location.svg' alt='' />
            </span>
            <span>KIMS, Amalapuram</span>
          </li>
        </ul>
      </div>
      <button className='mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-3xl focus:outline-none flex items-center'  onClick={() => navigate('/registration')}>
        <span className='mr-2'>REGISTER NOW</span>
        <img src='/icons/arrow.svg' alt='' />
      </button>
      <div className='mt-8 bg-gray-200 text-center text-blue-900 p-4 rounded-md'>
        <p className='text-sm'>Do not miss out this event</p>
        <p className='text-xs font-bold'>"WHERE LEARNING MEETS FUN"</p>
      </div>
    </section>
  );
};

export default HeroSection;
