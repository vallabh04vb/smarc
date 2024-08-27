import React, { useState } from 'react';
import {
  MapPin,
  PlaneTakeoff,
  House,
  ChevronDown,
  ChevronUp,
  CirclePlus,
  CircleMinus,
} from 'lucide-react';

const AccordionItem = ({ title, description, isOpen, onClick }) => (
  <div>
    <div
      className='cursor-pointer flex items-center gap-16 justify-between p-2 border-b border-[#e9e9cc]'
      onClick={onClick}
    >
      <h4 className='text-lg font-semibold'>{title}</h4>
      {isOpen ? (
        <img src='/icons/minus.svg' alt='' className='w-6 h-6' />
      ) : (
        <img src='/icons/plus.svg' alt='' className='w-6 h-6' />
      )}
    </div>
    {isOpen && <p className='text-sm p-2'>{description}</p>}
  </div>
);

const Card = ({ icon: Icon, title, accordionItems }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col mb-6 last:mb-0 rounded-lg'>
      <div className='flex items-center p-4'>
        <div className='w-1/6 flex items-center justify-center'>
          <Icon className='w-16 h-16 text-[#e9e9cc]' />
        </div>
        <div className='ml-4 w-100'>
          <h3 className='text-xl font-semibold mb-1'>{title}</h3>
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const categories = [
    {
      icon: MapPin,
      title: 'Workshops',
      accordionItems: [
        {
          title: 'KIMS Campus',
          description: 'Details about the first workshop in the series.',
        },
        {
          title: 'Amalapuram',
          description: 'Details about the second workshop in the series.',
        },
      ],
    },
    {
      icon: PlaneTakeoff,
      title: 'Culturals',
      accordionItems: [
        {
          title: 'Cultural Event 1',
          description: 'Details about the first cultural event.',
        },
        {
          title: 'Cultural Event 2',
          description: 'Details about the second cultural event.',
        },
      ],
    },
    {
      icon: House,
      title: 'Scientific',
      accordionItems: [
        {
          title: 'Scientific Competition 1',
          description: 'Details about the first scientific competition.',
        },
        {
          title: 'Scientific Competition 2',
          description: 'Details about the second scientific competition.',
        },
      ],
    },
  ];

  return (
    <div className='bg-[#1D3459] text-white p-6 max-w-md mx-auto'>
      {categories.map((category, index) => (
        <Card key={index} {...category} />
      ))}
      <div className='flex flex-col items-center justify-centerbg-[#1D3459] text-[#ffaa01]'>
        <button className='mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-3xl focus:outline-none flex items-center'>
          <span className='mr-2'>VIEW PRICING</span>
          <img src='/icons/arrow.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default Pricing;
