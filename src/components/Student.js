import React from 'react';
import headerImage from '../images/AboutusImages/header.png';
import internetIcon  from '../images/AboutusImages/internet.png';
import mobileIcon from '../images/AboutusImages/mobile.png';
import emailIcon from '../images/AboutusImages/email.png';
import visa from '../images/StudentImages/visa.jpeg';
import visabackground from '../images/StudentImages/visabackground.png';
import visabackground1 from '../images/StudentImages/visabackground1.png';
import visaimage1 from '../images/StudentImages/visaimage1.png'
import visaimage2 from '../images/StudentImages/visaimage2.png'
import visaimage3 from '../images/StudentImages/visaimage3.png'
import rectangle from '../images/StudentImages/rectangle.png';
import arrow from '../images/StudentImages/icons7.png';
import internet from '../images/StudentImages/internet.png';
import clock from '../images/StudentImages/Clock.png';
import email from '../images/StudentImages/Emails.png';
import facebook from '../images/StudentImages/facebook.png';
import twitter from '../images/StudentImages/twitter.png';
import google from '../images/StudentImages/google.png';
import linkedin from '../images/StudentImages/linkedin.png';
import telegram from '../images/StudentImages/icons13.png';
import logobox from '../images/StudentImages/logobox.png';
import lines from '../images/StudentImages/Line 9.png';
import footercard from '../images/StudentImages/footercard.png';
import emailbutton from '../images/StudentImages/emailbutton.png';
import {Link } from "react-router-dom";

import '../css/Student.css'

