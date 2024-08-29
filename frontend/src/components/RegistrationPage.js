import React, { useState, useContext, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalContext';
import Select from 'react-select';
import {
  activities,
  professionOptions,
  Scientific_activities,
} from '../data/colleges';
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

  // Carousel data

  const navigate = useNavigate();

  const handleSelect = (e) => {
    console.log(e.value);
    if (e.value === 'Student') {
      navigate('/registration/culturals');
    }
    setProfession(e.value);
  };
  return (
    <>
      {profession === 'Student' ? (
        <></>
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
                      onChange={(e) => handleSelect(e)}
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
