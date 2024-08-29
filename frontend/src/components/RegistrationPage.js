import React, { useState, useContext, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalContext';
import Select from 'react-select';
import { professionOptions } from '../data/colleges';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { BookOpen, Stethoscope } from 'lucide-react';
// import calendar from '../../public/image/calendar.png';
const RegisterNowSection = () => {
  const { profession, setProfession } = useContext(GlobalContext);

  console.log('PROFESSION FROM REGISTRATION PAGE: ', profession);

  const [selectedActivities, setSelectedActivities] = useState([]);
  // const [totalAmount, setTotalAmount] = useState(0);
  const { totalAmount, setTotalAmount } = useContext(GlobalContext);
  const { cart, setCart } = useContext(GlobalContext);
  const [activeDay, setActiveDay] = useState(1); // Tracks the active day (1, 2, 3)
  const [activeSession, setActiveSession] = useState('Morning'); // Tracks the active session (Morning, Afternoon)
  const [isWorkshopExpanded, setIsWorkshopExpanded] = useState([
    false,
    false,
    false,
    false,
  ]); // For each workshop
  const [isScientificExpanded, setIsScientificExpanded] = useState([
    false,
    false,
  ]); // For each scientific activity
  const [step, setStep] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null); // To store the selected activity
  const [isDialogOpen, setIsDialogOpen] = useState(false); // To manage the dialog visibility
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
  const Scientific_activities = [
    {
      day: 1,
      session: "Morning",
      name: "Gynaecology 1",
      price: "₹899/-",
      description: "Another slot available",
      image: "/image/scientific/Gynaecology.png",
      id: 1,
      exception: [2]
    },
    {
      day: 1,
      session: "Morning",
      name: "BPCS 1",
      price: "₹799/-",
      description: "Another slot available",
      image: "/image/scientific/BPCS.png",
      id: 2,
      content:"Basic procedural clinical skills Dive into the practical side of medicine with our workshop on procedural clinical skills, covering heart sounds, ascitic fluid removal, and lumbar puncture techniques. Ideal for anyone interested in developing a solid foundation in clinical procedures."
      
    },
    {
      day: 1,
      session: "Morning",
      name: "ENT",
      price: "₹499/-",
      description: "Single slot available",
      image: "/image/scientific/ENT.png",
      id: 3
    },
    {
      day: 1,
      session: "Morning",
      name: "ECG",
      price: "₹199/-",
      description: "Single slot available",
      image: "/image/scientific/ECG.png",
      id: 4
    },
    {
      day: 1,
      session: "Morning",
      name: "Disaster Management",
      price: "₹499/-",
      description: "Single slot available",
      image: "/image/scientific/Disaster_Management.png",
      id: 5
    },
    {
      day: 1,
      session: "Afternoon",
      name: "BSS 1",
      price: "₹899/-",
      description: "Another slot available",
      image: "/image/scientific/BSS_1.png",
      id: 6
    },
    {
      day: 1,
      session: "Afternoon",
      name: "Opthalmology 1",
      price: "₹1199/-",
      description: "Two more slots available on day 2 and day 3, afternoon",
      image: "/image/scientific/Opthalmology_1.png",
      id: 7
    },
    {
      day: 1,
      session: "Afternoon",
      name: "ICU 1",
      price: "₹999/-",
      description: "Two more slots available on day 2 and day 3, morning",
      image: "/image/scientific/ICU_1.png",
      id: 8
    },
    {
      day: 1,
      session: "Afternoon",
      name: "BPCS 2",
      price: "₹799/-",
      description: "Another slot available",
      image: "/image/scientific/BPCS_2.png",
      id: 9
    },
    {
      day: 1,
      session: "Afternoon",
      name: "Poster Presentation",
      price: "₹99/-",
      description: "Single slot available",
      image: "/image/scientific/Poster_Presentation.png",
      id: 10
    },
    {
      day: 1,
      session: "Afternoon",
      name: "Med Charades",
      price: "₹99/-",
      description: "Single slot available",
      image: "/image/scientific/Med_Charades.png",
      id: 11
    },
    {
      day: 2,
      session: "Morning",
      name: "Orthopedics 1",
      price: "₹899/-",
      description: "Another slot available on day 3, afternoon",
      image: "/image/scientific/Orthopedics_1.png",
      id: 12
    },
    {
      day: 2,
      session: "Morning",
      name: "Pulmonology",
      price: "₹549/-",
      description: "Single slot available",
      image: "/image/scientific/Pulmonology.png",
      id: 13
    },
    {
      day: 2,
      session: "Morning",
      name: "ICU 2",
      price: "₹999/-",
      description: "Two more slots available on day 1 afternoon and day 3 morning",
      image: "/image/scientific/ICU_2.png",
      id: 14
    },
    {
      day: 2,
      session: "Morning",
      name: "BSS 2",
      price: "₹899/-",
      description: "Another slot available on day 1, afternoon",
      image: "/image/scientific/BSS_2.png",
      id: 15
    },
    {
      day: 2,
      session: "Morning",
      name: "Paper Presentation",
      price: "₹99/-",
      description: "Single slot available",
      image: "/image/scientific/Paper_Presentation.png",
      id: 16
    },
    {
      day: 2,
      session: "Morning",
      name: "Debate",
      price: "₹99/-",
      description: "Single slot available",
      image: "/image/scientific/Debate.png",
      id: 17
    },
    {
      day: 2,
      session: "Afternoon",
      name: "WET LAB (Part 1)",
      price: "₹999/-",
      description: "This is a single slot workshop covered under two parts on day 2 afternoon and day 3 morning sessions.",
      image: "/image/scientific/WET_LAB_Part_1.png",
      id: 18
    },
    {
      day: 2,
      session: "Afternoon",
      name: "Forensic Medicine",
      price: "₹399/-",
      description: "Single slot available",
      image: "/image/scientific/Forensic_Medicine.png",
      id: 19
    },
    {
      day: 2,
      session: "Afternoon",
      name: "Opthalmology 2",
      price: "₹1199/-",
      description: "Two more slots available on day 1 and day 3 afternoon sessions.",
      image: "/image/scientific/Opthalmology_2.png",
      id: 20
    },
    {
      day: 2,
      session: "Afternoon",
      name: "Neonatology",
      price: "₹499/-",
      description: "Single slot available",
      image: "/image/scientific/Neonatology.png",
      id: 21
    },
    {
      day: 2,
      session: "Afternoon",
      name: "Medi Quiz",
      price: "₹149/-",
      description: "Single slot available",
      image: "/image/scientific/Medi_Quiz.png",
      id: 22
    },
    {
      day: 2,
      session: "Afternoon",
      name: "Pannel Discussion",
      price: "₹149/-",
      description: "Single slot available",
      image: "/image/scientific/Pannel_Discussion.png",
      id: 23
    },
    {
      day: 3,
      session: "Morning",
      name: "WET LAB (Part 2)",
      price: "₹999/-",
      description: "This is a single slot workshop covered under two parts on day 2 afternoon and day 3 morning sessions.",
      image: "/image/scientific/WET_LAB_Part_2.png",
      id: 24
    },
    {
      day: 3,
      session: "Morning",
      name: "Oncology",
      price: "₹599/-",
      description: "Single slot available",
      image: "/image/scientific/Oncology.png",
      id: 25
    },
    {
      day: 3,
      session: "Morning",
      name: "ICU 3",
      price: "₹999/-",
      description: "Two more slots available on day 1 afternoon and day 3 morning",
      image: "/image/scientific/ICU_3.png",
      id: 26
    },
    {
      day: 3,
      session: "Morning",
      name: "Gynaecology 2",
      price: "₹899/-",
      description: "Another slot available",
      image: "/image/scientific/Gynaecology_2.png",
      id: 27
    },
    {
      day: 3,
      session: "Morning",
      name: "Case Presentation",
      price: "₹99/-",
      description: "Single slot available",
      image: "/image/scientific/Case_Presentation.png",
      id: 28
    },
    {
      day: 3,
      session: "Afternoon",
      name: "Psychiatry",
      price: "₹299/-",
      description: "Single slot available",
      image: "/image/scientific/Psychiatry.png",
      id: 29
    },
    {
      day: 3,
      session: "Afternoon",
      name: "Orthopaedics 2",
      price: "₹1199/-",
      description: "Two more slots available on day 1 and day 3 afternoon",
      image: "/image/scientific/Orthopaedics_2.png",
      id: 30
    },
    {
      day: 3,
      session: "Afternoon",
      name: "Opthalmology 3",
      price: "₹1199/-",
      description: "Two more slots available on day 1 and day 2 afternoon sessions.",
      image: "/image/scientific/Opthalmology_3.png",
      id: 31
    },
    {
      day: 3,
      session: "Afternoon",
      name: "BSS 3",
      price: "₹899/-",
      description: "Another slot available on day 1, afternoon",
      image: "/image/scientific/BSS_3.png",
      id: 32
    },
    {
      day: 3,
      session: "Afternoon",
      name: "Gynaecology 3",
      price: "₹899/-",
      description: "Another slot available",
      image: "/image/scientific/Gynaecology_3.png",
      id: 33
    },
    {
      day: 3,
      session: "Afternoon",
      name: "Pannel Discussion",
      price: "₹149/-",
      description: "Single slot available",
      image: "/image/scientific/Pannel_Discussion.png",
      id: 34
    },
  ];
  
  const toggleActivitySelection = (activityId) => {
    let updatedSelectedActivities;
    let updatedTotalAmount = totalAmount;

    if (selectedActivities.includes(activityId)) {
      updatedSelectedActivities = selectedActivities.filter(
        (id) => id !== activityId
      );
      updatedTotalAmount -= activities.find(
        (activity) => activity.id === activityId
      ).price;
    } else {
      updatedSelectedActivities = [...selectedActivities, activityId];
      updatedTotalAmount += activities.find(
        (activity) => activity.id === activityId
      ).price;
    }

    setSelectedActivities(updatedSelectedActivities);
    setTotalAmount(updatedTotalAmount);
  };
  // const toggleActivitySelection = (activityId) => {
  //   let updatedSelectedActivities = [...selectedActivities];
  //   let updatedTotalAmount = totalAmount;

  //   // Check if an activity is already selected for this session
  //   const alreadySelectedActivity = selectedActivities.find(
  //     (selectedActivity) =>
  //       selectedActivity.day === Scientific_activities[activityId].day &&
  //       selectedActivity.session === Scientific_activities[activityId].session
  //   );

  //   if (alreadySelectedActivity) {
  //     // If an activity is already selected, deselect it
  //     updatedSelectedActivities = updatedSelectedActivities.filter(
  //       (activity) => activity.id !== alreadySelectedActivity.id
  //     );
  //     updatedTotalAmount -= alreadySelectedActivity.price;
  //   } else {
  //     // If no activity is selected for this session, select the new activity
  //     updatedSelectedActivities.push(activities[activityId]);
  //     updatedTotalAmount += activities[activityId].price;
  //   }

  //   setSelectedActivities(updatedSelectedActivities);
  //   setTotalAmount(updatedTotalAmount);
  // };
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedActivity(null);
  };

  //Scentific activites
  // const renderActivities = () => {
  //   return Scientific_activities.filter(
  //     (activity) =>
  //       activity.day === activeDay && activity.session === activeSession
  //   ).map((activity) => {
  //     console.log('activity: ', activity);
  //     return (
  //       <div
  //         key={activity.id}
  //         className='flex justify-between items-center mb-4 bg-white p-2 rounded-xl'
  //       >
  //         <div className='flex items-center'>
  //           <img
  //             src={activity.image}
  //             alt={activity.name}
  //             className='w-16 h-16 mr-4'
  //           />
  //           <div>
  //             <h3 className='text-lg font-semibold'>{activity.name}</h3>
  //             <p className='text-sm text-gray-600'>{activity.description}</p>
  //           </div>
  //         </div>
  //         <div className='flex items-center'>
  //           <span className='text-lg font-bold mr-4'>₹{activity.price}</span>
  //           <input
  //             type='checkbox'
  //             checked={selectedActivities.includes(activity.id)}
  //             onChange={() => toggleActivitySelection(activity.id)}
  //             className='form-checkbox h-5 w-5 text-blue-600'
  //           />
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  const renderActivities = () => {
    return Scientific_activities.filter(
      (activity) =>
        activity.day === activeDay && activity.session === activeSession
    ).map((activity) => {
      console.log('activity: ', activity);
      return (
        <div
          key={activity.id}
          className='flex justify-between items-center mb-4 bg-white p-2 rounded-xl cursor-pointer'
          onClick={() => handleActivityClick(activity)} // Add onClick to open dialog
        >
          <div className='flex items-center'>
            <img
              src={activity.image}
              alt={activity.name}
              className='w-16 h-16 mr-4'
            />
            <div>
              <h3 className='text-lg font-semibold'>{activity.name}</h3>
              <p className='text-sm text-gray-600'>{activity.description}</p>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='text-lg font-bold mr-4'>₹{activity.price}</span>
            <input
              type='checkbox'
              checked={selectedActivities.includes(activity.id)}
              onChange={(e) => {
                e.stopPropagation(); // Prevent click from triggering the dialog
                toggleActivitySelection(activity.id);
              }}
              className='form-checkbox h-5 w-5 text-blue-600'
            />
          </div>
          
        </div>
        
      );
    });
  };
  //cultural Activities
  const renderAllActivities = () => {
    return activities.map((activity) => (
      <div
        key={activity.id}
        className='flex justify-between items-center mb-4 bg-white p-2 rounded-xl'
      >
        <div className='flex items-center'>
          <img
            src={activity.image}
            alt={activity.name}
            className='w-16 h-16 mr-4'
          />
          <div>
            <h3 className='text-lg font-semibold'>{activity.name}</h3>
            <p className='text-sm text-gray-600'>{activity.description}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <span className='text-lg font-bold mr-4'>₹{activity.price}</span>
          <input
            type='checkbox'
            checked={selectedActivities.includes(activity.id)}
            onChange={() => toggleActivitySelection(activity.id)}
            className='form-checkbox h-5 w-5 text-blue-600'
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
      title: 'Medi-Hunt',
      price: '₹100/-',
      activityType: 'Scientific Activity',
      image: 'path-to-your-image', // Replace with actual image path
    },
    // Add more slides here if needed
  ];
  const navigate = useNavigate();
  return (
    <>
      {profession === 'Student' ? (
        <>
          {step ? (
            <>
              {/* <Form className="mt-10"></Form> */}
              <div className='bg-gray-100 text-blue-900 p-2 mt-10'>
                {/* <h1 className="text-center mt-5">STUDENT</h1> */}
                <div className='container mx-auto'>
                  <div className='mt-8'>
                    <div className=' flex flex-col content-center gap-3 items-center mb-4 mt-12'>
                      <h1 className='text-center text-blue-900'>Cultural</h1>
                      {/* <div className="flex justify-center">
                      <button
                        className={`px-4 py-2 ${
                          activeDay === 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        } rounded-l`}
                        onClick={() => setActiveDay(1)}
                      >
                        Day 1
                      </button>
                      <button
                        className={`px-4 py-2 ${
                          activeDay === 2
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => setActiveDay(2)}
                      >
                        Day 2
                      </button>
                      <button
                        className={`px-4 py-2 ${
                          activeDay === 3
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        } rounded-r`}
                        onClick={() => setActiveDay(3)}
                      >
                        Day 3
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        className={`px-4 py-2 ${
                          activeSession === "Morning"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        } rounded-l`}
                        onClick={() => setActiveSession("Morning")}
                      >
                        Morning Session
                      </button>
                      <button
                        className={`px-4 py-2 ${
                          activeSession === "Afternoon"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        } rounded-r`}
                        onClick={() => setActiveSession("Afternoon")}
                      >
                        Afternoon Session
                      </button>
                    </div> */}
                    </div>

                    {/* <h2 className="text-xl font-bo?ld mb-4">{`Day ${activeDay} - ${activeSession} Session`}</h2> */}

                    {renderAllActivities()}

                    <div className='border-t-2 border-gray-300 pt-4 mt-4 flex justify-between items-center'>
                      <div>
                        <p className='text-lg font-bold'>Total Amount:</p>
                      </div>
                      <div>
                        <p className='text-2xl font-bold text-green-600'>
                          ₹{totalAmount}/-
                        </p>
                      </div>
                      {/* <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg">
                      View Cart ({selectedActivities.length})
                    </button> */}
                    </div>
                    {/* Added Proceed to Pay button */}
                    <div className='mt-8 text-center'>
                      <button
                        className='bg-yellow-500 text-blue-900 font-bold px-8 py-2 rounded-lg shadow-md'
                        onClick={() => setStep(false)}
                      >
                        NEXT
                      </button>
                    </div>
                    {/* New Section with Dropdowns */}
                    <div className='mt-16 text-left'>
                      <h2 className='text-2xl font-bold mb-4'>
                        | Basic Registration Pass
                      </h2>
                      <p className='flex items-center text-lg mb-2'>
                        <span className='text-green-600 mr-2'>✔</span>
                        For UG Medical Students @ 1,199/-
                      </p>
                      <p className='flex items-center text-lg mb-4'>
                        <span className='text-green-600 mr-2'>✔</span>
                        For Doctors @ 2,499/-
                      </p>
                      <p className='text-lg mb-4'>
                        What all are included in basic registration pass?
                      </p>
                      <p className='flex items-center text-2xl font-bold mb-8'>
                        <span className='text-green-600 mr-2'>✔</span>
                        How to register?
                      </p>

                      <h3 className='text-lg font-bold mb-4'>WORKSHOPS</h3>
                      {[0, 1, 2, 3].map((_, index) => (
                        <div key={index} className='mb-4'>
                          <button
                            className='flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow'
                            onClick={() => toggleWorkshop(index)}
                          >
                            <span className='text-xl'>i</span>
                            <span className='ml-4'>Workshop {index + 1}</span>
                            <span>{isWorkshopExpanded[index] ? '-' : '+'}</span>
                          </button>
                          {isWorkshopExpanded[index] && (
                            <div className='bg-white px-4 py-2 border border-gray-200 rounded mt-2'>
                              <p>
                                Details about Workshop {index + 1} go here.
                                Replace this with real content.
                              </p>
                            </div>
                          )}
                        </div>
                      ))}

                      <h3 className='text-lg font-bold mb-4'>
                        SCIENTIFIC ACTIVITIES
                      </h3>
                      {[0, 1].map((_, index) => (
                        <div key={index} className='mb-4'>
                          <button
                            className='flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow'
                            onClick={() => toggleScientific(index)}
                          >
                            <span className='text-xl'>i</span>
                            <span className='ml-4'>
                              Scientific Activity {index + 1}
                            </span>
                            <span>
                              {isScientificExpanded[index] ? '-' : '+'}
                            </span>
                          </button>
                          {isScientificExpanded[index] && (
                            <div className='bg-white px-4 py-2 border border-gray-200 rounded mt-2'>
                              <p>
                                Details about Scientific Activity {index + 1} go
                                here. Replace this with real content.
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='mt-8'>
                    <h2 className='text-xl font-bold mb-4'>Carousel Section</h2>
                    <Carousel>
                      {slides.map((slide, index) => (
                        <Carousel.Item key={index}>
                          <img
                            className='d-block w-100'
                            src={slide.image}
                            alt={slide.title}
                          />
                          <Carousel.Caption>
                            <h3>{slide.title}</h3>
                            <p>{slide.activityType}</p>
                            <span className='font-semibold'>{slide.price}</span>
                          </Carousel.Caption>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                  {/* New Calendar Section */}
                  <div className='mt-16 text-center'>
                    <h2 className='text-3xl font-bold text-blue-900'>
                      SMARC 2024
                    </h2>
                    <p className='text-lg text-yellow-600 font-semibold mb-2'>
                      September 19, 20, 21 | KIMS Amalapuram
                    </p>

                    <div className='inline-block'>
                      <img
                        src='/image/calendar.png' // Replace with the actual path of the calendar image
                        alt='SMARC 2024 Calendar'
                        className='mx-auto mt-4'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='bg-gray-100 text-blue-900 p-8 mt-10'>
              <div className='container mx-auto'>
                <div className='mt-8'>
                  <div className=' flex flex-col content-center gap-3 items-center mb-4'>
                    <h1 className='text-center text-blue-900'>Scientific</h1>
                    <div className='flex justify-center'>
                      <button
                        className={`px-4 py-2 ${
                          activeDay === 1
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200'
                        } rounded-l`}
                        onClick={() => setActiveDay(1)}
                      >
                        Day 1
                      </button>
                      <button
                        className={`px-4 py-2 ${
                          activeDay === 2
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200'
                        }`}
                        onClick={() => setActiveDay(2)}
                      >
                        Day 2
                      </button>
                      <button
                        className={`px-4 py-2 ${
                          activeDay === 3
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200'
                        } rounded-r`}
                        onClick={() => setActiveDay(3)}
                      >
                        Day 3
                      </button>
                    </div>
                    <div className='flex'>
                      <button
                        className={`px-4 py-2 ${
                          activeSession === 'Morning'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200'
                        } rounded-l`}
                        onClick={() => setActiveSession('Morning')}
                      >
                        Morning Session
                      </button>
                      <button
                        className={`px-4 py-2 ${
                          activeSession === 'Afternoon'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200'
                        } rounded-r`}
                        onClick={() => setActiveSession('Afternoon')}
                      >
                        Afternoon Session
                      </button>
                    </div>
                  </div>

                  <h2 className='text-xl font-bold mb-4'>{`Day ${activeDay} - ${activeSession} Session`}</h2>

                  {renderActivities()}
                   {/* Dialog Box */}
      {isDialogOpen && selectedActivity && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 m-3'>
          <div className='bg-white p-4 rounded-xl max-w-md w-full'>
            <h3 className='text-2xl font-semibold mb-4'>{selectedActivity.name}</h3>
            <img 
              src={selectedActivity.image}
              alt={selectedActivity.name}
              className=' h-40 object-cover mb-4'
            />
            <p className='text-gray-700 mb-4'>{selectedActivity.description}</p>
            <p className='text-gray-600 mb-4'>{selectedActivity.content}</p> {/* Add the specific content for the activity */}
            <span className='text-lg font-bold'>₹{selectedActivity.price}</span>
            <div className='mt-4 flex justify-end'>
              <button
                onClick={() => setIsDialogOpen(false)}
                className='bg-blue-600 text-white px-4 py-2 rounded-lg'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

                  <div className='border-t-2 border-gray-300 pt-4 mt-4 flex justify-between items-center'>
                    <div>
                      <p className='text-lg font-bold'>Total Amount:</p>
                    </div>
                    <div>
                      <p className='text-2xl font-bold text-green-600'>
                        ₹{totalAmount}/-
                      </p>
                    </div>
                    {/* <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg">
                      View Cart ({selectedActivities.length})
                    </button> */}
                  </div>
                  {/* Added Proceed to Pay button */}
                  <div className='mt-8 text-center'>
                    <button
                      className='bg-yellow-500 text-blue-900 font-bold px-8 py-2 rounded-lg shadow-md'
                      onClick={() => navigate('/payment')}
                    >
                      NEXT
                    </button>
                  </div>
                  {/* New Section with Dropdowns */}
                  <div className='mt-16 text-left'>
                    <h2 className='text-2xl font-bold mb-4'>
                      | Basic Registration Pass
                    </h2>
                    <p className='flex items-center text-lg mb-2'>
                      <span className='text-green-600 mr-2'>✔</span>
                      For UG Medical Students @ 1,199/-
                    </p>
                    <p className='flex items-center text-lg mb-4'>
                      <span className='text-green-600 mr-2'>✔</span>
                      For Doctors @ 2,499/-
                    </p>
                    <p className='text-lg mb-4'>
                      What all are included in basic registration pass?
                    </p>
                    <p className='flex items-center text-2xl font-bold mb-8'>
                      <span className='text-green-600 mr-2'>✔</span>
                      How to register?
                    </p>

                    <h3 className='text-lg font-bold mb-4'>WORKSHOPS</h3>
                    {[0, 1, 2, 3].map((_, index) => (
                      <div key={index} className='mb-4'>
                        <button
                          className='flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow'
                          onClick={() => toggleWorkshop(index)}
                        >
                          <span className='text-xl'>i</span>
                          <span className='ml-4'>Workshop {index + 1}</span>
                          <span>{isWorkshopExpanded[index] ? '-' : '+'}</span>
                        </button>
                        {isWorkshopExpanded[index] && (
                          <div className='bg-white px-4 py-2 border border-gray-200 rounded mt-2'>
                            <p>
                              Details about Workshop {index + 1} go here.
                              Replace this with real content.
                            </p>
                          </div>
                        )}
                      </div>
                    ))}

                    <h3 className='text-lg font-bold mb-4'>
                      SCIENTIFIC ACTIVITIES
                    </h3>
                    {[0, 1].map((_, index) => (
                      <div key={index} className='mb-4'>
                        <button
                          className='flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow'
                          onClick={() => toggleScientific(index)}
                        >
                          <span className='text-xl'>i</span>
                          <span className='ml-4'>
                            Scientific Activity {index + 1}
                          </span>
                          <span>{isScientificExpanded[index] ? '-' : '+'}</span>
                        </button>
                        {isScientificExpanded[index] && (
                          <div className='bg-white px-4 py-2 border border-gray-200 rounded mt-2'>
                            <p>
                              Details about Scientific Activity {index + 1} go
                              here. Replace this with real content.
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className='mt-8'>
                  <h2 className='text-xl font-bold mb-4'>Carousel Section</h2>
                  <Carousel>
                    {slides.map((slide, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className='d-block w-100'
                          src={slide.image}
                          alt={slide.title}
                        />
                        <Carousel.Caption>
                          <h3>{slide.title}</h3>
                          <p>{slide.activityType}</p>
                          <span className='font-semibold'>{slide.price}</span>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                {/* New Calendar Section */}
                <div className='mt-16 text-center'>
                  <h2 className='text-3xl font-bold text-blue-900'>
                    SMARC 2024
                  </h2>
                  <p className='text-lg text-yellow-600 font-semibold mb-2'>
                    September 19, 20, 21 | KIMS Amalapuram
                  </p>

                  <div className='inline-block'>
                    <img
                      src='/image/calendar.png' // Replace with the actual path of the calendar image
                      alt='SMARC 2024 Calendar'
                      className='mx-auto mt-4'
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* SCIENTIFIC WORKSHOP */}
        </>
      ) : (
        <>
          {profession === 'Doctor' ? (
            <div className='mt-20'>
              <Form />
            </div>
          ) : (
            <div>
              <div className='mt-24 p-6 font-sans bg-[#1d3459]'>
                <a href='/registration' className='no-underline'>
                  <RegistrationPass
                    forGroup='students'
                    title='Student Pass'
                    price='1,199'
                    description='Registered students can select workshops, scientific activities and cultural activities'
                    icon={BookOpen}
                  />
                </a>
                <a href='/registration' className='no-underline'>
                  <RegistrationPass
                    forGroup='doctors'
                    title='Doctor Pass'
                    price='2,499'
                    description='6 APMC credit hours are earned for registered doctors'
                    icon={Stethoscope}
                  />
                </a>
              </div>
              <h2 className='text-2xl p-3 text-[#1d3459] text-center font-semibold bg-[#F79E32]'>
                Register for SMARC
              </h2>
              <div className='p-4'>
                {/* <h3 className='text-lg font-semibold mb-2'>Sub heading-1</h3> */}
                <h3 className='text-xl font-semibold mb-2'>
                  Brace yourselves with energy & enthusiasm to experience the
                  Exaltation of SMARC
                </h3>

                {/* <h4 className='text-lg font-semibold mb-2'>Content</h4> */}
                <p className='text-lg mb-2'>
                  Join us at our Annual Conference, designed exclusively for
                  undergraduate medical students eager to enhance their clinical
                  skills. This year's event features a series of interactive
                  workshops where you'll receive hands-on training from
                  experienced faculty. From mastering critical procedures to
                  exploring advanced medical techniques, this conference is your
                  opportunity to build confidence and competence in a supportive
                  learning environment.
                </p>

                {/* <h3 className='text-lg font-semibold mb-2'>Sub heading-2</h3> */}
                <h3 className='text-xl mt-2 font-semibold mb-2'>
                  What medicos will be getting?
                </h3>
                <ul className='list-decimal ml-6'>
                  <li>Delegate bag</li>
                  <li>Magazine</li>
                  <li>Note pad</li>
                  <li>Pen</li>
                  <li>Certificate</li>
                </ul>

                <div className='mt-8'>
                  <h3 className='text-lg font-semibold mb-2'>Guidance:</h3>
                  <p className='mb-4'>
                    If any help required please do contact these numbers:
                    <ul className='list-disc ml-6'>
                      <li>Chandan: 7995529942</li>
                      <li>Sai Sreya: 8803458888</li>
                    </ul>
                  </p>

                  <h3 className='text-lg font-semibold mb-2'>Food:</h3>
                  <ul className='list-disc ml-6 mb-4'>
                    <li>
                      Covered under basic registration on all three event days
                    </li>
                    <li>
                      Savoring the flavors of Konaseema: A journey through its
                      cuisine
                    </li>
                    <li>Both Veg and Non-Veg options available</li>
                  </ul>

                  <h3 className='text-lg font-semibold mb-2'>Accommodation:</h3>
                  <ul className='list-disc ml-6 mb-4'>
                    <li>Relax, Recharge, and Rejuvenate</li>
                  </ul>

                  <h3 className='text-lg font-semibold mb-2'>
                    Certificates of Participation:
                  </h3>
                  <p className='mb-4'>
                    Recognition given for participating in the SMARC
                  </p>

                  <h3 className='text-lg font-semibold mb-2'>
                    APMC credit hours:
                  </h3>
                  <p className='mb-4'>Learning = Earning (credit hours)</p>
                </div>
                <div className='mt-16 text-left'>
                  <h2 className='text-3xl text-center font-normal mb-4'>
                    | Basic Registration Pass
                  </h2>
                  <p className='flex items-center text-lg mb-2'>
                    <span className='text-green-600 mr-2'>✔</span>
                    For UG Medical Students @ 1,199/-
                  </p>
                  <p className='flex items-center text-lg mb-4'>
                    <span className='text-green-600 mr-2'>✔</span>
                    For Doctors @ 2,499/-
                  </p>
                  <p className='text-lg mb-4'>
                    What all are included in basic registration pass?
                  </p>
                  <p className='flex items-center text-2xl font-bold mb-8'>
                    <span className='text-green-600 mr-2 pb-1 mb-1'>✔</span>
                    How to register?
                  </p>
                </div>
              </div>
              <div className=' bg-[#1d3459]'>
                <div className='mt-2 p-5'>
                  <div>
                    <label
                      htmlFor='college'
                      className='block text-sm font-medium text-gray-800 text-white'
                    >
                      Are you a ?
                    </label>
                    <Select
                      name='profession'
                      id='profession'
                      options={professionOptions}
                      value={profession}
                      onChange={(e) => setProfession(e.value)}
                      className='mt-1 text-gray-800 block w-100'
                      placeholder='Select your profession'
                      isSearchable
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            // </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
};

const RegistrationPass = ({
  forGroup,
  title,
  price,
  description,
  icon: Icon,
}) => (
  <div className='bg-white rounded-lg p-4 mb-4 shadow-md'>
    <div className='flex items-center mb-2'>
      <div className='bg-orange-400 text-white py-1 px-3 rounded-full text-sm font-semibold'>
        FOR {forGroup.toUpperCase()}
      </div>
    </div>
    <div className='flex items-center justify-between mb-2'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <span className='bg-teal-100 text-teal-800 py-1 px-2 rounded text-xs font-semibold'>
        BASIC REGISTRATION PASS
      </span>
    </div>
    <p className='text-2xl font-bold mb-4'>₹{price}/-</p>
    <div className='flex items-start'>
      <Icon className='w-5 h-5 mr-2 text-blue-500 mt-1' />
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  </div>
);

export default RegisterNowSection;
