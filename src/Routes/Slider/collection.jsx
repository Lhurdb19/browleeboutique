import React, { Component } from "react";
import { BsJustifyLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";


function VerticalMode() {
  const settings = {
    dots: false,
    autoplay: true,
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    // verticalSwiping: true,
    // lazyload: 'ondemand',
    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function(currentSlide) {
    //   console.log("after change", currentSlide);
    // }
  };
  return (
    <div className="collection-slider-container">
      <Slider {...settings} >
        <div className="collection" >
          <h3>THE CHLOE COLLECTION</h3>
          <h2>The Project Jacket</h2> <br />
          <Link to={'/product'}>SHOP NOW</Link>
        </div>

        <div className="collection">
          
          <h3>THE CHLOE COLLECTION</h3>
          <h2>The Project Jacket</h2> <br />
          <Link to={'/product'}>SHOP NOW</Link>
        </div>

        <div className="collection">
          
          <h3>THE CHLOE COLLECTION</h3>
          <h2>The Project Jacket</h2> <br />
          <Link to={'/product'}>SHOP NOW</Link>
        </div>

        <div className="collection">
          
          <h3>THE CHLOE COLLECTION</h3>
          <h2>The Project Jacket</h2> <br />
          <Link to={'/product'}>SHOP NOW</Link>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalMode;
