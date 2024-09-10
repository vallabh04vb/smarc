import React, { useContext, useEffect, useState } from 'react';
import { activities } from '../data/colleges';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const CulturalActivities = () => {
  const [step, setStep] = useState(true);
  const navigate = useNavigate();
  const {
    profession,
    setProfession,
    totalAmount,
    setTotalAmount,
    cart,
    setCart,
  } = useContext(GlobalContext);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState([]);

  useEffect(() => {
    // Initialize selected activities based on the ones with `check: true`
    const initiallySelected = activities
      .filter((activity) => activity.check)
      .map((activity) => activity.id);

    setSelectedActivities(initiallySelected);

    // Calculate initial total amount based on checked activities
    const initialTotalAmount = initiallySelected.reduce(
      (total, activityId) =>
        total + activities.find((activity) => activity.id === activityId).price,
      0
    );

    setTotalAmount(initialTotalAmount + 1199);
  }, [setTotalAmount]);

  const toggleActivitySelection = (activityId) => {
    let updatedSelectedActivities;
    let updatedTotalAmount = totalAmount;
    let updatedCart = [...cart];

    if (selectedActivities.includes(activityId)) {
      // Remove activity from selected list
      updatedSelectedActivities = selectedActivities.filter(
        (id) => id !== activityId
      );
      updatedTotalAmount -= activities.find(
        (activity) => activity.id === activityId
      ).price;

      // Remove activity from cart
      updatedCart = updatedCart.filter((item) => item.id !== activityId);
    } else {
      // Add activity to selected list
      updatedSelectedActivities = [...selectedActivities, activityId];
      updatedTotalAmount += activities.find(
        (activity) => activity.id === activityId
      ).price;

      // Add activity to cart
      const activityToAdd = activities.find(
        (activity) => activity.id === activityId
      );
      if (activityToAdd) {
        updatedCart.push(activityToAdd);
      }
    }

    setSelectedActivities(updatedSelectedActivities);
    setTotalAmount(updatedTotalAmount);
    setCart(updatedCart);
  };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedActivity(null);
  };

  const renderAllActivities = () => {
    return activities.map((activity) => {
      return (
        <div
          key={activity.id}
          className='flex justify-between items-center mb-4 bg-white p-2 rounded-xl'
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
              <h3 className='text-lg font-semibold'>{activity.name}</h3>
              <p className='text-sm text-gray-600'>{activity.description}</p>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='text-lg font-bold mr-4'>₹{activity.price}</span>
            <input
              type='checkbox'
              defaultChecked={activity.check}
              checked={selectedActivities.includes(activity.id)}
              onChange={() => toggleActivitySelection(activity.id)}
              className='form-checkbox h-5 w-5 text-blue-600'
              disabled={activity.disabled}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {step ? (
        <>
          <div className='bg-gray-100 text-blue-900 p-2 mt-16'>
            <div className='container mx-auto'>
              <div className='mt-8'>
                <div className=' flex flex-col content-center gap-3 items-center mb-4 mt-12'>
                  <h1 className='text-center text-blue-900'>Cultural</h1>
                </div>

                {renderAllActivities()}

                {isDialogOpen && selectedActivity && (
                  <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 m-3 mt-24 overflow-scroll'>
                    <div className='bg-white p-4 rounded-xl max-w-md w-full'>
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
                      </p>
                      <span className='text-lg font-bold'>
                        ₹{selectedActivity.price}
                      </span>
                      <div className='mt-4 flex justify-end'>
                        <button
                          onClick={closeDialog}
                          className='bg-blue-600 text-white px-4 py-2 rounded-lg'
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className='mt-8 text-center'>
                  <button
                    className='bg-yellow-500 text-blue-900 font-bold px-8 py-2 rounded-lg shadow-md'
                    onClick={() => navigate('/registration/scientific')}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </div>
            <div className='border-t-2 sticky bottom-0 bg-white border-gray-300 pt-4 mt-4 flex justify-between items-center pl-0 pr-0'>
              <div>
                <p className='text-lg font-bold'>Total Amount:</p>
              </div>
              <div>
                <p className='text-2xl font-bold text-green-600'>
                  ₹{totalAmount}/-
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='bg-gray-100 text-blue-900 p-8 mt-10'>
          <div className='container mx-auto'>SCIENTIFIC WAS HERE</div>
        </div>
      )}
    </>
  );
};

export default CulturalActivities;
