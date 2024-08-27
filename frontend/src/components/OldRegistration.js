import React, { useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalContext';
// import calendar from '../../public/image/calendar.png'; 
const Scientific_activities = [
  {
    day: 1,
    session: "Morning",
    name: "Gynaecology 1",
    price: "₹899/-",
    description: "Another slot available",
    image: "/image/scientific/Gynaecology.png", // Assuming the image file name for Gynaecology 1
  },
  {
    day: 1,
    session: "Morning",
    name: "BPCS 1",
    price: "₹799/-",
    description: "Another slot available",
    image: "/image/scientific/BPCS.png", // Assuming the image file name for BPCS 1
  },
  {
    day: 1,
    session: "Morning",
    name: "ENT",
    price: "₹499/-",
    description: "Single slot available",
    image: "/image/scientific/ENT.png", // Assuming the image file name for ENT
  },
  {
    day: 1,
    session: "Morning",
    name: "ECG",
    price: "₹199/-",
    description: "Single slot available",
    image: "/image/scientific/ECG.png", // Assuming the image file name for ECG
  },
  {
    day: 1,
    session: "Morning",
    name: "Disaster Management",
    price: "₹499/-",
    description: "Single slot available",
    image: "/image/scientific/Disaster_Management.png", // Assuming the image file name for Disaster Management
  },
  {
    day: 1,
    session: "Afternoon",
    name: "BSS 1",
    price: "₹899/-",
    description: "Another slot available",
    image: "/image/scientific/BSS_1.png", // Assuming the image file name for BSS 1
  },
  {
    day: 1,
    session: "Afternoon",
    name: "Opthalmology 1",
    price: "₹1199/-",
    description: "Two more slots available on day 2 and day 3, afternoon",
    image: "/image/scientific/Opthalmology_1.png", // Assuming the image file name for Opthalmology 1
  },
  {
    day: 1,
    session: "Afternoon",
    name: "ICU 1",
    price: "₹999/-",
    description: "Two more slots available on day 2 and day 3, morning",
    image: "/image/scientific/ICU_1.png", // Assuming the image file name for ICU 1
  },
  {
    day: 1,
    session: "Afternoon",
    name: "BPCS 2",
    price: "₹799/-",
    description: "Another slot available",
    image: "/image/scientific/BPCS_2.png", // Assuming the image file name for BPCS 2
  },
  {
    day: 1,
    session: "Afternoon",
    name: "Poster Presentation",
    price: "₹99/-",
    description: "Single slot available",
    image: "/image/scientific/Poster_Presentation.png", // Assuming the image file name for Poster Presentation
  },
  {
    day: 1,
    session: "Afternoon",
    name: "Med Charades",
    price: "₹99/-",
    description: "Single slot available",
    image: "/image/scientific/Med_Charades.png", // Assuming the image file name for Med Charades
  },
  {
    day: 2,
    session: "Morning",
    name: "Orthopedics 1",
    price: "₹899/-",
    description: "Another slot available on day 3, afternoon",
    image: "/image/scientific/Orthopedics_1.png", // Assuming the image file name for Orthopedics 1
  },
  {
    day: 2,
    session: "Morning",
    name: "Pulmonology",
    price: "₹549/-",
    description: "Single slot available",
    image: "/image/scientific/Pulmonology.png", // Assuming the image file name for Pulmonology
  },
  {
    day: 2,
    session: "Morning",
    name: "ICU 2",
    price: "₹999/-",
    description: "Two more slots available on day 1 afternoon and day 3 morning",
    image: "/image/scientific/ICU_2.png", // Assuming the image file name for ICU 2
  },
  {
    day: 2,
    session: "Morning",
    name: "BSS 2",
    price: "₹899/-",
    description: "Another slot available on day 1, afternoon",
    image: "/image/scientific/BSS_2.png", // Assuming the image file name for BSS 2
  },
  {
    day: 2,
    session: "Morning",
    name: "Paper Presentation",
    price: "₹99/-",
    description: "Single slot available",
    image: "/image/scientific/Paper_Presentation.png", // Assuming the image file name for Paper Presentation
  },
  {
    day: 2,
    session: "Morning",
    name: "Debate",
    price: "₹99/-",
    description: "Single slot available",
    image: "/image/scientific/Paper_Presentation.png", // Assuming the image file name for Paper Presentation
  },
  {
    day: 2,
    session: "Afternoon",
    name: "WET LAB (Part 1)",
    price: "₹999/-",
    description: "This is a single slot workshop covered under two parts on day 2 afternoon and day 3 morning sessions.",
    image: "/image/scientific/WET_LAB_Part_1.png", // Assuming the image file name for WET LAB (Part 1)
  },
  {
    day: 2,
    session: "Afternoon",
    name: "Forensic Medicine",
    price: "₹399/-",
    description: "Single slot available",
    image: "/image/scientific/Forensic_Medicine.png", // Assuming the image file name for Forensic Medicine
  },
  {
    day: 2,
    session: "Afternoon",
    name: "Opthalmology 2",
    price: "₹1199/-",
    description: "Two more slots available on day 1 and day 3 afternoon sessions.",
    image: "/image/scientific/Opthalmology_2.png", // Assuming the image file name for Opthalmology 2
  },
  {
    day: 2,
    session: "Afternoon",
    name: "Neonatology",
    price: "₹499/-",
    description: "Single slot available",
    image: "/image/scientific/Neonatology.png", // Assuming the image file name for Neonatology
  },
  {
    day: 2,
    session: "Afternoon",
    name: "Medi Quiz",
    price: "₹149/-",
    description: "Single slot available",
    image: "/image/scientific/Medi_Quiz.png", // Assuming the image file name for Medi Quiz
  },
  {
    day: 2,
    session: "Afternoon",
    name: "Pannel Discussion",
    price: "₹149/-",
    description: "Single slot available",
    image: "/image/scientific/Medi_Quiz.png", // Assuming the image file name for Medi Quiz
  },
  {
    day: 3,
    session: "Morning",
    name: "WET LAB (Part 2)",
    price: "₹999/-",
    description: "This is a single slot workshop covered under two parts on day 2 afternoon and day 3 morning sessions.",
    image: "/image/scientific/WET_LAB_Part_2.png", // Assuming the image file name for WET LAB (Part 2)
  },
  {
    day: 3,
    session: "Morning",
    name: "Oncology",
    price: "₹599/-",
    description: "Single slot available",
    image: "/image/scientific/Oncology.png", // Assuming the image file name for Oncology
  },
  {
    day: 3,
    session: "Morning",
    name: "ICU 3",
    price: "₹999/-",
    description: "Two more slots available on day 1 afternoon and day 3 morning",
    image: "/image/scientific/ICU_3.png", // Assuming the image file name for ICU 3
  },
  {
    day: 3,
    session: "Morning",
    name: "Gynaecology 2",
    price: "₹899/-",
    description: "Another slot available",
    image: "/image/scientific/Gynaecology_2.png", // Assuming the image file name for Gynecology 2
  },
  {
    day: 3,
    session: "Morning",
    name: "Case Presentation",
    price: "₹99/-",
    description: "Single slot available",
    image: "/image/scientific/Case_Presentation.png", // Assuming the image file name for Case Presentation
  },
  {
    day: 3,
    session: "Afternoon",
    name: "Psychiatry",
    price: "₹299/-",
    description: "Single slot available",
    image: "/image/scientific/Psychiatry.png", // Assuming the image file name for Psychiatry
  },
  {
    day: 3,
    session: "Afternoon",
    name: "Orthopaedics 2",
    price: "₹1199/-",
    description: "Two more slots available on day 1 and day 3 afternoon",
    image: "/image/scientific/Orthopaedics_2.png", // Assuming the image file name for Opthalmology 3
  },
  {
    day: 3,
    session: "Afternoon",
    name: "Opthalmology 3",
    price: "₹1199/-",
    description: "Two more slots available on day 1 and day 3 afternoon",
    image: "/image/scientific/Opthalmology_3.png", // Assuming the image file name for Opthalmology 3
  },
  {
    day: 3,
    session: "Afternoon",
    name: "GI Laporoscopy",
    price: "₹499/-",
    description: "Single slot available",
    image: "/image/scientific/GI_Laporoscopy.png", // Assuming the image file name for GI Laporoscopy
  },
  {
    day: 3,
    session: "Afternoon",
    name: "Medi Hunt",
    price: "₹99/-",
    description: "Single slot available",
    image: "/image/scientific/Medi_Hunt.png", // Assuming the image file name for Medi Hunt
  },
];
const activities = [
  //culturals
  //sit back and relax
  {
    day: 1,
    session: "Morning",
    id: 1,
    name: "Flash Mob",
    price: "Free",
    description: "Covered under basic registration fees",
    image: "/image/culturals/Flash_Mob.png",
  },
  {
    day: 1,
    session: "Morning",
    id: 2,
    name: "Surprise Night",
    price: "Free",
    description: "Covered under basic registration fees",
    image: "/image/culturals/Surprise_Night.png",
  },
  {
    day: 1,
    session: "Morning",
    id: 3,
    name: "Celebrity Night",
    price: "Free",
    description: "Covered under basic registration fees",
    image: "/image//culturals/Celebrity_Night.png",
  },
  {
    day: 2,
    session: "Morning",
    id: 4,
    name: "DJ Night",
    price: "Free",
    description: "Covered under basic registration fees",
    image: "/image/culturals/DJ_Night.png",
  },
  {
    day: 2,
    session: "Morning",
    id: 5,
    name: "Med Fun",
    price: "Free",
    description: "Covered under basic registration fees",
    image: "/image/culturals/Med_Fun.png",
  },
  {
    day: 2,
    session: "Morning",
    id: 6,
    name: "Fashion Parade",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image/culturals/Fashion_Parade.png",
  },
  //compititions in culturals
  {
    day: 2,
    session: "Morning",
    id: 7,
    name: "Dance Competition",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image/culturals/Dance_Competition.png",
  },
  {
    day: 2,
    session: "Morning",
    id: 8,
    name: "Singing Competition",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image//culturals/Singing_Competition.png",
  },
  {
    day: 2,
    session: "Morning",
    id: 9,
    name: "Photo Contest",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image//culturals/Photo_Contest.png",
  },
  {
    day: 2,
    session: "Morning",
    id: 10,
    name: "Shortfilm Competition",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image//culturals/Shortfilm_Competition.png",
  },
  {
    day: 3,
    session: "Morning",
    id: 11,
    name: "Playing an Instrument",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image/culturals/Playing_an_Instrument.png",
  },
  {
    day: 3,
    session: "Morning",
    id: 12,
    name: "Cooking without Fire",
    price: "₹99/-",
    description: "Select the following to register for this particular competition",
    image: "/image/culturals/Cooking_without_Fire.png",
  },
  {
    day: 3,
    session: "Morning",
    id: 13,
    name: "Beat Box",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image/culturals/Beat_Box.png",
  },
  {
    day: 3,
    session: "Morning",
    id: 14,
    name: "Arts Competition 1",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image/culturals/Arts_Competition.png",
  },
  {
    day: 3,
    session: "Morning",
    id: 15,
    name: "Arts Competition 2",
    price: "Free",
    description: "Select the following to register for this particular competition",
    image: "/image/culturals/Arts_Competition.png",
  },

];
const RegisterNowSection = () => {

  const { profession, setProfession } = useContext(GlobalContext);

  console.log("PROFESSION FROM REGISTRATION PAGE: ",profession)
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0); // Initial total amount as shown in the screenshot
  const [activeDay, setActiveDay] = useState(1); // Tracks the active day (1, 2, 3)
  const [activeSession, setActiveSession] = useState('Morning'); // Tracks the active session (Morning, Afternoon)
  const [isWorkshopExpanded, setIsWorkshopExpanded] = useState([false, false, false, false]); // For each workshop
  const [isScientificExpanded, setIsScientificExpanded] = useState([false, false]); // For each scientific activity
  const activities = [
    {
      day: 1,
      session: 'Morning',
      id: 1,
      name: 'Medi-Quiz',
      price: 149,
      description: '2 more slots are available in 2nd and 3rd day afternoon sessions',
      image: 'path-to-medi-quiz-image',
    },
    {
      day: 1,
      session: 'Morning',
      id: 2,
      name: 'Medi-Hunt',
      price: 99,
      description: 'Single slot is available',
      image: 'path-to-medi-hunt-image',
    },
    {
      day: 1,
      session: 'Morning',
      id: 3,
      name: 'Med Charades',
      price: 99,
      description: '1 more slot is available in 3rd day morning session',
      image: 'path-to-med-charades-image',
    },
    {
      day: 2,
      session: 'Morning',
      id: 4,
      name: 'Medi-Quiz',
      price: 149,
      description: '2 more slots are available in 2nd and 3rd day afternoon sessions',
      image: 'path-to-medi-quiz-image',
    },
    {
      day: 2,
      session: 'Morning',
      id: 5,
      name: 'Medi-Hunt',
      price: 99,
      description: 'Single slot is available',
      image: 'path-to-medi-hunt-image',
    },
    {
      day: 2,
      session: 'Morning',
      id: 6,
      name: 'Med Charades',
      price: 99,
      description: '1 more slot is available in 3rd day morning session',
      image: 'path-to-med-charades-image',
    },
    // Additional activities can be added here
    {
      day: 3,
      session: 'Morning',
      id: 4,
      name: 'Medi-Quiz',
      price: 149,
      description: '2 more slots are available in 2nd and 3rd day afternoon sessions',
      image: 'path-to-medi-quiz-image',
    },
    {
      day: 3,
      session: 'Morning',
      id: 5,
      name: 'Medi-Hunt',
      price: 99,
      description: 'Single slot is available',
      image: 'path-to-medi-hunt-image',
    },
    {
      day: 3,
      session: 'Morning',
      id: 6,
      name: 'Med Charades',
      price: 99,
      description: '1 more slot is available in 3rd day morning session',
      image: 'path-to-med-charades-image',
    },
  ];

  const toggleActivitySelection = (activityId) => {
    let updatedSelectedActivities;
    let updatedTotalAmount = totalAmount;

    if (selectedActivities.includes(activityId)) {
      updatedSelectedActivities = selectedActivities.filter(id => id !== activityId);
      updatedTotalAmount -= activities.find(activity => activity.id === activityId).price;
    } else {
      updatedSelectedActivities = [...selectedActivities, activityId];
      updatedTotalAmount += activities.find(activity => activity.id === activityId).price;
    }

    setSelectedActivities(updatedSelectedActivities);
    setTotalAmount(updatedTotalAmount);
  };

  const renderActivities = () => {
    return activities
      .filter(activity => activity.day === activeDay && activity.session === activeSession)
      .map(activity => (
        <div key={activity.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={activity.image}
              alt={activity.name}
              className="w-16 h-16 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{activity.name}</h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold mr-4">₹{activity.price}</span>
            <input
              type="checkbox"
              checked={selectedActivities.includes(activity.id)}
              onChange={() => toggleActivitySelection(activity.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>
        </div>
      ));
  };
  const toggleWorkshop = (index) => {
    const newWorkshopState = [...isWorkshopExpanded];
    newWorkshopState[index] = !newWorkshopState[index];
    setIsWorkshopExpanded(newWorkshopState);
  };

  const toggleScientific = (index) => {
    const newScientificState = [...isScientificExpanded];
    newScientificState[index] = !newScientificState[index];
    setIsScientificExpanded(newScientificState);
  };
 // Carousel data
 const slides = [
  {
    title: "Medi-Hunt",
    price: "₹100/-",
    activityType: "Scientific Activity",
    image: "path-to-your-image", // Replace with actual image path
  },
  // Add more slides here if needed
];

  return (
    <>
    {profession.value === 'Student'? (

    <div className="bg-gray-100 text-blue-900 p-8">
      <div className="container mx-auto">
        {/* <h2 className="text-xl font-bold mb-4">REGISTER NOW</h2>
        
        <h3 className="text-lg font-semibold mb-2">Sub heading-1</h3>
        <p className="mb-4">
          Brace yourselves with energy & enthusiasm to experience the Exaltation of SMARC
        </p>
        
        <h4 className="text-lg font-semibold mb-2">Content</h4>
        <p className="mb-6">
          “Join us at our Annual Conference, designed exclusively for undergraduate medical students eager to enhance their clinical skills. This year's event features a series of interactive workshops where you'll receive hands-on training from experienced faculty. From mastering critical procedures to exploring advanced medical techniques, this conference is your opportunity to build confidence and competence in a supportive learning environment."
        </p>
        
        <h3 className="text-lg font-semibold mb-2">Sub heading-2</h3>
        <p className="mb-2">What medicos will be getting?</p>
        <ul className="list-decimal ml-6">
          <li>Delegate bag</li>
          <li>Magazine</li>
          <li>Note pad</li>
          <li>Pen</li>
          <li>Certificate</li>
        </ul>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Guidance:</h3>
          <p className="mb-4">
            If any help required please do contact these numbers:
            <ul className="list-disc ml-6">
              <li>Chandan: 7995529942</li>
              <li>Sai Sreya: 8803458888</li>
            </ul>
          </p>

          <h3 className="text-lg font-semibold mb-2">Food:</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Covered under basic registration on all three event days</li>
            <li>Savoring the flavors of Konaseema: A journey through its cuisine</li>
            <li>Both Veg and Non-Veg options available</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Accommodation:</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Relax, Recharge, and Rejuvenate</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Certificates of Participation:</h3>
          <p className="mb-4">
            Recognition given for participating in the SMARC
          </p>

          <h3 className="text-lg font-semibold mb-2">APMC credit hours:</h3>
          <p className="mb-4">
            Learning = Earning (credit hours)
          </p>
        </div> */}

        <div className="mt-8">
          <div className=" flex flex-col content-center gap-3 items-center mb-4">
            <div className="flex justify-center">
              <button
                className={`px-4 py-2 ${activeDay === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-l`}
                onClick={() => setActiveDay(1)}
              >
                Day 1
              </button>
              <button
                className={`px-4 py-2 ${activeDay === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveDay(2)}
              >
                Day 2
              </button>
              <button
                className={`px-4 py-2 ${activeDay === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-r`}
                onClick={() => setActiveDay(3)}
              >
                Day 3
              </button>
            </div>
            <div className="flex">
              <button
                className={`px-4 py-2 ${activeSession === 'Morning' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-l`}
                onClick={() => setActiveSession('Morning')}
              >
                Morning Session
              </button>
              <button
                className={`px-4 py-2 ${activeSession === 'Afternoon' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-r`}
                onClick={() => setActiveSession('Afternoon')}
              >
                Afternoon Session
              </button>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">{`Day ${activeDay} - ${activeSession} Session`}</h2>

          {renderActivities()}

          <div className="border-t-2 border-gray-300 pt-4 mt-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">Total Amount:</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">₹{totalAmount}/-</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg">
              View Cart ({selectedActivities.length})
            </button>
          </div>
                {/* Added Proceed to Pay button */}
          <div className="mt-8 text-center">
            <button className="bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg shadow-md">
              PROCEED TO PAY
            </button>
          </div>
       {/* New Section with Dropdowns */}
       <div className="mt-16 text-left">
            <h2 className="text-2xl font-bold mb-4">| Basic Registration Pass</h2>
            <p className="flex items-center text-lg mb-2">
              <span className="text-green-600 mr-2">✔</span>
              For UG Medical Students @ 1,199/-
            </p>
            <p className="flex items-center text-lg mb-4">
              <span className="text-green-600 mr-2">✔</span>
              For Doctors @ 2,499/-
            </p>
            <p className="text-lg mb-4">What all are included in basic registration pass?</p>
            <p className="flex items-center text-2xl font-bold mb-8">
              <span className="text-green-600 mr-2">✔</span>
              How to register?
            </p>

            <h3 className="text-lg font-bold mb-4">WORKSHOPS</h3>
            {[0, 1, 2, 3].map((_, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow"
                  onClick={() => toggleWorkshop(index)}
                >
                  <span className="text-xl">i</span>
                  <span className="ml-4">Workshop {index + 1}</span>
                  <span>{isWorkshopExpanded[index] ? '-' : '+'}</span>
                </button>
                {isWorkshopExpanded[index] && (
                  <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
                    <p>Details about Workshop {index + 1} go here. Replace this with real content.</p>
                  </div>
                )}
              </div>
            ))}

            <h3 className="text-lg font-bold mb-4">SCIENTIFIC ACTIVITIES</h3>
            {[0, 1].map((_, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow"
                  onClick={() => toggleScientific(index)}
                >
                  <span className="text-xl">i</span>
                  <span className="ml-4">Scientific Activity {index + 1}</span>
                  <span>{isScientificExpanded[index] ? '-' : '+'}</span>
                </button>
                {isScientificExpanded[index] && (
                  <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
                    <p>Details about Scientific Activity {index + 1} go here. Replace this with real content.</p>
                  </div>
                )}
              </div>
            ))}
        </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Carousel Section</h2>
          <Carousel>
            {slides.map((slide, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt={slide.title}
                />
                <Carousel.Caption>
                  <h3>{slide.title}</h3>
                  <p>{slide.activityType}</p>
                  <span className="font-semibold">{slide.price}</span>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
          {/* New Calendar Section */}
          <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900">SMARC 2024</h2>
          <p className="text-lg text-yellow-600 font-semibold mb-2">
            September 19, 20, 21 | KIMS Amalapuram
          </p>

          <div className="inline-block">
            <img
              src="/image/calendar.png" // Replace with the actual path of the calendar image
              alt="SMARC 2024 Calendar"
              className="mx-auto mt-4"
            />
          </div>
        </div>
      </div>
    </div>
    ):(<h1 className='mt-20'>You are a doctor</h1>)}
    </>
  );
};

export default RegisterNowSection;