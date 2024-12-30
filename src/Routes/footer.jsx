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
            <Link data-aos="fade-up"><LuFacebook /></Link>
            <Link data-aos="fade-down"><IoLogoWhatsapp /></Link>
            <Link data-aos="fade-left"><LuTwitter /></Link>
            <Link data-aos="fade-right"><LuInstagram /></Link>
            </div>
        </div>
      </div>
        <div className="free-guarantee-support-container">
          <div className="free-container">
          <FaCar className='car-icon' data-aos="fade-up"/>
          <div className="text" data-aos="fade-left">
            <h3>Free Shipping</h3>
            <p>For all order 0ver #10,000</p>
          </div>
          </div>
          <div className="guarantee-container">
          <FaRegMoneyBillAlt className='money-icon' data-aos="fade-right" />
          <div className="text" data-aos="fade-left">
          <h3>Money Back Guarantee</h3>
          <p>If good have Problems</p>
          </div>
          </div>
          <div className="support-container">
          <HiSupport className='support-icon' data-aos="fade-down" />
          <div className="text" data-aos="fade-left">
          <h3>Online Support 24/7</h3>
          <p>Dedicated support</p>
          </div>
          </div>
          <div className="secure-container">
          <PiContactlessPaymentFill className='payment-icon' data-aos="fade-right" />
          <div className="text" data-aos="fade-left">
          <h3>Payment Secure</h3>
          <p>100% secure payment</p>
          </div>
          </div>
        </div>
      <footer>&copy;2024 <Link to={'/'}>BashCode.</Link> All Right Reserved.</footer>
    </div>
  )
}

export default Footer;