const Student = () => {
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

      <div className="visacontainer02">
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

      <img src={visa} alt="" className="visa" />
      <img src={visabackground} alt="" className="visabackground" />
      <div >
        <h1 className='visaheader'>Immigration Consultancy & Visa Services </h1>
      </div>
      <img src={visabackground1} alt="" className="visabackground1" />
      <div className='visatext'>
        <p>Need a <br />
          Consultation?</p>
      </div>
      <div className='visabutton'>
        <button className='visabtn1'>Request a Callback</button>
        <button className='visabtn2'>Contact Us</button>
      </div>

      <div >
        <h1 className='visaheader1'>STUDENT VISAS FOR STUDY ABROAD</h1>
      </div>
      <div className='visacontainer1'>
        <p className='visatext1'>Student Visas, as the name suggests are visas issued to applicants whose primary purpose of visit to a foreign country is for <br />
          the pursuit of education . Every country is governed by its Immigration Laws. <br />
          These could vary in terms of the requirements of documents to the different proof of funds acceptable to what all the visas<br />
          would let you do apart from studying in the country. Also, some broad commonalities are visible in all student visa applications.</p>
      </div>

      <div >
        <h1 className='visaheader2'>WHAT IS A VISA?</h1>
      </div>
      <div className='visacontainer2'>
        <p className='visatext2'>Simply put, a visa is an official travel document. The visa which is usually stamped or glued onto the passport of the bearer allows him to <br />
          legally enter a foreign country.</p>
        <p className='visatext2'>A visa can be of multiple types. To start with, there is a Tourist Visa for people looking to visit a country for tourism, there is a Student Visa for <br />
          students looking to travel to a foreign country to pursue education and so on.</p>
      </div>
      <div>
        <img src={rectangle} alt="" className='rectangle1' />
      </div>

      <div>
        <img src={visaimage1} alt="" className='visaimage1' />
      </div>
      <div >
        <h1 className='visaheader3'>WHAT TYPE OF VISA DO I NEED?</h1>
      </div>

      <div className='visacontainer3'>
        <p className='visatext3'>Student Visas are often classified based on two broad distinction points</p>
        <p className='visatext3'>Student Visa Classification Based on Program Duration</p>
        <p className='visatext3'>Depending on the length of tenure of the programme the applicant <br />
          is planning to undertake, the countries often divide the student <br />
          visa into Short Term Student Visas or Long-term Student Visas <br />
          Often, short-term visas are given to students who plan to take a short <br />
          course of a language or a diploma certificate course and the entire <br />
          duration is often limited to 90 days (3 months). <br />
          Long-term visas, on the other hand, are given to students who are <br />
          planning to take up degree courses extending beyond the 3 months. <br />
        </p>
        <p className='visatext3'>Student Visa Classification Based on Type of Programme/ Student</p>
        <p className='visatext3'>Irrespective of the duration of the course, some countries classify student <br />
          visas basis the type of student. This could be the level of degree applied <br />
          for (undergraduate, graduate or doctoral), exchange student or student <br />
          applying for a vocational/ diploma course.</p>
        <p className='visatext3'>Broadly speaking, as these visas also depend on the type, of course, the <br />
          student is applying for, these are somewhat linked to tenure. However, in <br />
          these categories, the first point of distinction is not how long the <br />
          programme would be for. If you are, say, for instance, an exchange <br />
          student, you could be going for 3 months or 3 years, the category would <br />
          still be based on the type of student and not the tenure.</p>
      </div>

      <div >
        <h1 className='visaheader4'>WHEN SHOULD I APPLY FOR A STUDENT VISA?</h1>
      </div>
      <div className='visacontainer004'>
        <p className='visatext4'>Studying abroad requires meticulous planning to say the least. Students are always advised to plan their admission/ application <br />
          process keeping in mind university deadlines and working backwards.</p>
        <p className='visatext4'>Students are required to appear for English ability test as per the university policy and also have required documents in place for the <br />
          smooth processing of their application.  Hence, students are always advised to apply 1-3 months in advance to avoid any last-minute rush</p>
      </div>

      <div >
        <h1 className='visaheader5'>TOURIST VISA</h1>
      </div>
      <div className='visacontainer5'>
        <p className='visatext5'>A tourist visa is an official document or stamp that authorizes an individual to enter a <br />
          foreign country for the purpose of leisure and tourism.</p>
        <p className='visatext5'>Depending on the country, they may also be referred to as “travel visas”, “visitor visas”, <br />
          or “temporary stay visas”.</p>
        <p className='visatext5'>Tourist visas typically allow the holder to stay in the host country for a short period. This <br />
          can range from several days to several months.</p>
        <p className='visatext5'>In some cases, a short-stay visa for a particular country may permit multiple purposes <br />
          in addition to tourism, such as business.</p>
      </div>

      <div>
        <img src={visaimage2} alt="" className='visaimage2' />
      </div>

      <div >
        <h1 className='visaheader6'>TOURIST VISA</h1>
      </div>
      <div className='visacontainer6'>
        <p className='visatext6'>Many nations have now made it possible to apply for a tourist Visa online. This is the quickest and most straightforward way to obtain one.</p>
        <p className='visatext6'>Travelers simply fill in a form using a computer or mobile device and submit the required information and supporting documents in a digital <br />
          format. This makes it possible to complete a tourist visa application from one’s own home, office, or anywhere else with an internet <br />
          connection.</p>
      </div>
      <div>
        <img src={visaimage3} alt="" className='visaimage3' />
      </div>

      <div className='visacontainer7'>
        <p className='visatext7'>Every country has its own Visa policy. This outlines the rules for which foreign nationals <br />
          must have a tourist visa to enter and the requirements for applying.</p>
        <p className='visatext7'>In some cases, citizens of some countries may not be able to apply for a tourist visa <br />
          online. In this situation, it is usually necessary to go to an embassy or consulate  to <br />
          apply in person.</p>
        <p className='visatext7'>Many sovereign states also have a list of visa-exempt nationalities who may visit for a <br />
          certain length of time without having to apply for a tourist visa.</p>
        <p className='visatext7'>To take advantage of this visa exemption, it may be necessary to register online to <br />
          obtain a waiver or travel authorization. These are not technically visas, but the <br />
          application process is usually similar to electronic visas (e-Visas). They may also permit <br />
          visits for other purposes, such as business or to receive medical treatment.</p>
      </div>

      <div>
        <img src={rectangle} alt="" className='rectangle2' />
      </div>

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
          <img src={lines} alt="" className='line' />
        </div>
      </footer>

    </>
  );
};

export default Student;