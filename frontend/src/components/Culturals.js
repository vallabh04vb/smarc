import React , {useState} from 'react'
import Calendar from './Calendar';

const culturalsData = [
    {
      title: "Fashion Parade",
      content: "Showcase your style and talent on the runway and screen. Compete for prizes, recognition, and a chance to shine. Join our Fashion parade, take your skills to the next level!"
    },
    {
      title: "Cooking without Fire",
      content: "Unleash your culinary creativity. Join our 'Cooking without Fire' competition and discover a world of flavors without the flames. Register now and unleash your inner chef!"
    },
    {
      title: "Dance",
      content: "Unleash your inner dancer and showcase your moves at SMARC. Don't miss this opportunity to showcase your talent, relieve stress, and bond with fellow medical professionals. Register now and get ready to dance!"
    },
    {
      title: "Singing",
      content: "Get ready to harmonize, get ready to shine - Singing opportunities await. Join our vibrant singing community and discover your true vocal potential. Don't miss your chance to shine. This adds a competitive element with cash prizes, making the opportunity even more enticing for aspiring singers."
    },
    {
      title: "Playing an Instrument",
      content: "Join the orchestra of life - Play an instrument and harmonize with others! Don't miss your chance to harmonize with others and become a part of the orchestra of life! Register now and start making music. All Instruments are welcomed!"
    },
    {
      title: "Arts",
      content: "Calling all medical professionals with a creative streak. This event aims to showcase the artistic talents of medical professionals, exploring the intersection of art and medicine. 'Where medicine meets masterpiece. Experience the fusion of art and science!' Join us in celebrating the creative side of medicine!"
    },
    {
      title: "Mimicry",
      content: "Step into character, step into fun - Mimic your way to stardom! Unlock your inner actor, comedian, or impressionist and discover the thrill of mimicry! Register now and get ready."
    },
    {
      title: "Photography",
      content: "We invite you to participate in our photography competition, where you can showcase your creative vision and storytelling skills. This competition is open to all, and we encourage you to submit your best photographs that capture life's precious moments."
    },
    {
      title: "Med Fun",
      content: "Join us for a fun-filled event that brings together medical professionals and students for an evening of entertainment, networking, and celebration. Come and experience the lighter side of medicine and get ready for an event to remember!"
    },
    {
      title: "Short Film Contest",
      content: "Leave a lasting impression with your short film. Don't miss your chance to make your mark! Submit your short film now and take the first step towards stardom!"
    }
  ];
const Culturals = () => {
    const [isCulturalExpanded, setIsCulturalExpanded] = useState(Array(culturalsData.length).fill(false));

    const toggleCultural = (index) => {
      const newCulturalState = [...isCulturalExpanded];
      newCulturalState[index] = !newCulturalState[index];
      setIsCulturalExpanded(newCulturalState);
    };
  
    return (
      <div className='mt-20'>
        <div className="hero bg-[#1d3459] text-white py-16">
          <h1 className="text-4xl font-bold text-center">CULTURALS</h1>
        </div>
  
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4 text-[#1d3459]">Cultural Activities at SMARC</h2>
          <p className="mb-4">
            Yay! Let's talk about cultural activities in SMARC! SMARC has a vibrant cultural scene, providing students with a much-needed break from their rigorous academic schedules. These activities help foster creativity, teamwork, and stress relief.
          </p>
          <p className="mb-4">
            Cultural activities provide a refreshing break from academics, allowing students to explore their creative side and build a sense of community. By incorporating culturals into medical conferences, organizers aim to create a holistic experience that combines academic learning with cultural enrichment and socialization.
          </p>
  
          <h3 className="text-lg font-bold mb-4">Culturals Overview</h3>
          <p className="mb-4">Total 14 Culturals</p>
  
          <h3 className="text-lg font-semibold mb-2">Sit Back and Relax</h3>
          <p className="mb-6">In this section, 4 culturals will be covered. An image will be provided which should be kept.</p>
  
          <h3 className="text-lg font-semibold mb-2">Participation</h3>
          <p className="mb-4">In this section, 10 culturals will be covered.</p>
  
          {culturalsData.map((cultural, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow"
                onClick={() => toggleCultural(index)}
              >
                <span className="text-xl">i</span>
                <span className="ml-4">{cultural.title}</span>
                <span>{isCulturalExpanded[index] ? '-' : '+'}</span>
              </button>
              {isCulturalExpanded[index] && (
                <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
                  <p>{cultural.content}</p>
                </div>
              )}
            </div>
          ))}
  
          <h3 className="text-lg font-bold mb-4">Previous Event Gallery</h3>
          <p className="mb-4">Photos will be provided which can be updated on the go!</p>
        </div>
       <Calendar/>
      </div>
    );
  };


export default Culturals
