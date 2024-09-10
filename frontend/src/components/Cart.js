// Cart.js
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cart, setCart, totalAmount, setTotalAmount, profession } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const addRegistrationPass = () => {
      let passPrice = 0;
      let passName = 'Basic Registration Pass';

      if (profession === 'Student') {
        passPrice = 1199;
      } else if (profession === 'Doctor') {
        passPrice = 2499;
      }

      // Check if the pass is already in the cart
      const isPassInCart = cart.some((item) => item.name === passName);

      if (!isPassInCart && passPrice > 0) {
        const passItem = {
          id: 'registration-pass',
          name: passName,
          description: `Exclusive pass for ${profession}`,
          price: passPrice,
          image: '/image/culturals/Surprise_Night.png', // You can add a relevant image path
        };

        setCart([...cart, passItem]);
      }
    };

    addRegistrationPass();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profession]);

  const handleRemoveItem = (activityId) => {
    // Find the activity to remove
    const activity = cart.find((item) => item.id === activityId);

    if (activity) {
      // Update cart state
      const updatedCart = cart.filter((item) => item.id !== activityId);

      // Update total amount
      const updatedTotalAmount = totalAmount - activity.price;

      setCart(updatedCart);
      setTotalAmount(updatedTotalAmount);
    }
  };

  const handleProceedToPayment = () => {
    navigate('/payment'); // Redirect to payment page
  };

  return (
    <div className='bg-gray-100 text-blue-900 p-4 mt-10'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Your Cart</h1>
        {cart.length === 0 ? (
          <p className='text-center text-lg text-gray-700'>
            Your cart is empty.
          </p>
        ) : (
          <div>
            {cart.map((activity) => (
              <div
                key={activity.image}
                className='flex flex-col md:flex-row justify-between items-center mb-4 bg-white p-4 rounded-xl shadow-md'
              >
                <div className='flex items-center mb-4 md:mb-0'>
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className='w-24 h-24 md:w-16 md:h-16 mr-4 object-cover'
                  />
                  <div>
                    <h3 className='text-lg font-semibold'>{activity.name}</h3>
                    <p className='text-sm text-gray-600'>
                      {activity.description}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center md:items-end'>
                  <span className='text-lg font-bold mb-2'>
                    ₹{activity.price}
                  </span>
                  <button
                    onClick={() => handleRemoveItem(activity.id)}
                    className='bg-red-600 text-white px-4 py-2 rounded-lg shadow-md'
                  >
                    <Trash2></Trash2>
                  </button>
                </div>
              </div>
            ))}
            <div className='mt-4 text-right'>
              <p className='text-lg font-bold mb-2'>Total Amount:</p>
              <p className='text-2xl font-bold text-green-600'>
                ₹{totalAmount}
              </p>
            </div>
            <div className='mt-8 text-center'>
              <button
                className='bg-yellow-500 text-blue-900 font-bold px-8 py-2 rounded-lg shadow-md'
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
