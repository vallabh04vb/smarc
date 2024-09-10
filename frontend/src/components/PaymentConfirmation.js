import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentConfirmationPage = () => {
  const { totalAmount, profession } = useContext(GlobalContext);
  const [responseId, setResponseId] = useState();
  const [responseState, setResponseState] = useState([]);
  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.src = src;

      script.onload = (res) => {
        resolve(true);
      };
      script.onerror = (err) => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = (amount) => {
    console.log(amount);
    let data = JSON.stringify({
      amount: totalAmount,
      currency: 'INR',
    });
    let config = {
      method: 'POST',
      maxBodyLenght: Infinity,
      url: 'https://smarc2k24.online/api/orders',
      // url: 'http://localhost:5005/orders',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    const check = axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        handleRazorpayScreen(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(check);
  };
  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      console.log('Failed to load the script');
      return;
    }
    const options = {
      key: 'rzp_live_q92TP8OQwOmvyg',
      // key: 'rzp_test_zs7haQPqjy2BuP',
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'SMARC 2k24',
      description: 'Payment to SMARC',
      image: '/image/logo.svg',
      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
        alert('Payment is successful');
        navigate('/');
      },
      // prefill: {
      //   name: 'Eshu',
      //   email: 'eshu@gmail.com',
      // },
      theme: {
        color: '#d86dfc',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const paymentFetch = (e) => {
    e.preventDefault();

    const paymentId = e.target.paymentId.value;

    axios
      .get(`https://smarc2k24.online/api/payment/${paymentId}`)
      // .get(`https//localhost:5005/payment/${paymentId}`)
      .then((response) => {
        console.log(response.data);
        setResponseState(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // const navigate = useNavigate();
  // const adjustedAmount = profession?.value === 'Doctor' ? 2499 : totalAmount;

  // useEffect(() => {
  //   if (adjustedAmount === 0) {
  //     navigate('/registration');
  //   }
  // }, [adjustedAmount, navigate, profession]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 mt-12'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md mx-4'>
        {/* <h1 className='text-2xl font-bold text-center text-blue-900 mb-4'>
          Payment Confirmation
        </h1>
        <p className='text-lg text-gray-700 mb-4'>
          Thank you for selecting these options. Our registration team will
          contact you shortly.
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          You'll recieve a payment link through SMS (TEXT MESSAGE) to your
          registered mobile number.
        </p> */}
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
        <div className='w-full flex justify-center'>
          <button
            className='p-2 text-center text-lg bg-[#1D3459] text-white rounded-lg'
            onClick={() => createRazorpayOrder(totalAmount)}
          >
            Pay ₹{totalAmount}
          </button>
        </div>
        {responseId && <>{responseId}</>}
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
