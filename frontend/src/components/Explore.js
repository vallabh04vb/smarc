import React from 'react';
import { Star, Music, Lightbulb, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ icon: Icon, title, description, path }) => {
  const navigate = useNavigate();
  return (
    <div className='flex items-start mb-6 last:mb-0'>
      <div className='w-1/3 flex items-center justify-center'>
        <Icon className='w-16 h-16 text-white' /> {/* Adjust size as needed */}
      </div>
      <div className='w-2/3 pl-4'>
        <h3 className='text-xl font-semibold mb-1'>{title}</h3>
        <p className='text-sm mb-3'>{description}</p>
        <button
          className='bg-white text-[#1D3459] px-4 py-2 rounded-full text-sm font-bold flex items-center'
          onClick={() => navigate(path)}
        >
          READ MORE
          <ArrowRight className='w-4 h-4 ml-1' />
        </button>
      </div>
    </div>
  );
};

const Explore = () => {
  const categories = [
    {
      icon: Star,
      title: 'Workshops',
      description:
        'The SMARC event offers a series of hands-on workshops designed to provide in-depth knowledge and practical skills in various medical fields.',
      path: '/workshops',
    },
    {
      icon: Music,
      title: 'Culturals',
      description:
        'At SMARC, we believe in the importance of a well-rounded experience, which is why our cultural events are a vital part of the conference.',
      path: '/culturals',
    },
    {
      icon: Lightbulb,
      title: 'Scientific',
      description:
        'The scientific competitions at SMARC are a highlight of the event, aimed at fostering a spirit of research and innovation among medical students.',
      path: '/scientific',
    },
  ];
  return (
    <div className='bg-[#1D3459] text-white p-6 mx-auto'>
      <div className='flex items-center justify-between mb-10'>
        <div className='h-px bg-white flex-grow'></div>
        <h2 className='text-lg font-semibold mx-2 bg-[#e9e9cc] text-[#1D3459] p-2 py-1'>
          Explore Event Categories
        </h2>
        <div className='h-px bg-white flex-grow'></div>
      </div>

      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  );
};

export default Explore;
