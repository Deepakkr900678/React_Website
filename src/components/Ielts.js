import React from 'react';
import headerImage from '../images/AboutusImages/header.png';
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
import ieltspte from '../images/IeltsImages/ieltspte.jpeg';
import image1 from '../images/IeltsImages/image1.png';
import image2 from '../images/IeltsImages/image2.png';
import image3 from '../images/IeltsImages/image3.png';
import image4 from '../images/IeltsImages/image4.png';
import image5 from '../images/IeltsImages/image5.png';
import image6 from '../images/IeltsImages/image6.png';
import image7 from '../images/IeltsImages/image7.png';
import image8 from '../images/IeltsImages/image8.png';
import rectangle2 from '../images/IeltsImages/rectangle2.png';
import rectangle from '../images/IeltsImages/rectangle.png';
import linecolumn from '../images/IeltsImages/linecolumn.png';
import linerow from '../images/IeltsImages/linerow.png';
import internet from '../images/AboutusImages/internet.png';
import line from '../images/AboutusImages/Line 9.png';
import footercard from '../images/IeltsImages/footercard.png';
import {Link } from "react-router-dom";

import '../css/Ielts.css'

const Ielts = () => {
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
      <img src={ieltspte} alt="" className="ieltspte" />
      <div >
        <h1 className='header001'>WHY IELTS</h1>
      </div>
      <div className='container1'>
        <p className='text001'>The IELTS is an internationally-owned and well-known direct evaluation of the <br />
          highest quality and integrity of the English language that is offered globally. As<br />
          an entrance requirement, universities request IELTS test reports.</p>
        <p className='text001'>The IELTS language exam is the most frequently acknowledged and approved,<br />
          and 7.0 is a typically acceptable IELTS requirement (score). Depending on your<br />
          courses and institutes, the Minimum IELTS Score Required for one course ranges<br />
          from 6.0 to 7.5.</p>
        <p className='text001'>To get the IELTS test report form , all applicants must fill out four modules -<br />
          Listening, Read, Writing and Speaking. In Listening, Writing and Speaking,<br />
          candidates are tested. The listening and speaking modules of all applicants are<br />
          the same.</p>
      </div>
      <div>
        <img src={rectangle} alt="" className='rectangle1' />
      </div>
      <div>
        <img src={image1} alt="" className='image01' />
      </div>
      <div>
        <img src={linecolumn} alt="" className='linecolumn1' />
      </div>
      <div>
        <img src={linerow} alt="" className='linerow1' />
      </div>
      <div>
        <img src={image2} alt="" className='image02' />
      </div>
      <div>
        <img src={linecolumn} alt="" className='linecolumn2' />
      </div>
      <div>
        <img src={linerow} alt="" className='linerow2' />
      </div>
      <div >
        <h1 className='header002'>WHAT IS IELTS?</h1>
      </div>
      <div className='container001'>
        <p className='text002'>The International English Language Testing System (IELTS) is a <br />
          standardized and widely recognized English language assessment test<br />
          for international education and global migration</p>
        <p className='text002'>It evaluates the English language proficiency of non-native English<br />
          speakers, who wish to study in or migrate to countries, where English<br />
          is the language of communication</p>
        <p className='text002'>It is designed to evaluate your English skills in reading, writing, listening,<br />
          and speaking and your effectiveness in using the language to study, work<br />
          and live in an English-speaking country.</p>
      </div>
      <div >
        <h1 className='header3'>WHAT IS THE IMPORTANCE OF IELTS?</h1>
      </div>
      <div className='container003'>
        <p className='text003'>IELTS is one of the most trusted English language tests across the globe with more <br />
          than 10,000 organizations recognizing it internationally.</p>
        <p className='text003'>The IELTS certification is recognized by the UK, USA, Australia, Canada, New Zealand,<br />
          Singapore, Europe and 140 more countries across the globe</p>
        <p className='text003'>The certification is accepted by academic institutions, companies, professional bodies<br />
          and government organizations.</p>
        <p className='text003'>The test is considered the standard for English language testing and their<br />
          certification is recognized for both academic and immigration purposes. This test<br />
          assesses the English language skills of a candidate by testing their reading,<br />
          writing, listening and speaking skills. Tests are available throughout the year in<br />
          over 900 centres around the world.</p>
      </div>
      <div>
        <img src={image3} alt="" className='image03' />
      </div>
      <div>
        <img src={linecolumn} alt="" className='linecolumn3' />
      </div>
      <div>
        <img src={linerow} alt="" className='linerow3' />
      </div>

      <div className='header004'>
        <h1 >TYPES OF IELTS EXAM</h1>
        <img src={line} alt="" className='line001' />
      </div>
      <div className='exam1'>
        <h2>
          IELTS  ACADEMIC TEST
        </h2>
        <p className='text004'>
          The IELTS Academic is an assessment to test if your English language skills meet international academic proficiency. <br />
          This test is best suited for international students who wish to pursue their undergraduate or postgraduate degrees in an <br />
          English-speaking environment and for those planning to move for professional registration.
        </p>
      </div>
      <div className='exam2'>
        <h2>
          IELTS GENERAL TEST
        </h2>
        <p className='text004'>
          The IELTS Academic is an assessment to test if your English language skills meet international academic proficiency. <br />
          This test is best suited for international students who wish to pursue their undergraduate or postgraduate degrees in an <br />
          English-speaking environment and for those planning to move for professional registration.
        </p>
      </div>
      <div className='exam3'>
        <h2>
          IELTS FOR UKVI
        </h2>
        <p className='text004'>
          IELTS UKVI is the same as IELTS. The IELTS for UKVI is a government-approved Secure English Language Test <br />
          (SLET). This certification can be used to prove the candidate's English language abilities for the UK Visa and <br />
          Immigration (UKVI) application purposes.
        </p>
      </div>
      <div>
        <img src={rectangle} alt="" className='rectangle002' />
      </div>
      <div>
        <img src={rectangle2} alt="" className='rectangle3' />
      </div>
      <div>
        <img src={image4} alt="" className='image04' />
      </div>
      <div>
        <img src={rectangle2} alt="" className='rectangle4' />
      </div>
      <div className='exam4'>
        <h2>
          WHY PTE
        </h2>
        <p className='text005'>
          You may bring you to Canada from PTE Academic. Most institutions and colleges in Canada recognise PTE Academic. This is the finest way to <br />
          assist you get your Acceptance Letter from a designated Canadian learning institute.
        </p>
        <p className='text005'>
          The PTE test does not get a score. A PTE Score of 50-63 is deemed adequate, however, in the overall range of 10-90. It is anticipated to score in <br />
          the range of 65-75 or above for higher and regular university selections.
        </p>
      </div>
      <div >
        <h1 className='header005'>WHAT IS PTE EXAM?</h1>
      </div>
      <div className='container5'>
        <p className='text005'>Pearson Tests of English (PTE) Academic is an English language <br />
          test for international study and immigration.</p>
        <p className='text005'> The PTE exam has two categories:</p>
        <p className='text005'>
          1) PTE Academic <br />
          2) PTE Home</p>
      </div>
      <div>
        <img src={image5} alt="" className='image05' />
      </div>
      <div>
        <img src={linecolumn} alt="" className='linecolumn5' />
      </div>
      <div>
        <img src={linerow} alt="" className='linerow5' />
      </div>
      <div>
        <img src={image6} alt="" className='image06' />
      </div>
      <div>
        <img src={linecolumn} alt="" className='linecolumn6' />
      </div>
      <div>
        <img src={linerow} alt="" className='linerow6' />
      </div>
      <div >
        <h1 className='header006'>WHY TAKE THE PTE ACADEMIC EXAM?</h1>
      </div>
      <div className='container006'>
        <p className='text006'>PTE Academic is a fully computerized, online English language <br />
          test for international education and immigration purposes.<br />
          This test is powered by AI technology and unlike the<br />
          conventional grading system, the PTE grading is completely<br />
          objective and free from human biases.</p>

      </div>

      <div >
        <h1 className='header007'>TYPES OF PTE EXAM</h1>
      </div>
      <div className='container007'>
        <p className='text007'>There are two categories under the PTE Academic exam:</p>
        <p className='text007'>• PTE Academic Exam</p>
        <p className='text007'>• PTE Academic UKVI</p>
      </div>
      <div>
        <img src={image7} alt="" className='image07' />
      </div>
      <div>
        <img src={linecolumn} alt="" className='linecolumn7' />
      </div>
      <div>
        <img src={linerow} alt="" className='linerow7' />
      </div>

      <div className='exam5'>
        <h2>
          PTE ACADEMIC EXAM
        </h2>
        <p className='text006'>
          PTE Academic assesses the candidates' skills in speaking, listening, reading and writing. The entire duration of the test lasts up to 3 hours. <br />
          This test is accepted by over a thousand universities around the globe, including Harvard Business School, INSEAD and Yale. In Australia and <br />
          New Zealand, PTE Academic is accepted even for visa purposes.
        </p>

      </div> <div className='exam6'>
        <h2>
          PTE ACADEMIC UKVI
        </h2>
        <p className='text007'>
          The PTE Academic UKVI is specific to the UK. This is a Secure English Language Test (SELT) to be eligible for UK visas. Anyone who wishes <br />
          to work, study or live in the UK can take up this test.
        </p>
      </div>

      <div >
        <h2 className='header8'>PTE EXAM FEE</h2>
      </div>
      <div className='container008'>
        <p className='text008'>1. The PTE Academic exam fee in India is USD 170</p>
        <p className='text008'>2. The PTE Academic UKVI exam fee in India is USD 180</p>
      </div>
      <div>
        <img src={rectangle} alt="" className='rectangle8' />
      </div>
      <div>
        <img src={image8} alt="" className='image08' />
      </div>
      <div>
        <img src={linecolumn} alt="" className='linecolumn8' />
      </div>
      <div>
        <img src={linerow} alt="" className='linerow8' />
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

    </>
  );
};

export default Ielts;