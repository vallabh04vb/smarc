import { useEffect } from 'react';

export default function RazorpayButton() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js');
  });

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <form id='rzp_payment_form'></form>
      <h2>This line comes below the payment button</h2>
    </div>
  );
}
