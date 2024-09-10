import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmationPage = () => {
  const { totalAmount, profession } = useContext(GlobalContext);
  const navigate = useNavigate();
  const adjustedAmount = profession?.value === 'Doctor' ? 2499 : totalAmount;

  useEffect(() => {
    if (adjustedAmount === 0) {
      navigate('/registration');
    }
  }, [adjustedAmount, navigate, profession]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 mt-12'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md mx-4'>
        <h1 className='text-2xl font-bold text-center text-blue-900 mb-4'>
          Payment Confirmation
        </h1>
        <p className='text-lg text-gray-700 mb-4'>
          Thank you for selecting these options. Our registration team will
          contact you shortly.
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          You'll recieve a payment link through SMS (TEXT MESSAGE) to your
          registered mobile number.
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          After completing the payment, you'll get a confirmation message
          through WhatsApp
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          <strong>Name:</strong> M SAI SREYA
          <br />
          <strong>Contact No.:</strong> +91 8803458888
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          <strong>Name:</strong> K CHANDAN
          <br />
          <strong>Contact No.:</strong> +91 7995529942
        </p>
        {/* <div className='text-center'>
          <a
            href={`https://www.upi.me/pay?pa=3129770149209501@cnrb&am=${adjustedAmount}&tn=SMARC2k24`}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md text-lg font-semibold'
          >
            Proceed to Payment
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;
