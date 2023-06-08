import React from 'react';
import headerImage  from '../images/AboutusImages/header.png';
import internetIcon from '../images/AboutusImages/internet.png';
import mobileIcon from '../images/AboutusImages/mobile.png';
import emailIcon from '../images/AboutusImages/email.png';
import dashboard from '../images/DashboardImages/dashboard.png';
import image1 from '../images/DashboardImages/image1.png';
import image2 from '../images/DashboardImages/image2.jpeg';
import arrows from '../images/DashboardImages/icons7.png';
import phoneicon from '../images/DashboardImages/phoneicon.png';
import phonecircle from '../images/DashboardImages/phonecircle.png';
import checkbox from '../images/DashboardImages/checkbox.png';
import middlebackground from '../images/DashboardImages/middlebackground.png';
import smallcircle from '../images/DashboardImages/smallcircle.png';
import largecircle from '../images/DashboardImages/largecircle.png';
import number1 from '../images/DashboardImages/01.png';
import number2 from '../images/DashboardImages/02.png';
import number3 from '../images/DashboardImages/03.png';
import number4 from '../images/DashboardImages/04.png';
import number5 from '../images/DashboardImages/05.png';
import number6 from '../images/DashboardImages/06.png';
import line1 from '../images/DashboardImages/line1.png';
import line2 from '../images/DashboardImages/line2.png';
import dot from '../images/DashboardImages/dot.png';
import arrow from '../images/DashboardImages/icons7.png';
import internet from '../images/DashboardImages/internet.png';
import clock from '../images/DashboardImages/Clock.png';
import email from '../images/DashboardImages/Emails.png';
import facebook from '../images/DashboardImages/facebook.png';
import twitter from '../images/DashboardImages/twitter.png';
import google from '../images/DashboardImages/google.png';
import linkedin from '../images/DashboardImages/linkedin.png';
import telegram from '../images/DashboardImages/icons13.png';
import logobox from '../images/DashboardImages/logobox.png';
import line from '../images/DashboardImages/Line 9.png';
import footercard from '../images/DashboardImages/footercard.png';
import emailbutton from '../images/DashboardImages/emailbutton.png';
import card1 from '../images/DashboardImages/card1.png'
import card2 from '../images/DashboardImages/card2.png'
import card6 from '../images/DashboardImages/card6.png'
import card3 from '../images/DashboardImages/card3.png'
import card4 from '../images/DashboardImages/card4.png'
import img1 from '../images/DashboardImages/img1.png'
import img2 from '../images/DashboardImages/img2.png'
import img3 from '../images/DashboardImages/img3.png'
import img4 from '../images/DashboardImages/img4.png'
import reccard from '../images/DashboardImages/reccard.png'
import bluebox from '../images/DashboardImages/blueBox.png'
import flagbox from '../images/DashboardImages/flagbox.png'
import flag1 from '../images/DashboardImages/flag1.png'
import flag2 from '../images/DashboardImages/flag2.png'
import flag3 from '../images/DashboardImages/flag3.png'
import flag4 from '../images/DashboardImages/flag4.png'
import border from '../images/DashboardImages/border.png'
import icon1 from '../images/DashboardImages/icon1.png'
import icon2 from '../images/DashboardImages/icon2.png'
import icon3 from '../images/DashboardImages/icon3.png'
import icon4 from '../images/DashboardImages/icon4.png'
import icon5 from '../images/DashboardImages/icon5.png'
import icon6 from '../images/DashboardImages/icon6.png'
import {Link } from "react-router-dom";

import '../css/Dashboard.css';

