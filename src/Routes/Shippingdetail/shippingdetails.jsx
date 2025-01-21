import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useShippingDetails from "../../Cartstore/useShippingDetails";
import { useNavigate } from "react-router-dom";
import Orderdetails from '../Order/orderdetails';
import { useCartStore } from "../../Cartstore/useCartStore";
import './Shippingdetail.css';

const Shippingdetails = () => {
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  // Get the shipping details from Zustand store
  const {
    fullname,
    email,
    phoneNumber,
    second_phone,
    address,
    city,
    state,
    setShippingDetails,
  } = useShippingDetails((state) => state);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    second_phone: "",
    address: "",
    city: "",
    state: "",
  });
  const navigate = useNavigate();
  const { cartItems, totalCart } = useCartStore();

  // Use Effect to load data from Zustand store when the component mounts
  useEffect(() => {
    setFormData({
      fullname,
      email,
      phoneNumber,
      second_phone,
      address,
      city,
      state,
    });
  }, [fullname, email, phoneNumber, second_phone, address, city, state]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalCart", totalCart);
  }, [cartItems, totalCart]);

  // Update form completion status
  useEffect(() => {
    const isCompleted =
      formData.fullname &&
      formData.email &&
      formData.phoneNumber &&
      formData.address &&
      formData.city &&
      formData.state;
    setIsFormCompleted(isCompleted);
  }, [formData]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission to update Zustand store
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormCompleted) {
      localStorage.setItem("shippingDetails", JSON.stringify(formData));
      navigate("/paymentdetails");
    }
    setShippingDetails(formData); // Save form data to Zustand store
    navigate("/paymentdetails");
  };

  return (
    <>
      <div className="link-1">
        <Link className="link-shop" to={"/cartlist"}>
          Shopping Bag
        </Link>
        /
        <Link className="link-ship" to={"/shippingdetails"}>
          Shipping Details
        </Link>
        /<Link className="link-pay">Payment</Link>
      </div>
      <div className="shipping-container">
        <form onSubmit={handleSubmit}>
          <div className="input-con">
            <div className="label-input">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                placeholder="Enter Your Full Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="label-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter Your Email Address"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-con">
            <div className="label-input">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Enter Your Phone Number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="label-input">
              <label htmlFor="">Phone Number(Opt)</label>
              <input
                type="tel"
                name="second_phone"
                value={formData.second_phone}
                placeholder="Enter Your Second Phone Number (Optional)"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-con">
            <div className="label-input">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Enter Your City"
                onChange={handleChange}
                required
              />
            </div>
            <div className="label-input">
              <label htmlFor="state">State:</label>
              <select
                name="state"
                value={formData.state}
                required
                onChange={handleChange}
              >
                <option value="">Choose Your State</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
              </select>
            </div>
          </div>

          <div className="label-input">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter Your Address"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: isFormCompleted ? "" : "#e8e7e7",
              cursor: isFormCompleted ? "pointer" : "not-allowed",
            }}
            disabled={!isFormCompleted}>
            Proceed to Payment
          </button>
        </form>
        <div className="order-details">
          <Orderdetails />
        </div>
      </div>
    </>
  );
};

export default Shippingdetails;
