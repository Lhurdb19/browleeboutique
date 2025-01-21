import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './Home.css';


function Responsive() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="women-slider-container">
      <Slider {...settings} className="slides">
        <div className="women-slider">
          
          <img src="https://cdn.shopify.com/s/files/1/0549/6586/2483/files/emaan-adeel-selene-pakistani-luxury-dress-781325_2048x.jpg?v=1734427276" alt="" />
        </div>
        <div className="women-slider">
          
          <img src="https://lookinggoodfashions.com/wp-content/uploads/2024/07/ladies_wear_sm.jpg" alt="" />
        </div>
        <div className="women-slider">
          
            <img src="https://image.made-in-china.com/2f0j00lRqokuFGhcrv/4-Colors-S-3XL-Ladies-African-Clothes-Women-Dress-Good-Quality-Dresses-Office-Wear-Tie-Neck-Elegant-Pencil-Dress.webp" alt="" />
        </div>
        <div className="women-slider">
          
        <img src="https://addide.com/cdn/shop/products/S5d15950f5157436fa49e602ef7a08587X_1000x.jpg?v=1670081549" alt="" />
        </div>
        <div className="women-slider">
        <img src="https://i5.walmartimages.com/asr/f4045aad-aab0-4587-95e4-9e669428361a.ca9f28e1b11799f5cd61a464a8f0a5b5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" />
        </div>
        <div className="women-slider">
          
        <img src="https://cdn.shopify.com/s/files/1/1608/4507/files/01_Power_Ecomm_7110_graphite_500x.jpg?v=1721726453" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
