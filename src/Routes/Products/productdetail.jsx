import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productList } from "../../Productdata/productData";
import { useCartStore } from "../../Cartstore/useCartStore";
import { FaHands } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import './Product.css';


function ProductDetails() {
  const { productId } = useParams();
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const product = productList.find((p) => p.id === parseInt(productId));
  const [isDescription, setIsDescription] = useState(false);
  const [imageOverlay, setImageOverlay] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };

  const handleDescription = () => {
    setIsDescription(!isDescription);
  };

  const openImageOverlay = (index) => {
    setCurrentImageIndex(index);
    setImageOverlay(true);
  };

  const closeImageOverlay = () => {
    setImageOverlay(false);
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
    <div className="back-product">
      <Link to="/product">
            <IoMdArrowRoundBack style={{ fontSize: "24px" }} />
          </Link>
    </div>

    <div className="product-details">
      <div className="con-1">
        <div className="product-image-container">
          <img
            src={product.images[0]}
            alt={product.name}
            onClick={() => openImageOverlay(0)}
          />
          <div className="product-image-overlay" onClick={() => openImageOverlay(0)}>
            <span className="plus-sign">+</span>
          </div>
        </div>
      </div>
      <div className="con-2">
        <div className="name-text">
          {/* <Link to="/product">
            <IoMdArrowRoundBack style={{ fontSize: "24px" }} />
          </Link> */}
          <h2>{product.name}</h2>
        </div>
        <h4>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "NGN",
          })}
        </h4>
        <p>In stock: {product.inStock === "Yes" ? "Available" : "Out of stock"}</p>

        <button onClick={() => handleAddToCart(product)} disabled={product.inStock === "No"}>
          Add to Cart
        </button>

        <span onClick={handleDescription} className='description'>
          <h3>Description</h3>
          {isDescription ? (
            <MdOutlineKeyboardArrowUp style={{ fontSize: "24px" }} />
          ) : (
            <MdOutlineKeyboardArrowDown style={{ fontSize: "24px" }} />
          )}
        </span>

        {isDescription && <p>{product.description}</p>}
      </div>

      {imageOverlay && (
        <div className="image-overlay-modal">
            <MdClose className="close-overlay" onClick={closeImageOverlay} />
          <div className="image-overlay-content">
            <img src={product.images[currentImageIndex]} alt="Product Image" />
            <MdKeyboardArrowLeft className="arrow-left" onClick={handlePrevImage} />
            <MdKeyboardArrowRight className="arrow-right" onClick={handleNextImage} />
          </div>
        </div>
      )}

<div className="con-3">
        <h3>Shipping Details</h3>
        <div className="wrapper">
          <FaHands className="icons" />
          <span className= 'door-con'>
            <h3>Pickup Station</h3>
            <p>
              Delivery Fees ₦ 250 Arriving at pickup station between 29 March &
              01 April when you order within next 4hrs 27mins
            </p>
            <Link>Details</Link>
          </span>
        </div>
        <div className="wrapper">
          <FaTruckPickup className="icons" />
          <span className= 'door-con'>
            <h3>Door Delivery</h3>
            <p>
              Delivery Fees ₦ 620 Ready for delivery between 29 March & 01 April
              when you order within next 4hrs 27mins
            </p>
            <Link>Details</Link>
          </span>
        </div>
        <div className="wrapper">
          <BsArrowCounterclockwise className="icon"  />
          <span className= 'door-con'>
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

export default ProductDetails;