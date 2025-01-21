import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useCartStore} from '../Cartstore/useCartStore'
import { useAuthStore } from '../Lib/store';
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Cartlist.css';


function Cartlist() {
  const { cartItems, cartCount, totalCart, addItemToCart, removeItemFromCart, clearItemFromCart, clearCart } = useCartStore();
  const navigate = useNavigate();
  const { user } = useAuthStore(); 
  const [removingOverlay, setRemovingOverlay] = useState(false);
  const [clearOverlay, setClearOverlay] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null); 

  const notify = () => toast.success("Product added successfully to cart!");
  const notifies = () => toast.error("Product removed successfully from cart!");

  const handleRemovingOverlay = (cartItem) => {
    setItemToRemove(cartItem); 
    setRemovingOverlay(true);
  };

  const handleDecreaseItem = (cartItem) => {
    removeItemFromCart(cartItem.id); 
    notifies();
  };

  const handleRemoveItem = () => {
    clearItemFromCart(itemToRemove.id); 
    setRemovingOverlay(false);
  };

  const handleIncreaseCart = (cartItem) => {
    addItemToCart(cartItem); 
    notify();
  };

  const handleCheckOut = () => {
    if (user) {
      navigate("/shippingdetails");
    } else {
      navigate("/Login");
    }
  };

  const handleClearCart = () => {
    setClearOverlay(true);
  };

  const confirmClearCart = () => {
    clearCart(); 
    setClearOverlay(false); 
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/emptycart");
    }
  }, [cartItems, navigate]);

  return (
    <Fragment>
      {removingOverlay && itemToRemove && ( 
        <div className="removal-overlay">
          <div className="removing-card">
          <FiAlertTriangle className='icons' />
            <h3>Delete</h3>
            <p>Are you sure you want to remove this item from the cart?</p>
            <div className="btn">
              <button onClick={() => setRemovingOverlay(false)}>No</button>
              <button onClick={handleRemoveItem}>Yes</button>
            </div>
          </div>
        </div>
      )}

      {clearOverlay && (
        <div className="removal-overlay">
          <div className="removing-card">
          <FiAlertTriangle className='icons' />
            <h3>Clear Cart</h3>
            <p>Are you sure you want to clear all items from the cart?</p>
            <div className="btn">
              <button onClick={() => setClearOverlay(false)}>No</button>
              <button onClick={confirmClearCart}>Yes</button>
            </div>
          </div>
        </div>
      )}

      <div className='cart-list-view'>
        <span>
          <h2>My Cart</h2>
          <h3>( {cartCount} )</h3>
        </span>

        <div className='cart-management'>
          {cartItems.map(item => (
           <div className="con">
             <div key={item.id} className='manager-1'>
              <div className="wrapper">
              <img src={item.images[0]} alt={item.description} />
              <span>
                <p>{item.name}</p>
                 <h3>
              {item.price
                ? item.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'NGN',
                  })
                : ''}
            </h3>
                 </span>
              </div>
            </div>
              <div className="manager-2">
                <span>
                  {/* <h3>Quantity</h3> */}
                  <div className="btn">
                    <button onClick={() => handleDecreaseItem(item)}><AiOutlineMinus /></button>
                   <p>{item.quantity}</p>
                    <button onClick={() => handleIncreaseCart(item)}><FiPlus /></button>
                  </div>
                </span>
                <button onClick={() => handleRemovingOverlay(item)}>
                  <IoIosRemoveCircleOutline />
                </button>
              </div>
           </div> 
          ))}   
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>

        <div className="order-summary">
          <h3>CART SUMMARY</h3>
          <div className="order-summary-card">
          <span>
            <h3>Subtotal</h3>
            <p>
              {totalCart
                ? totalCart.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'NGN',
                  })
                : ''}
            </p>
          </span>
          <p>Taxes and Shipping Calculated at checkout</p>
        <button onClick={handleCheckOut}>Checkout</button>
          </div>
        </div>
        <ToastContainer position="top-right" className="toast" />
      </div>
    </Fragment>
  );
}

export default Cartlist;