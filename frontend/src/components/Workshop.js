import React, { useState } from 'react';
import Calendar from './Calendar';

const workshopsData = [
  {
    title: "Basic Surgical Skills (BSS)",
    content: "Gain the confidence and expertise you need to excel in surgical settings. Our Basic Surgical Skills workshop covers the core techniques like gowning, gloving, suturing, catheterisation, ryles tube insertion, and wound dressing. Join us and discover the satisfaction of providing exceptional patient care."
  },
  {
    title: "ENT",
    content: "Elevate your ENT practice with our comprehensive workshop, covering essential procedures like foreign body removal, nasal packing, and ear surgery. Learn from experienced faculty and network with peers in a supportive and interactive environment."
  },
  {
    title: "ECG 🫀",
    content: "Uncover the rhythms of the heart! Learn the fundamentals of ECG interpretation and unlock the secrets of cardiac diagnosis in our interactive workshop."
  },
  {
    title: "WET LAB",
    content: "Enhance your surgical skills and build the bridge between science and art with our hands-on demonstration of pig skin suturing and buffalo bowel anastomosis."
  },
  {
    title: "Orthopedics",
    content: "Explore the latest techniques in Orthopedics and learn from experts in the field. From tendon repair to plate fixation, get hands-on training and elevate your practice!"
  },
  {
    title: "Forensic Medicine",
    content: "Come and join this workshop with us to reveal the truth of a crime scene through a crime investigation skit. Gain the knowledge of ballistics & assess your knowledge of forensic science."
  },
  {
    title: "Gynaecology",
    content: "Elevate your Obstetrics and Gynaecology skills with our Workshop to gain hands-on experience in essential childbirth procedures, from normal and breech deliveries to forceps techniques and IUD insertion. Perfect for enhancing your practical skills in a supportive environment."
  },
  {
    title: "GI Laparoscopy",
    content: "Master the Art of Minimally Invasive Surgery - Join Our GI Laparoscopy Workshop where we learn laparoscopy, endoscopy, and laser applications. Join us for an unforgettable learning experience and discover the latest advancements in GI laparoscopy!"
  },
  {
    title: "Intensive Care Unit",
    content: "Learn the critical skills needed to handle life-threatening injuries in this ICU workshop from road traffic accidents, including emergency management, ICU transfer, and team-based approaches for cardiac arrest and shock management."
  },
  {
    title: "Pulmonology",
    content: "From breath sounds to pleural fluid tapping and ABG analysis, our Pulmonology workshop covers it all! Join us to enhance your lung health assessment skills and provide better patient outcomes."
  },
  {
    title: "Psychiatry",
    content: "This workshop will provide participants with a comprehensive overview of critical mental health topics. It will also focus on early intervention."
  },
  {
    title: "Oncology",
    content: "This workshop provides an introduction to CANCER CARE. Participants will explore various diagnostic techniques, including imaging and molecular testing, that are crucial for identification at its earliest stages. This also offers other innovative treatment options."
  },
  {
    title: "Neonatology",
    content: "Discover life-saving techniques in our Neonatology workshop, focusing on neonatal resuscitation, CPR, and intubation. Equip yourself with the skills needed to protect and care for our most vulnerable patients—newborns."
  },
  {
    title: "Basic Procedural Clinical Skills",
    content: "Dive into the practical side of medicine with our workshop on procedural clinical skills, covering heart sounds, ascitic fluid removal, and lumbar puncture techniques. Ideal for anyone interested in developing a solid foundation in clinical procedures."
  },
  {
    title: "Ophthalmology",
    content: "Join our ophthalmology workshop to gain hands-on experience in essential eye procedures, including injections, cataract surgery on goat eyes, and foreign body removal. Perfect for enhancing your practical skills under expert guidance."
  }
];

const Workshop = () => {
  const [isWorkshopExpanded, setIsWorkshopExpanded] = useState(Array(workshopsData.length).fill(false));

  const toggleWorkshop = (index) => {
    const newWorkshopState = [...isWorkshopExpanded];
    newWorkshopState[index] = !newWorkshopState[index];
    setIsWorkshopExpanded(newWorkshopState);
  };

  return (
    <div className='mt-20'>
      
      <div className="hero bg-[#1d3459] text-white py-16">
              <h1 className="text-4xl font-bold text-center">WORKSHOPS - “Bridging Theory with Practice"</h1>
            </div>
      <h3 className="text-lg font-semibold mb-2">Hands-On Workshops Led by Expert Faculty—Your Gateway to Clinical Mastery</h3>
      <p className="mb-4">
        Brace yourselves with energy & enthusiasm to experience the Exaltation of SMARC
      </p>
      
      <h4 className="text-lg font-semibold mb-2">Content</h4>
      <p className="mb-6">
        "Join us at our Annual Conference, designed exclusively for undergraduate medical students eager to enhance their clinical skills. This year’s event features a series of interactive workshops where you'll receive hands-on training from experienced faculty. From mastering critical procedures to exploring advanced medical techniques, this conference is your opportunity to build confidence and competence in a supportive learning environment."
      </p>
      
      <h3 className="text-lg font-semibold mb-2">What Medicos Will Be Getting?</h3>
      <ul className="list-disc ml-6 mb-6">
        <li>Practical Skills: Direct, hands-on experience in performing essential medical procedures.</li>
        <li>Expert Guidance: Personalized instruction from seasoned professionals and academic leaders.</li>
        <li>Networking Opportunities: Connect with peers and mentors who share your passion for medicine.</li>
        <li>Certificates of Participation: Earn certificates that recognize your commitment to advancing your medical education.</li>
        <li>Insights into Clinical Practice: Gain a deeper understanding of the day-to-day realities and challenges in various medical specialties.</li>
        <li>APMC Credit Hours: Earn valuable APMC credit hours for your participation, ensuring that your learning is recognized and contributes to your professional development.</li>
      </ul>
 
      <h3 className="text-center text-lg font-bold mb-4">WORKSHOPS</h3>
      {workshopsData.map((workshop, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow"
            onClick={() => toggleWorkshop(index)}
          >
            <span className="text-xl">i</span>
            <span className="ml-4">{workshop.title}</span>
            <span>{isWorkshopExpanded[index] ? '-' : '+'}</span>
          </button>
          {isWorkshopExpanded[index] && (
            <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
              <p>{workshop.content}</p>
            </div>
          )}
        </div>
      ))}
      <Calendar/>
    </div>
  );
  
};

export default Workshop;
