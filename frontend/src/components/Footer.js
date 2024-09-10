import { Globe, Instagram, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#1d3459] text-white'>
      <div className='py-10 px-6'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>About KIMS</h2>
            <p className='mb-4'>
              <a
                href='https://kims.in'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:underline'
              >
                KIMS.IN
              </a>
            </p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.689689317005!2d82.0235747!3d16.5921202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37efea38c50c33%3A0xc68760bff7c887dc!2sKonaseema%20Inst.%20of%20Medical%20Sciences%20%26%20Research%20Foundation!5e0!3m2!1sen!2sin!4v1724953486232!5m2!1sen!2sin'
              width='100%'
              height='200'
              title='Event Location'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            />
          </div>
          <div>
            <h2 className='text-lg font-bold mb-4'>Legal Info</h2>
            <ul className='list-none space-y-2'>
              <li>
                <a
                  href='/terms'
                  className='text-white no-underline hover:underline'
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href='/privacypolicy'
                  className='text-white no-underline hover:underline'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='/cancellations'
                  className='text-white no-underline hover:underline'
                >
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-bold mb-4'>Contact Us</h2>
            <p className='mb-4'>
              Feel free to get in touch in case of any help or query:
            </p>
            <p className='mb-4'>
              Email:{' '}
              <a
                href='mailto:zavians.smarc2024@gmail.com'
                className='text-white hover:underline no-underline'
              >
                zavians.smarc2024@gmail.com
              </a>
            </p>
            <ul className='list-none space-y-2'>
              <li>K Dheeresh: 9490707111</li>
              <li>M Sri Nidhi: 7416960665</li>
              <li>M Sai Sreya: 8803458888</li>
              <li>K Chandan: 7995529942</li>
            </ul>
          </div>
          <div>
            KONASEEMA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH FOUNDATION,
            CHAITANYA HEALTH CITY, NH216 East Godavari ANDHRA PRADESH 533201.
          </div>
          <div className='flex items-start'>
            <h2 className='text-lg font-bold mb-4 pt-2'>Follow Us:</h2>
            <ul className='list-none space-y-2 flex items-baseline gap-2'>
              <li>
                <a
                  href='https://www.instagram.com/smarc_2k24/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:underline'
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/@ZAVIANS_2k21'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:underline'
                >
                  <Youtube />
                </a>
              </li>
              <li>
                <a
                  href='https://smarc2k24.online'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:underline'
                >
                  <Globe />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='py-6 text-center bg-black flex flex-col justify-center align-middle place-content-center'>
        <div className='flex justify-center'>
          <img src='/campusjamlogo.png' className='w-16 h-16 mb-3' alt='' />
        </div>
        Designed by Campus Jam &copy; All Rights Reserved <br />
        <br /> Developed and Maintained by Eshway
      </div>
    </footer>
  );
};

export default Footer;
