import React, { useState } from 'react';

import Calendar2 from './Calendar2';
import Footer from './Footer';

const scientificData = [
  {
    title: 'Paper Presentation',
    content:
      'Fantastic opportunity for students and researchers to showcase their innovative ideas, research findings, and academic work. Participants will present their papers in front of a panel of judges and an engaged audience, sparking meaningful discussions and gaining valuable feedback.',
  },
  {
    title: 'Poster Presentation',
    content:
      'The perfect platform for students and researchers to visually communicate their ideas, findings, and projects. Participants will display their posters in an open exhibition, where they can engage with viewers, discuss their work, and receive constructive feedback from judges and peers.',
  },
  {
    title: 'Case Presentation',
    content:
      "Dive into real-world problem-solving with our Case Presentation event! This event invites participants to analyze and present solutions to real or hypothetical cases within their field of study. It's a great way to engage with complex issues and innovate, demonstrating critical thinking, analytical skills, and subject knowledge.",
  },
  {
    title: 'Medical Dumb Charades',
    content:
      "A Fun and Interactive way to learn. This unique and engaging game combines acting, guessing, and learning. It's a fun and interactive way to teach and learn medical concepts, diagnoses, treatments, and more. Gather your colleagues, classmates, or friends and get ready to act out and learn!",
  },
  {
    title: 'Panel Discussion',
    content:
      "Exploring Insights and Perspectives. A dynamic and interactive format that brings together experts and thought leaders to share insights, experiences, and perspectives on a specific topic. It's an opportunity to explore complex issues from multiple angles. A great way to expand your knowledge and network!",
  },
  {
    title: 'Debate',
    content:
      "A platform where ideas clash, minds open, and perspectives shift. It's a space to learn from the differences. Join the conversation, share your ideas, and let's get talking! Debating is a powerful way to grow, learn, and connect with others. So, what are you waiting for? Let's debate!",
  },
  {
    title: 'Medical Quiz',
    content:
      'Calling all the medicos out there! Are you ready to put your medical knowledge to the test? Join our medical quiz and compete with others to show off your skills. Interact and engage in a session that will test your medical knowledge, critical thinking, and problem-solving skills. Register now and get ready to quiz!',
  },
  {
    title: 'Mock Drill',
    content:
      '"Preparing for the Unexpected." Join us for a unique and immersive disaster management mock drill experience. This interactive training session will simulate a real-life disaster scenario, challenging participants to respond and manage the situation. Don\'t miss this opportunity to test your disaster management skills and preparedness.',
  },
  {
    title: 'Medi-Hunt',
    content:
      'Every clue a chill, Every step a thrill. Get ready to decode clues and embark on a quest to reach the ULTIMATE HIDDEN TREASURE.',
  },
];
const Scientific = () => {
  const [isScientificExpanded, setIsScientificExpanded] = useState(
    Array(scientificData.length).fill(false)
  );

  const toggleScientific = (index) => {
    const newScientificState = [...isScientificExpanded];
    newScientificState[index] = !newScientificState[index];
    setIsScientificExpanded(newScientificState);
  };

  return (
    <div className='mt-20'>
      <div>
        <img
          src='/image/scientific/hero.png'
          alt='SMARC 2024 Banner'
          className='w-full'
        />
      </div>
      <div className='hero bg-[#1d3459] text-white py-12'>
        <h1 className='text-4xl font-bold text-center'>
          SCIENTIFIC ACTIVITIES
        </h1>
      </div>

      <div className='container mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-4 text-[#1d3459]'>
          Scientific Activities at SMARC
        </h2>
        <p className='mb-4'>
          SMARC offers a wide range of scientific activities designed to promote
          learning, collaboration, and innovation. These activities provide a
          platform for researchers and medicos to share their knowledge,
          showcase research, and engage in meaningful discussions. Join us in
          the scientific activities that will enrich your professional growth
          and development!
        </p>

        <h3 className='text-lg font-bold mb-4'>Scientific Overview</h3>
        <p className='mb-4'>
          There will be a total of 9 scientific activities in the conference.
        </p>

        {scientificData.map((activity, index) => (
          <div key={index} className='mb-4'>
            <button
              className='flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow'
              onClick={() => toggleScientific(index)}
            >
              <span className='text-xl'>i</span>
              <span className='ml-4'>{activity.title}</span>
              <span>{isScientificExpanded[index] ? '-' : '+'}</span>
            </button>
            {isScientificExpanded[index] && (
              <div className='bg-white px-4 py-2 border border-gray-200 rounded mt-2'>
                <p>{activity.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Calendar2 />
      <Footer />
    </div>
  );
};

export default Scientific;
