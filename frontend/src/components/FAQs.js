import React, { useState } from 'react';
import Footer from './Footer';
import { ChevronDown } from 'lucide-react';
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is SMARC?',
      answer: (
        <>
          <p><strong>DESCRIPTION:</strong> Join us for the 8th Annual Life Science Conference.</p>
          <p><strong>FULL NAME:</strong> Southern Medicos Annual Research Conference.</p>
          <p><strong>SIGNIFICANCE:</strong> This is a highly anticipated return of an acclaimed medical conference after a year hiatus. Nestled in the vibrant greenery of Konaseema, this event promises to be bigger and better than ever. Prepare to immerse yourself in the fascinating world of medical sciences, where we explore the intricate craftsmanship of reviving life itself—a realm that rivals the divine.</p>
        </>
      ),
    },
    {
      question: 'When and where is SMARC 2024 taking place?',
      answer: (
        <>
          <p><strong>DATES:</strong> 19, 20, 21 September</p>
          <p><strong>LOCATION:</strong> Amalapuram</p>
          <p><strong>VENUE:</strong> KIMS and RF</p>
        </>
      ),
    },
    {
      question: 'Who can attend SMARC?',
      answer: (
        <>
          <p>UG: All 5 years MBBS students</p>
          <p>PG: All 3 year students</p>
          <p>Above PG</p>
        </>
      ),
    },
    {
      question: 'How do I register for SMARC 2024?',
      answer: <p>Enter this column after you finish setting up the process.</p>,
    },
    {
      question: 'What are the registration fees, and what do they include?',
      answer: (
        <>
          <p><strong>BASIC REGISTRATION:</strong></p>
          <ul>
            <li>Early Bird – 1199/-</li>
            <li>Late Bird – 1349/-</li>
          </ul>
          <p><strong>WORKSHOPS INDIVIDUAL REGISTRATION:</strong> Data mentioned in the brochure.</p>
          <p><strong>SCIENTIFIC ACTIVITIES INDIVIDUAL REGISTRATION:</strong> Data mentioned in the brochure.</p>
        </>
      ),
    },
    {
      question: 'Can I register on the day of the event?',
      answer: <p>On-spot registration – 1499/-</p>,
    },
    {
      question: 'What is the cancellation and refund policy?',
      answer: <p>No cancellation and refund policy.</p>,
    },
    {
      question: 'Are there any accommodation options available for outstation delegates?',
      answer: (
        <>
          <p><strong>ACCOMMODATION:</strong></p>
          <p>1. Hostels – Fee 99/- per day</p>
          <ul>
            <li>Rooms with attached bathrooms will be provided.</li>
            <li>Delegates need to carry their own blankets, personal toiletries, etc.</li>
          </ul>
          <p>2. Hotels:</p>
          <ul>
            <li>Monday Hotels Amalapuram Heights</li>
            <li>OYO Vintage Ground</li>
            <li>Hotel Grand Park</li>
            <li>Hotel Subhagruha</li>
            <li>Hotel Satkar</li>
            <li>Royal Palace</li>
            <li>RK Grand Hotel</li>
            <li>Swayamprabha Service Apartments</li>
            <li>Srikala Grand Residency</li>
            <li>Hotel Preethi Residency</li>
            <li>Konaseema Vididhillu</li>
          </ul>
        </>
      ),
    },
    {
      question: 'How do I get to the event venue?',
      answer: (
        <>
          <p><strong>BY TRAIN:</strong> To Kakinada, To Palakollu</p>
          <p><strong>BY BUS:</strong> To Amalapuram Bus Stand, To Rajahmundry</p>
          <p><strong>BY FLIGHT:</strong> To Rajahmundry Airport</p>
          <p>Travel charges are at one’s own expense.</p>
          <p>Private bus facilities are available from all major cities to Amalapuram.</p>
        </>
      ),
    },
    {
      question: 'Is parking available at the venue?',
      answer: <p>Free parking is available at parking lots situated all around the campus.</p>,
    },
    {
      question: 'What are the key events and sessions at SMARC 2024?',
      answer: (
        <>
          <p><strong>WORKSHOPS:</strong> 15 workshops to be done by the delegates and guided by professors.</p>
          <p><strong>SCIENTIFIC ACTIVITIES:</strong> Activities to build up the communication between you and the medicine.</p>
          <p><strong>CULTURALS:</strong> Power-packed 3 nights with singing, dancing, amazing DJ night, and many more!!!</p>
        </>
      ),
    },
    {
      question: 'Is there a dress code for the event?',
      answer: (
        <>
          <p><strong>TO WORKSHOPS AND SCIENTIFIC ACTIVITIES:</strong> A formal outfit would be preferred.</p>
          <p><strong>CULTURALS:</strong> Ethnic wear alongside.</p>
        </>
      ),
    },
    {
      question: 'Will meals be provided during the event?',
      answer: (
        <>
          <p>Breakfast, lunch, dinner – on 19, 20, 21 September will be provided.</p>
          <p>Food and drink stalls will be present, items are to be purchased.</p>
        </>
      ),
    },
    {
      question: 'Can I attend multiple sessions at the same time?',
      answer: <p>At the same time - no.</p>,
    },
    {
      question: 'What should I do if I encounter issues with the website or registration?',
      answer: <p>Developer contact.</p>,
    },
    {
      question: 'Is there Wi-Fi available at the venue?',
      answer: <p>No.</p>,
    },
    {
      question: 'How can I participate in the scientific competitions?',
      answer: <p>Mail to send the paper and projects - smarcabstract2k24@gmail.com.</p>,
    },
    {
      question: 'Can I volunteer at SMARC 2024?',
      answer: <p>No.</p>,
    },
    {
      question: 'What health and safety measures are in place for the event?',
      answer: <p>In case of any personal awareness and health issues – kindly carry a mask and hand sanitizer.</p>,
    },
    {
      question: 'Who do I contact in case of an emergency during the event?',
      answer: (
        <>
          <p>Aasish – 9848537972</p>
          <p>Vijay – 7661879571</p>
          <p>Lokesh – 8978328502</p>
        </>
      ),
    },
    {
      question: 'How can I connect with other delegates?',
      answer: (
        <>
          <p><strong>WORKSHOPS AND SCIENTIFIC ACTIVITIES:</strong> Slot-based WhatsApp groups will be created.</p>
          <p><strong>CULTURALS:</strong> Gathering at the cultural events.</p>
        </>
      ),
    },
    {
      question: 'Where can I follow SMARC updates on social media?',
      answer: (
        <>
          <p><strong>INSTAGRAM:</strong> <a href="https://www.instagram.com/smarc_2k24/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/smarc_2k24/</a></p>
          <p><strong>YOUTUBE:</strong> <a href="https://www.youtube.com/@ZAVIANS_2k21" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@ZAVIANS_2k21</a></p>
        </>
      ),
    },
    {
      question: 'Are there any discounts available for students or groups?',
      answer: <p>No (as of now).</p>,
    },
    {
      question: 'How do I submit feedback after the event?',
      answer: <p>Google Forms to be filled after the completion of the workshops and overall event.</p>,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='mt-20 '>
      
      <div className='hero bg-[#1d3459] text-white py-16'>
        <h1 className='text-4xl font-bold text-center'>Frequently Asked Questions</h1>
      </div>
      <div className='m-4 pt-6'>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 onClick={() => toggleFAQ(index)} style={{ cursor: 'pointer' }}>

              {faq.question}
              <ChevronDown />
            </h3>
            {activeIndex === index && (
              <div>
                {faq.answer}
                
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default FAQs;
