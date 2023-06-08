import React from 'react';
import headerImage  from '../images/AboutusImages/header.png';
import internetIcon from '../images/AboutusImages/internet.png';
import mobileIcon from '../images/AboutusImages/mobile.png';
import emailIcon from '../images/AboutusImages/email.png';
import aboutus from '../images/AboutusImages/aboutus.png';
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
import image1 from '../images/AboutusImages/image1.png';
import image2 from '../images/AboutusImages/image2.jpeg';
import arrows from '../images/AboutusImages/icons7.png';
import phoneicon from '../images/AboutusImages/phoneicon.png';
import phonecircle from '../images/AboutusImages/phonecircle.png';
import checkbox from '../images/AboutusImages/checkbox.png';
import middlebackground from '../images/AboutusImages/middlebackground.png';
import smallcircle from '../images/AboutusImages/smallcircle.png';
import largecircle from '../images/AboutusImages/largecircle.png';
import number1 from '../images/AboutusImages/01.png';
import number2 from '../images/AboutusImages/02.png';
import number3 from '../images/AboutusImages/03.png';
import number4 from '../images/AboutusImages/04.png';
import number5 from '../images/AboutusImages/05.png';
import number6 from '../images/AboutusImages/06.png';
import line1 from '../images/AboutusImages/line1.png';
import line2 from '../images/AboutusImages/line2.png';
import dot from '../images/AboutusImages/dot.png';
import internet from '../images/AboutusImages/internet.png';
import line from '../images/AboutusImages/Line 9.png';
import footercard from '../images/AboutusImages/footercard.png';
import {Link } from "react-router-dom";


import '../css/About.css';

const Aboutus = () => {
  return (
    <>
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

      <div className="navbar">
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

      <img src={aboutus} alt="" className="aboutus" />
      <div className="contant" >
        <h1 className='h1'>ABOUT Overseas Station</h1>

        <p className='para'>
          Overseas Station is Technology driven and most trusted PTE Preparation<br />
          Centre.<br />
          Overseas Station is known for its thorough research and professionalism. Overseas<br />
          Station provides services ranging from IELTS & PTE training to culture familiarization,<br />
          designed to help students study in any country across the world.
        </p>

        <div className='checkboxmain'>
          <div className="paragraph">
            <img src={checkbox} alt="" className='checkbox1' />
            <p className='text'>Talk to one of our best consultants today</p>
          </div>

          <div className="paragraph">
            <img src={checkbox} alt="" className='checkbox1' />
            <p className='text'>Our experts are able to find new growth</p>
          </div>

          <div className="paragraph">
            <img src={checkbox} alt="" className='checkbox1' />
            <p className='text'>Find more information on our website</p>
          </div>

          <div>
            <button className="buttons">
              More Detail
              <img src={arrows} alt="" className='arrows' />
            </button>
            <p className='phonenumber'>+91 123456789</p>
          </div>
          <div>
            <img src={phonecircle} alt="" className='phonecircle' />
          </div>
          <div>
            <img src={phoneicon} alt="" className='phoneicon' />
          </div>

        </div>
        <img src={image1} alt="" className="image1" />
        <div >
          <img src={image2} alt="" className="image2" />
        </div>
      </div>

      <div className="middle-container" >
        <img src={middlebackground} alt="" className='middlebackground' />
        <div className="container-text">
          <div className='middleheader'>
            <a href="/">WHO WE ARE</a>
          </div>
          <h1>What Makes Us Different From Other Immigration</h1>
          <h1>Consultants</h1>
        </div>
        <div className="column2">
          <div className="cardes" style={{ backgroundColor: '#031743', color: 'white' }}>
            <div className="card-content">
              <h3 style={{ marginTop: '-30px', marginBottom: '100px' }}>Apply Online Visa</h3>
              <p style={{ color: 'white', textAlign: 'center', marginLeft: '-13px' }}>
                We are reliable immigration consultants to <br /> handle your immigration case.
              </p>
            </div>
          </div>
          <div className="cardes" style={{ backgroundColor: '#3F99F7', color: 'white' }}>
            <div className="card-content">
              <h3 style={{ marginTop: '-30px', marginBottom: '100px' }}>Book an Appointment</h3>
              <p style={{ color: 'white', textAlign: 'center', marginLeft: '-13px' }}>
                To process your visa application with our <br /> experienced registered agents.
              </p>
            </div>
          </div>
          <div className="cardes" style={{ backgroundColor: '#031743', color: 'white' }}>
            <div className="card-content">
              <h3 style={{ marginTop: '-30px', marginBottom: '100px' }}>Immigration Experts</h3>
              <p style={{ color: 'white', textAlign: 'center', marginLeft: '-13px' }}>
                Our goal has been to provide immigration in <br /> all over country and universities.
              </p>
            </div>
          </div>
        </div>
        <div className='box01'>
          <img className="smallcircle1" src={smallcircle} alt="" />
          <img className="number1" src={number1} alt="" />
        </div>
        <div className='box02'>
          <img className="smallcircle2" src={smallcircle} alt="" />
          <img className="number2" src={number2} alt="" />
        </div>
        <div className='box03'>
          <img className="smallcircle3" src={smallcircle} alt="" />
          <img className="number3" src={number3} alt="" />
        </div>

        <div className='box04'>
          <img className="largecircle1" src={largecircle} alt="" />
          <img className="number4" src={number4} alt="" />
        </div>
        <div className='box05'>
          <img className="largecircle2" src={largecircle} alt="" />
          <img className="number4" src={number5} alt="" />
        </div>
        <div className='box06'>
          <img className="largecircle3" src={largecircle} alt="" />
          <img className="number6" src={number6} alt="" />
        </div>

        <div className='box07'>
          <img className="line01" src={line1} alt="" />
          <img className="dot01" src={dot} alt="" />
        </div>
        <div className='box08'>
          <img className="line02" src={line2} alt="" />
          <img className="dot02" src={dot} alt="" />
        </div>
        <div className='box09'>
          <img className="line03" src={line1} alt="" />
          <img className="dot03" src={dot} alt="" />
        </div>
      </div>

      <div>
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

export default Aboutus;
