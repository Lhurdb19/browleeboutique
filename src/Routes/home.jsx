import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Responsive from './Slider/womenslider';
import VerticalMode from './Slider/collection';
import { TiStar } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";

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
            <p>769 items</p>
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
              <p>358 items</p>
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
              <p>159 items</p>
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
              <p>257 items</p>
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
              <p>762 items</p>
              <Link to={"/accessories"}>SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="collection-container">
        <VerticalMode />
      </div>

      <div className="hot-best-feature-container">
        <div className="hot-trend-container">
          <h3 data-aos="fade-down">HOT TREND</h3>
          <div className="box-container">
          <div className="box-1">
              <img src="https://www.cartrollers.com/wp-content/uploads/2022/09/CLASSIC-FASHION-DESIGNER-SHOES-2.jpeg" alt="" data-aos="flip-down" />
              <div className="text">
                <p  data-aos="fade-down">Classic Fashion Design</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
            <div className="box-2">
              <img src="https://i0.wp.com/waziri.ng/wp-content/uploads/2023/12/D.S-Earrings-and-Pendant-Jewelries.png?fit=500%2C500&ssl=1" alt="" data-aos="flip-up" />
              <div className="text">
                <p  data-aos="fade-down">Pendant earrings</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4>#450.0</h4>
              </div>
            </div>
            <div className="box-3">
              <img src="https://assets.ajio.com/medias/sys_master/root/20231214/B6fn/657ad716afa4cf41f5cff1e6/-473Wx593H-463872857-white-MODEL.jpg" alt="" data-aos="flip-down" />
              <div className="text">
                <p  data-aos="fade-down">Cotton T-Shirt</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="best-seller-container">
          <h3 data-aos="fade-down">BEST SELLER</h3>
          <div className="box-container">
            <div className="box-1">
              <img src="https://down-ph.img.susercontent.com/file/cn-11134208-7ras8-m0ihk6b1nttzf3" alt="" data-aos="flip-up" />
              <div className="text">
                <p data-aos="fade-down">Set Kid Suits</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
            <div className="box-2">
              <img src="https://www.aliceswonders.co.uk/cdn/shop/products/Navy_leather_double_zip_bags_300x300.jpg?v=1651786058" alt="" data-aos="flip-down" />
              <div className="text">
                <p data-aos="fade-down">Zip-pockets pebbled tote
                briefcase</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
            <div className="box-3">
              <img src="https://sunshinebarossa.com.au/cdn/shop/products/image_a9ac8c79-0550-4ded-84bc-1d343310c374.heic?v=1699176857&width=1445" alt="" data-aos="flip-up" />
              <div className="text">
                <p  data-aos="fade-down">Round leather bag</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-container">
          <h3 data-aos="fade-down">FEATURE</h3>
          <div className="box-container">
          <div className="box-1">
              <img src="https://m.media-amazon.com/images/I/71IeZaZ-T0L._AC_SX342_.jpg" alt="" data-aos="flip-down" />
              <div className="text">
                <p data-aos="fade-down">Bow wrap skirt</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
            <div className="box-2">
              <img src="https://i.pinimg.com/736x/1e/3f/df/1e3fdf4ea8843211e0abe043dd8a5c52.jpg" alt="" data-aos="flip-up" />
              <div className="text">
                <p  data-aos="fade-down">Metallic earrings</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
            <div className="box-3">
              <img src="https://abokika.com/cdn/shop/products/fcs1.jpg?v=1617909292" alt="" data-aos="flip-down" />
              <div className="text">
                <p  data-aos="fade-down">Flap cross-body bag</p>
                <div className="star-icon" style={{color: '#E3C01C'}}>
                <TiStar /><TiStar /><TiStar /><TiStar /><TiStar />
                </div>
                <h4 data-aos="fade-up-right">#450.0</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