export default function Dashboard() {
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

      <div className="dashboard2">
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

      <img src={dashboard} alt="" className="dashboardimg" />
      <img src={card1} alt="" className='card1' />

      <div>
        <h2 className='cardheader1'>OUR COACHING</h2>
        <p className='cardheader2'>Overseas Station Is Your <br />
          Trusted</p>
        <p className='cardheader3'>Instructing Center</p>
      </div>
      <div>
        <p className='cardheader4'>We give master group to make extraordinary Knowledge for migration. <br />
          Our confirmed and solid Immigration Consultant experts can assist you <br />
          with getting a positive choice on your case. We give migration <br />
          benefits in every single diverse region of nations.</p>
      </div>
      <div className='allcard001'>
        <img src={card3} alt="" className='ielts' />
      </div>
      <img src={card6} alt="" className='colorielts' />
      <div className='icon001'>
        <img src={icon1} alt="" />
        <h3>IELTS Coaching</h3>
      </div>

      <div className='allcard002'>
        <img src={card2} alt="" className='pte' />
      </div>
      <div className='icon002'>
        <img src={icon2} alt="" />
        <h3>PTE Coaching</h3>
      </div>

      <div className='allcard003'>
        <img src={card2} alt="" className='toefl' />
      </div>
      <div className='icon003'>
        <img src={icon3} alt="" />
        <h3>PTE Coaching</h3>
      </div>

      <div className='allcard004'>
        <img src={card2} alt="" className='toefl' />
      </div>
      <div className='icon004'>
        <img src={icon4} alt="" />
        <h3>PTE Coaching</h3>
      </div>

      <div className='allcard005'>
        <img src={card2} alt="" className='toefl' />
      </div>
      <div className='icon005'>
        <img src={icon5} alt="" />
        <h3>PTE Coaching</h3>
      </div>

      <div className='allcard006'>
        <img src={card2} alt="" className='toefl' />
      </div>
      <div className='icon006'>
        <img src={icon6} alt="" />
        <h3>PTE Coaching</h3>
      </div>

      <div className='dashboardheader2'>
        <h2 className='cardheader5'>CHOOSE  YOUR  CATEGORY  VISA</h2>
        <p className='cardheader6'>With Overseas Station</p>
        <p className='cardheader7'>Service We Provide.</p>
      </div>

      <div className='imagecards'>
        <div className='imagecard001'>
          <img src={card4} alt="" className='imagecard01' />
          <img src={img1} alt="" className='img01' />
          <h1 className='imgagecardh01'>Permanent Residency </h1>
          <p className='imgagecardp01'>Allow you to travel to nation, stay for <br />
            a period of time and then seek for<br />
            citizenship </p>
        </div>
        <div className='imagecard002'>
          <img src={card4} alt="" className='imagecard02' />
          <img src={img2} alt="" className='img02' />
          <h1 className='imgagecardh02'>Student visa</h1>
          <p className='imgagecardp02'>For the person who wants to study <br />
            internationally </p>
        </div>
        <div className='imagecard003'>
          <img src={card4} alt="" className='imagecard02' />
          <img src={img3} alt="" className='img03' />
          <h1 className='imgagecardh03'>Tourist Visa </h1>
          <p className='imgagecardp03'>For those who wants to visit internally <br />
            places </p>
        </div>
      </div>

      <div className='bigcard'>
        <img src={reccard} alt="" className='reccard' />
        <img src={img4} alt="" className='img4' />
      </div>
      <div className='dashboardheader3'>
        <h2 className='cardheader8'>GET ONLINE</h2>
        <div className='headerprt'>
          <p className='cardheader9'>PTE </p>
          <p className='cardheader10'>Assessment</p>
        </div>
        <p className='cardheader11'>Contact us today by fill up free online visa assessment and we <br />
          will contact you</p>
        <button className='button1'>Discover More 
        <img src={arrow} alt=""/></button>
      </div>

      <div className='bluebox'>
        <img src={bluebox} alt="" className='blueboximage' />
      </div>
      <div className='dashboardheader4'>
        <h2 className='cardheader12'>SELECT COUNTRY</h2>
        <p className='cardheader13'>Choose Your Country</p>
        <p className='cardheader14'>For Immigration.</p>
      </div>

      <div className='readmore1'>
        <div className='flagboxmain1'>
          <div className='flagbox1'>
            <img src={flagbox} alt="" className='boxflag1' />
            <h3 className='flagboxheader1'>United State</h3>
          </div>
          <div>
            <img src={flag1} alt="" className='dashflag1' />
          </div>
          <div className='flagbutton1'>
            <button className="flagbutton">Read More</button>
          </div>
        </div>
        <div className='flagboxmain2'>
          <div className='flagbox2'>
            <img src={flagbox} alt="" className='boxflag2' />
            <h3 className='flagboxheader2'>Australia </h3>
          </div>
          <div>
            <img src={flag2} alt="" className='dashflag2' />
          </div>
          <div className='flagbutton2'>
            <button className="flagbutton">Read More</button>
          </div>
        </div>
      </div>

      <div className='readmore2'>
        <div className='flagboxmain1'>
          <div className='flagbox1'>
            <img src={flagbox} alt="" className='boxflag1' />
            <h3 className='flagboxheader1'>Canada</h3>
          </div>
          <div>
            <img src={flag3} alt="" className='dashflag1' />
          </div>
          <div className='flagbutton1'>
            <button className="flagbutton">Read More</button>
          </div>
        </div>
        <div className='flagboxmain2'>
          <div className='flagbox2'>
            <img src={flagbox} alt="" className='boxflag2' />
            <h3 className='flagboxheader2'>U. K.</h3>
          </div>
          <div>
            <img src={flag4} alt="" className='dashflag2' />
          </div>
          <div className='flagbutton2'>
            <button className="flagbutton">Read More</button>
          </div>
        </div>
      </div>

      <div className='boxborder'>
        <img src={border} alt="" />
        {/* <p>Challenges are  just opportunity in disguise. View all country!</p> */}
        <p>
          <span >Challenges are just opportunity in disguise.</span>
          <span className='span1'>View all country!</span>
        </p>
      </div>

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
            <p className='phonenumber'>+91 9416564107</p>
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
            <a href="/#">WHO WE ARE</a>
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
        <div className='dashbox1'>
          <img className="dashsmallcircle1" src={smallcircle} alt="" />
          <img className="number1" src={number1} alt="" />
        </div>
        <div className='dashbox2'>
          <img className="dashsmallcircle2" src={smallcircle} alt="" />
          <img className="number2" src={number2} alt="" />
        </div>
        <div className='dashbox3'>
          <img className="dashsmallcircle3" src={smallcircle} alt="" />
          <img className="number3" src={number3} alt="" />
        </div>

        <div className='dashbox4'>
          <img className="largecircle1" src={largecircle} alt="" />
          <img className="number4" src={number4} alt="" />
        </div>
        <div className='dashbox5'>
          <img className="largecircle2" src={largecircle} alt="" />
          <img className="number4" src={number5} alt="" />
        </div>
        <div className='dashbox6'>
          <img className="largecircle3" src={largecircle} alt="" />
          <img className="number6" src={number6} alt="" />
        </div>

        <div className='dashbox7'>
          <img className="dashline1" src={line1} alt="" />
          <img className="dashdot1" src={dot} alt="" />
        </div>
        <div className='dashbox8'>
          <img className="dashline2" src={line2} alt="" />
          <img className="dashdot2" src={dot} alt="" />
        </div>
        <div className='dashbox9'>
          <img className="dashline3" src={line1} alt="" />
          <img className="dashdot3" src={dot} alt="" />
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
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />Home</a></li>
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />About Us</a></li>
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />IELTS</a></li>
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />PTE</a></li>
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />FAQ</a></li>
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />Gallery</a></li>
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />Contact</a></li>
                      <li><a href="/#"><img src={arrow} alt="" className='arrow' />PTE Login</a></li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className='heading3'>Contact Us</h3>
                    <ul className='contact'>
                      <li className='contact1'><a href="/#">SCO-111 1ST FLOOR ABC NAGAR</a></li>
                      <li className='contact2' ><a href="/#">abc@gmail.com</a></li>
                      <li className='contact3'><a href="/#">Mon - Sat 9:30 AM - 7 PM</a></li>
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
                  <li><a href="/#">About us <span>|</span></a></li>
                  <li><a href="/#">Privacy Policy <span>|</span></a></li>
                  <li><a href="/#">Customer</a></li>
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
  )
}
