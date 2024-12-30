import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Cartstore/useCartStore";
import useShippingDetails from "../Cartstore/useShippingDetails";
import Orderdetails from "./orderdetails";
import { TfiHandPointLeft } from "react-icons/tfi";
import { FiCheckCircle } from "react-icons/fi";

const Paymentdetails = () => {
  const navigate = useNavigate();
  const { cartItems, totalCart } = useCartStore();
  const { fullname, email, phoneNumber, address, city, state } =
    useShippingDetails((state) => state);

  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/emptycart");
    }
  }, [cartItems, totalCart]);

  const handlePaymentConfirmation = () => {
    setPaymentConfirmed(true);
    // navigate('/makepayment');
  };

  const handlePaymentMethod = () => {
    setPaymentMethod(!paymentMethod);
  };

  return (
    <>
    <div className="link-2">
            <Link className='link-shop' to={'/cartlist'}>Shopping Bag</Link>/
            <Link className='link-ship' to={'/shippingdetails'}>Shipping Details</Link>/
            <Link className='link-pay' >Payment</Link>
          </div>
    <div className="payment-container">
      <div className="payment-details">
        {paymentMethod ? (
          <div className="payment-overlay-con">
            <div className="payment-overlay">
              <h4> Payment Method Not Available!</h4>
            </div>
          </div>
        ) : (
          <div>
            <div className="choose-payment-method">
              <h3>Choose Payment Method</h3>

              <div className="payment-methods">
                <button onClick={handlePaymentMethod}>
                  <h5>Credit/Debit Card</h5>
                  <TfiHandPointLeft className="point" />
                </button>

                <button onClick={handlePaymentMethod}>
                  <h5>Bank Transfer</h5>
                  <TfiHandPointLeft className="point" />
                </button>

                <button onClick={handlePaymentMethod}>
                  <h5>Mobile Banking</h5>
                  <TfiHandPointLeft className="point" />
                </button>

                <button onClick={handlePaymentMethod}>
                  <h5>Pay on Delivery (PoD)</h5>
                  <TfiHandPointLeft className="point" />
                </button>

                <button onClick={handlePaymentMethod}>
                  <h5>PayPal</h5>
                  <TfiHandPointLeft className="point" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="shipping-form">
        <h3>Shipping Details</h3>
        <div className="form-detail">
          <p>
            <strong>Full Name:</strong> {fullname}
          </p>
          <p>
            {" "}
            <strong>Email:</strong> {email}
          </p>
          <p>
            {" "}
            <strong>Phone Number:</strong> {phoneNumber}
          </p>
          <p>
            {" "}
            <strong>Address:</strong> {address}
          </p>
          <p>
            {" "}
            <strong>City:</strong> {city}{" "}
          </p>
          <p>
          
            <strong>State:</strong> {state.option}
          </p>
        </div>
      </div>

      <div className="order-detail">
        <Orderdetails />
      </div>
    </div>
    </>
  );
};

export default Paymentdetails;
