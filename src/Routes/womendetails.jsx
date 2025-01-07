import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { womenProductList } from "../Productdata/womenProduct";
import { useCartStore } from "../Cartstore/useCartStore";
import { FaHands } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

function Womendetails() {
  const { womenId } = useParams();
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const women = womenProductList.find((w) => w.id === parseInt(womenId));
  const [isDescript, setIsDescript] = useState(false);
  const [imageOver, setImageOver] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleAddToCart = (women) => {
    addItemToCart(women);
  };

  const toggleDescription = () => {
    setIsDescript(!isDescript);
  };

  const openImageOver = (index) => {
    setCurrentImage(index);
    setImageOver(true);
  };

  const closeImageOver = () => {
    setImageOver(false);
  };

  const toggleNextImage = () => {
    setCurrentImage((previousIndex) =>
      previousIndex === women.images.length - 1 ? 0 : previousIndex + 1
    );
  };

  const togglePrevImage = () => {
    setCurrentImage((previousIndex) =>
      previousIndex === 0 ? women.images.length - 1 : previousIndex - 1
    );
  };

  if (!women) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <div className="back-product">
        <Link to="/womenfashion">
          <IoMdArrowRoundBack style={{ fontSize: "24px" }} />
        </Link>
      </div>
      <div className="women-product-list">
        <div className="women-con-1">
          <div className="women-image-container">
            <img
              src={women.images[0]}
              alt={women.name}
              onClick={() => openImageOver(0)}
            />
            <div className="women-image-overlay">
              <span className="plus-sign">+</span>
            </div>
          </div>
        </div>
        <div className="women-con-2">
          <div className="name-text">
            <h2>{women.name}</h2>
          </div>
          <h4>
            {women.price.toLocaleString("en-US", {
              style: "currency",
              currency: "NGN",
            })}
          </h4>
          <p>
            In Stock: {women.inStock === "Yes" ? "Available" : "Out of stock"}
          </p>

          <button
            onClick={() => toggleAddToCart(women)}
            disabled={women.inStock === "No"}
          >
            Add to Cart
          </button>

          <span onClick={toggleDescription} className="descript">
            <h3>Description</h3>
            {isDescript ? (
              <MdOutlineKeyboardArrowUp style={{ fontSize: "24px" }} />
            ) : (
              <MdOutlineKeyboardArrowDown style={{ fontSize: "24px" }} />
            )}
          </span>

          {isDescript && <p>{women.description}</p>}
        </div>

        {imageOver && (
          <div className="image-overlay">
            <MdClose className="close-overlay" onClick={closeImageOver} />
            <div className="image-content">
              <img src={women.images[currentImage]} alt="women Image" />
              <MdKeyboardArrowLeft
                className="arrow-left"
                onClick={toggleNextImage}
              />
              <MdKeyboardArrowRight
                className="arrow-right"
                onClick={togglePrevImage}
              />
            </div>
          </div>
        )}

        <div className="women-con-3">
          <h3>Shipping Details</h3>
          <div className="wrapper">
            <FaHands className="icons" />
            <span className="door-con">
              <h3>Pickup Station</h3>
              <p>
                Delivery Fees ₦250 Arriving at pickup station between 29 March
                & 01 April when you order within next 4hrs 27mins
              </p>
              <Link>Details</Link>
            </span>
          </div>
          <div className="wrapper">
            <FaTruckPickup className="icons" />
            <span className="door-con">
              <h3>Door Delivery</h3>
              <p>
                Delivery Fees ₦ 620 Ready for delivery between 29 March & 01
                April when you order within next 4hrs 27mins
              </p>
              <Link>Details</Link>
            </span>
          </div>
          <div className="wrapper">
            <BsArrowCounterclockwise className="icon" />
            <span className="door-con">
              <h3>Return Policy</h3>
              <p>Free return within 14 days for ALL eligible items</p>
              <Link>Details</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Womendetails;
