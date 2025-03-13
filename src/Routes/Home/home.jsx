import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Responsive from '../Slider/womenslider';
import VerticalMode from '../Slider/collection'
import Aos from "aos";
import "aos/dist/aos.css";
import Trendproduct from '../Trend/trendproduct';
import './Home.css';

function Home() {
  useEffect(()=> {
    Aos.init({duration: 500})
  }, []);

  return (
    <div className="home-container">
      <div className="fashion-container">
        <div className="women-fashion-con">
          <Responsive />
          <div className="text">
            <h2>Women's fashion</h2>
            <h3>769 items</h3>
            <Link to={"/womenfashion"}>SHOP NOW</Link>
          </div>
        </div>
        <div className="all-fashion-con">
          <div className="men-fashion-con">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/7/329252193/LO/EW/HT/2614339/mens-wear.jpg"
              alt=""
            />
            <div className="text">
              <h2>Men's fashion</h2>
              <h3>358 items</h3>
              <Link to={"/menfashion"}>SHOP NOW</Link>
            </div>
          </div>
          <div className="shoes-fashion-con">
            <img
              src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/732138/2.jpg?9752"
              alt=""
            />
            <div className="text">
              <h2>Shoes</h2>
              <h3>159 items</h3>
              <Link to={"/shoesfashion"}>SHOP NOW</Link>
            </div>
          </div>
          <div className="kids-fashion-con">
            <img
              src="https://lscoecomm.scene7.com/is/image/lscoecomm/Toddler_PLP-1?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=1200&hei=1500"
              alt=""
            />
            <div className="text">
              <h2>Kid's fashion</h2>
              <h3>257 items</h3>
              <Link to={"/kidsfashion"}>SHOP NOW</Link>
            </div>
          </div>
          <div className="accessories-fashion-con">
            <img
              src="https://m.media-amazon.com/images/I/615NdXwJUtL._AC_SL1500_.jpg"
              alt=""
            />
            <div className="text">
              <h2>Accessories</h2>
              <h3>762 items</h3>
              <Link to={"/accessories"}>SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="collection-container">
        {/* <VerticalMode /> */}
      </div>

        <Trendproduct/>
    </div>
  );
}

export default Home;
