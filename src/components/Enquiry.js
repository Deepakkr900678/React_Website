import React from 'react';
import headerImage  from '../images/AboutusImages/header.png';
import internetIcon from '../images/AboutusImages/internet.png';
import mobileIcon from '../images/AboutusImages/mobile.png';
import emailIcon from '../images/AboutusImages/email.png';
import clock from '../images/AboutusImages/Clock.png';
import emailbutton from '../images/AboutusImages/emailbutton.png';
import email from '../images/AboutusImages/Emails.png';
import facebook from '../images/AboutusImages/facebook.png';
import twitter from '../images/AboutusImages/twitter.png';
import google from '../images/AboutusImages/google.png';
import linkedin from '../images/AboutusImages/linkedin.png';
import arrow from '../images/AboutusImages/icons7.png';
import telegram from '../images/AboutusImages/icons13.png';
import logobox from '../images/AboutusImages/logobox.png';
import takeOffImage from '../images/ContactUsPageImages/TakeOffImage.png';
import internet from '../images/AboutusImages/internet.png';
import line from '../images/AboutusImages/Line 9.png';
import footercard from '../images/ContactUsPageImages/footercard.png';
import {Link } from "react-router-dom";

import '../css/Enquiry.css';

const Enquiry = () => {
  return (
    <>
      <div className="">
        <div className="aboutusMain">
          <div>
            <img src={headerImage} alt="Header" />
            <h3>Overseas Station</h3>
          </div>
          <div className="contact-info">
            <img src={internetIcon} alt="Internet Icon" className="internet-icon" />
            <div className="address">
              <p>SCO-111 1ST FLOOR ABC NAGAR</p>
              <h6>ABC , 123001</h6>
            </div>
            <img src={mobileIcon} alt="Mobile Icon" className="phone-icon" />
            <img src={emailIcon} alt="Email Icon" className="email-icon" />
            <div className="phonenumber">
              <p >+91 123456789</p>
            </div>
            <div>
              <p className="emailid">abc@gmail.com</p>
              <hr />
            </div>
          </div>
        </div>

        <div className="container2">
        <Link to="/">HOME</Link>
        <Link to="/Aboutus">ABOUT US</Link>
        <Link to="/Exploredestination">EXPLORE DESTINATION</Link>
        <Link to="/Ielts">IELTS/PTE</Link>
        <Link to="/Enquiry">ENQUIRY</Link>
        <Link to="/">FAQ</Link>
        <Link to="/Gallery">GALLERY</Link>
        <Link to="/Contact">CONTACT</Link>
        <Link to="/">PTE LOGIN</Link>
        </div>

        <img src={takeOffImage} alt="Take Off" className="takeOffImage" />
        <div className="middlesection">
          <h1 className="header-text">
            Get in Touch
          </h1>
          <div className="header-p">
            <p>Feel free to get in touch with me. We are always open to discussing new projects</p>
            <p>creative ideas or opportunities to be part of your visions</p>
          </div>
        </div>

        <form className="form" >
          <ul>
            <li>
              <input
                type="text"
                id="name"
                name="Name"
                className="field-style1 field-split align-left"
                placeholder="Name"
              />
              <input
                type="email"
                id="email"
                name="Email"
                className="field-style1 field-split align-right"
                placeholder="Email"
              />
            </li>
            <li>
              <input
                type="text"
                id="phone"
                name="Phone"
                className="field-style2 field-split align-left"
                placeholder="Phone"
              />
              <input
                type="text"
                id="subject"
                name="Subject"
                className="field-style2 field-split align-right"
                placeholder="Subject"
              />
            </li>
            <li>
              <textarea
                name="Message"
                id="message"
                className="field-style"
                placeholder="Message"
              ></textarea>
            </li>
            <li>
              <input type="submit" className="form-button" value="Send Message" />
            </li>
          </ul>
        </form>

        <footer className="footer-section" >
          <img src={footercard} alt="" className='footercard' />
          <div className="container">
            <div className="footer">
              <div className="footer-texts">
                <h3>Latest Updates Wants</h3>
                <p>Subscribe now to stay connected. We respect your privacy.</p>
              </div>
              <div className="subscribe-form">
                <form className='inputemail'>
                  <input type="text" placeholder="Email Address..." id="emailInput" />
                </form>
              </div>
            </div>
            <div>
              <img src={emailbutton} alt="" className='emailbutton' />
            </div>
            <div>
              <img src={telegram} alt="Telegram" className='button' />
            </div>
            <div className="footer-content">
              <div className="row">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <h4>About Us</h4>
                  </div>
                  <div className="footer-text">
                    <p>Overseas is known for being its <br />
                      best education service provider. Every day, <br />
                      we work hard to provide you with the finest<br />
                      user experience and guide you at every<br />
                      step of your journey toward realizing your<br />
                      dreams.</p>
                  </div>
                  <div className="footer-social">
                    <img src={facebook} alt="" className='facebook' />
                    <img src={twitter} alt="" className='twitter' />
                    <img src={google} alt="" className='google' />
                    <img src={linkedin} alt="" className='linkedin' />
                  </div>
                  <img src={logobox} alt="" className='facebooklogo' />
                  <img src={logobox} alt="" className='twitterlogo' />
                  <img src={logobox} alt="" className='googlelogo' />
                  <img src={logobox} alt="" className='linkedinlogo' />
                </div>

                <div className="countries">
                  <div className="footer-widget">
                    <h3 className='heading1'>Countries</h3>
                    <ul className='countrie'>
                      <li><p><img src={arrow} alt="" className='arrow' />Australia </p></li>
                      <li><p><img src={arrow} alt="" className='arrow' />Canada </p></li>
                      <li><p><img src={arrow} alt="" className='arrow' />France</p></li>
                      <li><p><img src={arrow} alt="" className='arrow' />Germany </p></li>
                      <li><p><img src={arrow} alt="" className='arrow' />Ireland</p></li>
                      <li><p><img src={arrow} alt="" className='arrow' />New zealand</p></li>
                      <li><p><img src={arrow} alt="" className='arrow' />UK</p></li>
                      <li><p><img src={arrow} alt="" className='arrow' />USA</p></li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className='heading2'>Quick Links</h3>
                    <ul className='quick'>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />Home</a></li>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />About Us</a></li>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />IELTS</a></li>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />PTE</a></li>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />FAQ</a></li>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />Gallery</a></li>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />Contact</a></li>
                      <li><a href="/*"><img src={arrow} alt="" className='arrow' />PTE Login</a></li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className='heading3'>Contact Us</h3>
                    <ul className='contact'>
                      <li className='contact1'><a href="/*">SCO-111 1ST FLOOR ABC NAGAR</a></li>
                      <li className='contact2' ><a href="/*">abc@gmail.com</a></li>
                      <li className='contact3'><a href="/*">Mon - Sat 9:30 AM - 7 PM</a></li>
                    </ul>
                  </div>
                </div>
                <img src={internet} alt="" className='internet' />
                <img src={email} alt="" className='email' />
                <img src={clock} alt="" className='clock' />
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="copyright-text">
                <p>Overseas Station &copy; 2023 All Right Reserved</p>
              </div>
              <div className="footer-menu">
                <ul>
                  <li><a href="/*">About us <span>|</span></a></li>
                  <li><a href="/*">Privacy Policy <span>|</span></a></li>
                  <li><a href="/*">Customer</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={line} alt="" className='line' />
          </div>
        </footer>
      </div>
    </>

  );
};

export default Enquiry;
