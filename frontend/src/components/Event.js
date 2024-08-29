import React from 'react';
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const eventData = [
    { category: 'Workshops', day1: 5, day2: 5, day3: 4, total: 14 },
    { category: 'Cultural Events', day1: 3, day2: 2, day3: 2, total: 7 },
    { category: 'Scientific', day1: 2, day2: 2, day3: 2, total: 6 },
  ];
  const navigate = useNavigate();

  return (
    <div className='bg-[#1D3459] flex flex-col items-center justify-center p-6 max-w-md mx-auto text-white'>
      <h2 className='text-2xl font-bold text-[#F79E32] mb-4'>EVENT OVERVIEW</h2>

      <div className='mb-6'>
        <div className='flex items-center mb-4'>
          <div className='bg-[#F79E32] text-[#1D3459] rounded-full w-8 h-8 flex items-center justify-center text-navy-800 font-bold mr-2'>
            3
          </div>
          <p className='text-lg'>Three Day Event</p>
        </div>
        <div className='flex items-center'>
          <div className='bg-[#F79E32] text-[#1D3459] rounded-full w-8 h-8 flex items-center justify-center text-navy-800 font-bold mr-2'>
            3
          </div>
          <p className='text-lg'>Three Event Categories</p>
        </div>
      </div>

      {/* <table className='w-full mb-6'>
        <thead>
          <tr className='text-[#F79E32]'>
            <th className='text-left font-normal pb-2'></th>
            <th className='text-left font-normal pb-2 w-1/6'>DAY 1</th>
            <th className='text-left font-normal pb-2 w-1/6'>DAY 2</th>
            <th className='text-left font-normal pb-2 w-1/6'>DAY 3</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((row, index) => (
            <tr key={index}>
              <td className='py-1 pr-2 text-sm'>{row.category}</td>
              <td className='py-1 px-2 border border-white'>{row.day1}</td>
              <td className='py-1 px-2 border border-white'>{row.day2}</td>
              <td className='py-1 px-2 border border-white'>{row.day3}</td>
              <td className='py-1 pl-2 text-right text-sm'>
                {row.total} {row.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div>
        <img
          src='/image/eventbox.png'
          alt='SMARC 2024 Banner'
          className='w-full mb-2'
        />
      </div>
    
        <h3 className='text-[#F79E32] my-2 mb-4 underline'>Quick Links</h3>
     

      <div className='mb-4'>
        <button className='bg-[#F79E32] text-navy-800 w-full p-3 py-2 rounded-2xl font-bold mb-4 flex items-center justify-center' onClick={()=>navigate("./faqs")}>
          <svg
            className='w-5 h-5 mr-2'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
              clipRule='evenodd'
            />
          </svg>
          FAQs
        </button>
        <button className='bg-[#F79E32] text-navy-800 w-full p-3 py-2 rounded-2xl font-bold flex items-center justify-center'>
          <a href='/pdf/event.pdf' className='flex items-center justify-center'>
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
            Event Brochure
          </a>
        </button>
      </div>
    </div>
  );
};

export default Event;
