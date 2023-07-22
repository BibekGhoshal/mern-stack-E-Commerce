import React, { useEffect, useState } from 'react';
import Cartitem from '../components/Cartitem';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { loadStripe, } from '@stripe/stripe-js';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState('');
  const [paynow, setPaynow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity * 10;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = async () => {
    if (userInfo) {
      const stripe = await loadStripe('pk_test_51NSblbSFwFa9sm2mXesRSNZXhCHUgFCNW2bTkXt1wmomntlxZKmnM0Ayavtf9vhC4KBmf0YjmDp2gDko94rjWVTH00B5hkdtzU');
      const response = await axios.post('https://bazar-e-commerce.onrender.com/create-checkout-session', {
        amount: totalAmt * 100,
      });

      if (response && response.data && response.data.sessionId) {
        const { sessionId } = response.data;
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
          toast.error('Failed to redirect to checkout.');
        } else {
          toast.success("Payment Succesfull");
        }
      } else {
        toast.error('Failed to create checkout session.');
      }
    } else {
      toast.error('Please sign in to checkout');
    }
  };

  const handlePayment = async (token) => {
    if (!token || !token.id) {
      console.error('Invalid payment token');
      return;
    }

    try {
      const response = await axios.post(
        'https://bazar-e-commerce.onrender.com/create-checkout-session',
        {
          amount: totalAmt * 100,
          token: token.id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response);
      // Handle the response if needed
    } catch (error) {
      console.error('Payment failed:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartimg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <Cartitem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="font-titleFont font-bold text-lg">₹ {totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, veritatis
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total
            <span className="text-xl font-bold">₹{totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
          {paynow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NSblbSFwFa9sm2mXesRSNZXhCHUgFCNW2bTkXt1wmomntlxZKmnM0Ayavtf9vhC4KBmf0YjmDp2gDko94rjWVTH00B5hkdtzU"
                name="Bazar Online shopping"
                amount={totalAmt * 100}
                label="Pay To bazar"
                description={`Your Payment amount is ₹${totalAmt}`}
                token={handlePayment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
