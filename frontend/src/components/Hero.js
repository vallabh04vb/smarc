import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageCarousel from './ImageCarousel';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isTimeUp, setIsTimeUp] = useState(false);
  const images = ['/image/banner.png', '/image/c1.jpg', '/image/c3.jpg'];
  const navigate = useNavigate();

  useEffect(() => {
    const countdownDate = new Date('September 19, 2024 08:00:00').getTime();
    // const countdownDate = new Date('August 30, 2024 12:15:50').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setIsTimeUp(true);
        setTimeLeft({});
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='pt-20 bg-[#1D3459] text-white min-h-screen flex flex-col justify-center items-center p-6'>
      <p className='text-sm text-[#ee9d06] font-bold uppercase tracking-wider mt-5 mb-4 text-center'>
        8th Annual Life Science Conference
      </p>
      <div className='m-2'>
        <ImageCarousel images={images} className='w-10 h-20 p-2 m-2' />
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
      {!isTimeUp ? (
        <div className='text-center bg-[#1D3459] text-white font-bold px-6 py-4 rounded-md shadow-lg mb-6'>
          <p className='text-lg'>Event Starts In:</p>
          <div className='flex justify-center space-x-4 mt-2'>
            <div className='flex flex-col items-center'>
              <p className='text-2xl md:text-4xl'>{timeLeft.days}</p>
              <p className='text-sm uppercase tracking-wider'>Days</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-2xl md:text-4xl'>{timeLeft.hours}</p>
              <p className='text-sm uppercase tracking-wider'>Hours</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-2xl md:text-4xl'>{timeLeft.minutes}</p>
              <p className='text-sm uppercase tracking-wider'>Minutes</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-2xl md:text-4xl'>{timeLeft.seconds}</p>
              <p className='text-sm uppercase tracking-wider'>Seconds</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center bg-[#1D3459] text-white font-bold px-6 py-4 rounded-md shadow-lg mb-6'>
          <p className='text-lg'>Event Date:</p>
          <p className='text-2xl md:text-4xl'>September 19, 2024</p>
        </div>
      )}
      <button
        className='mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-3xl focus:outline-none flex items-center'
        onClick={() => navigate('/registration')}
      >
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
