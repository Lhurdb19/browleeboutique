import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

function Contact() {
  return (
    <div className='contact-container'>
        <div className="contact-con">
            <div className="contact-info">
                <h2 data-aos="fade-up">CONTACT INFO</h2>
                <div className="address-info">
                    <div className="text">
                    <IoLocationSharp  className='icons' data-aos="fade-down"/>
                    <h5 data-aos="fade-right" >Address</h5>
                    </div>
                    <p data-aos="fade-left">160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
                </div>

                <div className="phone-info">
                    <div className="text">
                    <IoIosCall className='icons' data-aos="fade-down-right"/>
                    <h5 data-aos="fade-down-left">Phone</h5>
                    </div>
                    <div className="call-tag">
                    <a data-aos="flip-left" href="tel:+2347011560069">070 1156 0096</a>
                    <a data-aos="flip-right" href="tel:+2348130693571">081 3069 3571</a>
                    </div>
                </div>
                <div className="support-info">
                    <div className="text">
                    <BiSupport data-aos="flip-up" className='icons' />
                    <h5 data-aos="flip-down">Support</h5>
                    </div>
                    <p>Support.photography@gmail.com</p>
                </div>
            </div>

            <div className="message-con">
                <h2>SEND MESSAGE</h2>
                <form action="">
                    <input data-aos="zoom-in-up" type="text" name='' value={''} placeholder='Name' required />
                    <input data-aos="zoom-in-down" type="text" name='' value={''} placeholder='Email' required />
                    <input data-aos="zoom-in-left" type="text" name='' value={''} placeholder='Website' required />
                    <textarea name="" id="" data-aos="zoom-in">Message</textarea>
                    <button data-aos="zoom-out-up">SEND MESSAGE</button>
                </form>
            </div>
        </div>

        <div className="map-con">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d175371.73865643828!2d-99.26527787053304!3d40.44153830490637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1736364596569!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border: 'none'}}></iframe>
        </div>
      
    </div>
  )
}

export default Contact;
