import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Scientific_activities } from '../data/colleges';
import { useNavigate } from 'react-router-dom';

const ScientificActivities = () => {
  const { totalAmount, setTotalAmount, cart, setCart } =
    useContext(GlobalContext);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [activeDay, setActiveDay] = useState(1);
  const [activeSession, setActiveSession] = useState('Morning');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const BASE_FARE = 1199; // Base fare

  useEffect(() => {
    // Ensure totalAmount has a minimum base fare
    if (totalAmount < BASE_FARE) {
      setTotalAmount(BASE_FARE);
    }
  }, [totalAmount, setTotalAmount]);

  const toggleActivitySelection = (activityId) => {
    let updatedSelectedActivities;
    let updatedTotalAmount = totalAmount; // Start with the current total amount
    let updatedCart = [...cart];

    const activity = Scientific_activities.find(
      (activity) => activity.id === activityId
    );

    if (selectedActivities.includes(activityId)) {
      updatedSelectedActivities = selectedActivities.filter(
        (id) => id !== activityId
      );
      // Remove from cart
      updatedCart = updatedCart.filter((item) => item.id !== activityId);
      // Deduct the price of the deselected activity
      updatedTotalAmount -= activity.price;
    } else {
      updatedSelectedActivities = [...selectedActivities, activityId];
      // Add to cart
      updatedCart = [...updatedCart, activity];
      // Add the price of the selected activity
      updatedTotalAmount += activity.price;
    }

    setSelectedActivities(updatedSelectedActivities);
    setTotalAmount(updatedTotalAmount);
    setCart(updatedCart);
  };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsDialogOpen(true);
  };

  const renderActivities = () => {
    return Scientific_activities.filter(
      (activity) =>
        activity.day === activeDay && activity.session === activeSession
    ).map((activity) => {
      return (
        <div
          key={activity.id}
          className='flex justify-between items-center mb-4 bg-white p-2 rounded-xl cursor-pointer'
        >
          <div
            className='flex items-center'
            onClick={() => handleActivityClick(activity)}
          >
            <img
              src={activity.image}
              alt={activity.name}
              className='w-16 h-16 mr-4'
            />
            <div>
              <h3 className='text-lg font-semibold'>
                {activity.name}
                <span className='text-sm text-red-500'>
                  {activity.disabled && '(Out of Stock!)'}
                </span>
              </h3>
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
              disabled={activity.disabled}
              className='form-checkbox h-5 w-5 text-blue-600'
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='bg-gray-100 text-blue-900 p-2 mt-10'>
      <div className='bg-gray-100 text-blue-900 p-1 mt-10'>
        <div className='container mx-auto'>
          <div className='mt-8'>
            <div className=' flex flex-col content-center gap-3 items-center mb-4'>
              <h1 className='text-center text-blue-900'>Scientific</h1>
              <div className='flex justify-center'>
                <button
                  className={`px-4 py-2 ${
                    activeDay === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  } rounded-l`}
                  onClick={() => setActiveDay(1)}
                >
                  Day 1
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeDay === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => setActiveDay(2)}
                >
                  Day 2
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeDay === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'
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
            {activeDay === 1 && activeSession === 'Morning' ? (
              <>
                <span className='pb-2'>
                  *Please select only 1 activity from below
                </span>
              </>
            ) : (
              <></>
            )}
            {activeDay === 2 && activeSession === 'Afternoon' ? (
              <>
                <span className='pb-2'>
                  *Please select only 1 activity from below
                </span>
              </>
            ) : (
              <></>
            )}
            {activeDay === 3 && activeSession === 'Afternoon' ? (
              <>
                <span className='pb-2'>
                  *Please select only 1 activity from below
                </span>
              </>
            ) : (
              <></>
            )}
            {renderActivities()}
            {/* Dialog Box */}
            {isDialogOpen && selectedActivity && (
              <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 m-3 mt-24 overflow-y-scroll '>
                <div className='bg-white p-4 rounded-xl max-w-md w-full mt-24 overflow-scroll'>
                  <h3 className='text-2xl font-semibold mb-4'>
                    {selectedActivity.name}
                  </h3>
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.name}
                    className=' h-40 object-cover mb-4'
                  />
                  <p className='text-gray-700 mb-4'>
                    {selectedActivity.description}
                  </p>
                  <p className='text-gray-600 mb-4'>
                    {selectedActivity.content}
                  </p>{' '}
                  {/* Add the specific content for the activity */}
                  <span className='text-lg font-bold'>
                    ₹{selectedActivity.price}
                  </span>
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
            {/* Added Proceed to Pay button */}
            <div className='mt-8 text-center'>
              <button
                className='bg-yellow-500 text-blue-900 font-bold px-8 py-2 rounded-lg shadow-md'
                onClick={() => navigate('/registration/cart')}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-2 sticky bottom-0 bg-white border-gray-300 pt-4 mt-4 flex justify-between items-center pl-0 pr-0'>
        <div>
          <p className='text-lg font-bold'>Total Amount:</p>
        </div>
        <div>
          <p className='text-2xl font-bold text-green-600'>₹{totalAmount}/-</p>
        </div>
      </div>
    </div>
  );
};

export default ScientificActivities;
