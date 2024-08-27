import React, { useState, useContext, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "../context/GlobalContext";
import Select from "react-select";
import { professionOptions } from "../data/colleges";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
// import calendar from '../../public/image/calendar.png';
const RegisterNowSection = () => {
  const { profession, setProfession } = useContext(GlobalContext);

  console.log("PROFESSION FROM REGISTRATION PAGE: ", profession);

  const [selectedActivities, setSelectedActivities] = useState([]);
  // const [totalAmount, setTotalAmount] = useState(0);
  const { totalAmount, setTotalAmount } = useContext(GlobalContext);
  const { cart, setCart } = useContext(GlobalContext);
  const [activeDay, setActiveDay] = useState(1); // Tracks the active day (1, 2, 3)
  const [activeSession, setActiveSession] = useState("Morning"); // Tracks the active session (Morning, Afternoon)
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
      image: "/image/Flash Mob.png",
    },
    {
      day: 1,
      session: "Morning",
      id: 2,
      name: "Surprise Night",
      price: "Free",
      description: "Covered under basic registration fees",
      image: "/image/Surprise Night.png",
    },
    {
      day: 1,
      session: "Morning",
      id: 3,
      name: "Celebrity Night",
      price: "Free",
      description: "Covered under basic registration fees",
      image: "/image/Celebrity Night.png",
    },
    {
      day: 2,
      session: "Morning",
      id: 4,
      name: "DJ Night",
      price: "Free",
      description: "Covered under basic registration fees",
      image: "/image/DJ Night.png",
    },
    {
      day: 2,
      session: "Morning",
      id: 5,
      name: "Med Fun",
      price: "Free",
      description: "Covered under basic registration fees",
      image: "/image/Med Fun.png",
    },
    {
      day: 2,
      session: "Morning",
      id: 6,
      name: "Fashion Parade",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Fashion Parade.png",
    },
    //compititions in culturals
    {
      day: 2,
      session: "Morning",
      id: 7,
      name: "Dance Competition",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Dance Competition.png",
    },
    {
      day: 2,
      session: "Morning",
      id: 8,
      name: "Singing Competition",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Singing Competition.png",
    },
    {
      day: 2,
      session: "Morning",
      id: 9,
      name: "Photo Contest",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Photo Contest.png",
    },
    {
      day: 2,
      session: "Morning",
      id: 10,
      name: "Shortfilm Competition",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Shortfilm Competition.png",
    },
    {
      day: 3,
      session: "Morning",
      id: 11,
      name: "Playing an Instrument",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Playing an Instrument.png",
    },
    {
      day: 3,
      session: "Morning",
      id: 12,
      name: "Cooking without Fire",
      price: "₹99/-",
      description: "Select the following to register for this particular competition",
      image: "/image/Cooking without Fire.png",
    },
    {
      day: 3,
      session: "Morning",
      id: 13,
      name: "Beat Box",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Beat Box.png",
    },
    {
      day: 3,
      session: "Morning",
      id: 14,
      name: "Arts Competition 1",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Arts Competition 1.png",
    },
    {
      day: 3,
      session: "Morning",
      id: 15,
      name: "Arts Competition 2",
      price: "Free",
      description: "Select the following to register for this particular competition",
      image: "/image/Arts Competition 2.png",
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

  const renderActivities = () => {
    return activities
      .filter(
        (activity) =>
          activity.day === activeDay && activity.session === activeSession
      )
      .map((activity) => (
        <div
          key={activity.id}
          className="flex justify-between items-center mb-4"
        >
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
  const navigate = useNavigate();
  return (
    <>
      {profession === "Student" ? (
        <>
          {step ? (
            <>
              {/* <Form className="mt-10"></Form> */}
              <div className="bg-gray-100 text-blue-900 p-8 mt-10">
                {/* <h1 className="text-center mt-5">STUDENT</h1> */}
                <div className="container mx-auto">
                  <div className="mt-8">
                    <div className=" flex flex-col content-center gap-3 items-center mb-4">
                      <h1 className="text-center text-blue-900">Cultural</h1>
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

                    {renderActivities()}

                    <div className="border-t-2 border-gray-300 pt-4 mt-4 flex justify-between items-center">
                      <div>
                        <p className="text-lg font-bold">Total Amount:</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">
                          ₹{totalAmount}/-
                        </p>
                      </div>
                      {/* <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg">
                      View Cart ({selectedActivities.length})
                    </button> */}
                    </div>
                    {/* Added Proceed to Pay button */}
                    <div className="mt-8 text-center">
                      <button
                        className="bg-yellow-500 text-blue-900 font-bold px-8 py-2 rounded-lg shadow-md"
                        onClick={() => setStep(false)}
                      >
                        NEXT
                      </button>
                    </div>
                    {/* New Section with Dropdowns */}
                    <div className="mt-16 text-left">
                      <h2 className="text-2xl font-bold mb-4">
                        | Basic Registration Pass
                      </h2>
                      <p className="flex items-center text-lg mb-2">
                        <span className="text-green-600 mr-2">✔</span>
                        For UG Medical Students @ 1,199/-
                      </p>
                      <p className="flex items-center text-lg mb-4">
                        <span className="text-green-600 mr-2">✔</span>
                        For Doctors @ 2,499/-
                      </p>
                      <p className="text-lg mb-4">
                        What all are included in basic registration pass?
                      </p>
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
                            <span>{isWorkshopExpanded[index] ? "-" : "+"}</span>
                          </button>
                          {isWorkshopExpanded[index] && (
                            <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
                              <p>
                                Details about Workshop {index + 1} go here.
                                Replace this with real content.
                              </p>
                            </div>
                          )}
                        </div>
                      ))}

                      <h3 className="text-lg font-bold mb-4">
                        SCIENTIFIC ACTIVITIES
                      </h3>
                      {[0, 1].map((_, index) => (
                        <div key={index} className="mb-4">
                          <button
                            className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow"
                            onClick={() => toggleScientific(index)}
                          >
                            <span className="text-xl">i</span>
                            <span className="ml-4">
                              Scientific Activity {index + 1}
                            </span>
                            <span>
                              {isScientificExpanded[index] ? "-" : "+"}
                            </span>
                          </button>
                          {isScientificExpanded[index] && (
                            <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
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
                    <h2 className="text-3xl font-bold text-blue-900">
                      SMARC 2024
                    </h2>
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
            </>
          ) : (
            <div className="bg-gray-100 text-blue-900 p-8 mt-10">
              <div className="container mx-auto">
                <div className="mt-8">
                  <div className=" flex flex-col content-center gap-3 items-center mb-4">
                    <h1 className="text-center text-blue-900">Scientific</h1>
                    <div className="flex justify-center">
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
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-4">{`Day ${activeDay} - ${activeSession} Session`}</h2>

                  {renderActivities()}

                  <div className="border-t-2 border-gray-300 pt-4 mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold">Total Amount:</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        ₹{totalAmount}/-
                      </p>
                    </div>
                    {/* <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg">
                      View Cart ({selectedActivities.length})
                    </button> */}
                  </div>
                  {/* Added Proceed to Pay button */}
                  <div className="mt-8 text-center">
                    <button
                      className="bg-yellow-500 text-blue-900 font-bold px-8 py-2 rounded-lg shadow-md"
                      onClick={() => navigate("/payment")}
                    >
                      NEXT
                    </button>
                  </div>
                  {/* New Section with Dropdowns */}
                  <div className="mt-16 text-left">
                    <h2 className="text-2xl font-bold mb-4">
                      | Basic Registration Pass
                    </h2>
                    <p className="flex items-center text-lg mb-2">
                      <span className="text-green-600 mr-2">✔</span>
                      For UG Medical Students @ 1,199/-
                    </p>
                    <p className="flex items-center text-lg mb-4">
                      <span className="text-green-600 mr-2">✔</span>
                      For Doctors @ 2,499/-
                    </p>
                    <p className="text-lg mb-4">
                      What all are included in basic registration pass?
                    </p>
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
                          <span>{isWorkshopExpanded[index] ? "-" : "+"}</span>
                        </button>
                        {isWorkshopExpanded[index] && (
                          <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
                            <p>
                              Details about Workshop {index + 1} go here.
                              Replace this with real content.
                            </p>
                          </div>
                        )}
                      </div>
                    ))}

                    <h3 className="text-lg font-bold mb-4">
                      SCIENTIFIC ACTIVITIES
                    </h3>
                    {[0, 1].map((_, index) => (
                      <div key={index} className="mb-4">
                        <button
                          className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded shadow"
                          onClick={() => toggleScientific(index)}
                        >
                          <span className="text-xl">i</span>
                          <span className="ml-4">
                            Scientific Activity {index + 1}
                          </span>
                          <span>{isScientificExpanded[index] ? "-" : "+"}</span>
                        </button>
                        {isScientificExpanded[index] && (
                          <div className="bg-white px-4 py-2 border border-gray-200 rounded mt-2">
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
                  <h2 className="text-3xl font-bold text-blue-900">
                    SMARC 2024
                  </h2>
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
          )}
          {/* SCIENTIFIC WORKSHOP */}
        </>
      ) : (
        <>
          {profession === "Doctor" ? (
            <div className="mt-20"><Form/></div>
          ) : (
            <div className="mt-20">
              <div className="mt-20 p-5">
                <div>
                  <label
                    htmlFor="college"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Are you a ?
                  </label>
                  <Select
                    name="profession"
                    id="profession"
                    options={professionOptions}
                    value={profession}
                    onChange={(e) => setProfession(e.value)}
                    className="mt-1 text-gray-800 block w-100"
                    placeholder="Select your profession"
                    isSearchable
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RegisterNowSection;
