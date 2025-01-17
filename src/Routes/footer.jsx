import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuTwitter } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { PiContactlessPaymentFill } from "react-icons/pi";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(()=> {
    Aos.init({duration: 1000})
  }, []);

  return (
    <div className='footer-container'>
      <div className="footer-card">
        <Link to={'/'}>Brownlee</Link>
        <div className="contact-card">
            <Link>About</Link>
            <Link>FAQ</Link>
            <Link>Contact</Link>

        </div>
        <div className="contact-link">
            <h2>Follow us:</h2>
            <div className="link-con">
            <Link ><LuFacebook /></Link>
            <Link ><IoLogoWhatsapp /></Link>
            <Link ><LuTwitter /></Link>
            <Link ><LuInstagram /></Link>
            </div>
        </div>
      </div>
        <div className="free-guarantee-support-container">
          <div className="free-container">
          <FaCar className='car-icon' />
          <div className="text" >
            <h3>Free Shipping</h3>
            <p>For all order 0ver #10,000</p>
          </div>
          </div>
          <div className="guarantee-container">
          <FaRegMoneyBillAlt className='money-icon' data-aos="fade-right" />
          <div className="text">
          <h3>Money Back Guarantee</h3>
          <p>If good have Problems</p>
          </div>
          </div>
          <div className="support-container">
          <HiSupport className='support-icon'/>
          <div className="text" >
          <h3>Online Support 24/7</h3>
          <p>Dedicated support</p>
          </div>
          </div>
          <div className="secure-container">
          <PiContactlessPaymentFill className='payment-icon'/>
          <div className="text">
          <h3>Payment Secure</h3>
          <p>100% secure payment</p>
          </div>
          </div>
        </div>
      <footer>&copy;2024 <Link to={'/'}>HejiDev.</Link> All Right Reserved.</footer>
    </div>
  )
}

export default Footer;
