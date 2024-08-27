import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled
          ? 'bg-gray-900 text-white shadow-lg'
          : 'bg-white text-gray-800 shadow-md'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center p-4'>
        {/* Brand Logo */}
        <div className='flex-shrink-0'>
          <img src='/image/1.png' alt='Brand' className='h-12 w-auto' />
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
        <div className='hidden md:flex md:items-center md:space-x-6'>
          <a
            href='/'
            className={`hover:text-gray-400 ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            Home
          </a>
          <a
            href='/'
            className={`hover:text-gray-400 ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            About
          </a>
          <a
            href='/'
            className={`hover:text-gray-400 ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            Services
          </a>
          <a
            href='/'
            className={`hover:text-gray-400 ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            Contact
          </a>
          <a
            href='/registration'
            className={`hover:text-gray-400 ${
              isScrolled ? 'text-white' : 'text-gray-800'
            }`}
          >
            Registration
          </a>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${
            isScrolled ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
          } shadow-lg`}
        >
          <div className='flex flex-col space-y-2 p-4'>
            <a href='/' className='hover:text-gray-400'>
              Home
            </a>
            <a href='/' className='hover:text-gray-400'>
              About
            </a>
            <a href='/' className='hover:text-gray-400'>
              Services
            </a>
            <a href='/' className='hover:text-gray-400'>
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
