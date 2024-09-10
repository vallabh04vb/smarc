const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  // key_id: process.env.RAZORPAY_TEST_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
  // key_secret: process.env.RAZORPAY_TEST_KEY_SECRET || ' ',
});

app.post('/api/orders', async (req, res) => {
  const payment_capture = 1;
  // const amount = 499;
  const currency = 'INR';

  const options = {
    amount: req.body.amount,
    currency: req.body.currency || currency,
    receipt: crypto.randomBytes(10).toString('hex'),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});
app.get('/api/payment/:paymentId', async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await razorpay.payments.fetch(paymentId);
    if (!payment) {
      return res.status(500).json('Error at razorpay');
    }
    res.json({
      status: payment.status,
      method: payment.method,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error(error);
  }
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use('/api/contact', require('./routes/contact'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
