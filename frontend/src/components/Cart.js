import React from "react";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
const cart = () => {
     const {
    selectedActivities,
    activities,
    totalAmount,
    setSelectedActivities,
    setTotalAmount,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const removeActivity = (activityId) => {
    const updatedSelectedActivities = selectedActivities.filter(
      (id) => id !== activityId
    );
    const activityPrice = activities.find(
      (activity) => activity.id === activityId
    ).price;

    setSelectedActivities(updatedSelectedActivities);
    setTotalAmount(totalAmount - activityPrice);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {selectedActivities.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
            {selectedActivities.map((activityId) => {
              const activity = activities.find((a) => a.id === activityId);
              return (
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
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold mr-4">
                      ₹{activity.price}
                    </span>
                    <button
                      onClick={() => removeActivity(activity.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Total Amount:</div>
            <div className="text-2xl font-bold text-green-600">
              ₹{totalAmount}/-
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default cart;
