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
import smallflag from '../images/CountriesDetailImages/smallflag.png'
import headerimage from '../images/CountriesDetailImages/headerimage.png';
import headerline from '../images/CountriesDetailImages/headerline.png'
import rectangle1 from '../images/CountriesDetailImages/rectangle1.png'
import rectangle2 from '../images/CountriesDetailImages/rectangle2.png'
import box1 from '../images/CountriesDetailImages/box1.png'
import box3 from '../images/CountriesDetailImages/box3.png'
import flag1 from '../images/CountriesDetailImages/flag1.png'
import flag2 from '../images/CountriesDetailImages/flag2.png'
import flag3 from '../images/CountriesDetailImages/flag3.png'
import flag4 from '../images/CountriesDetailImages/flag4.png'
import flag5 from '../images/CountriesDetailImages/flag5.png'
import flag6 from '../images/CountriesDetailImages/flag6.png'
import image1 from '../images/CountriesDetailImages/Image1.jpeg'
import image2 from '../images/CountriesDetailImages/image 2.jpeg'
import image3 from '../images/CountriesDetailImages/image3.png'
import image4 from '../images/CountriesDetailImages/image4.jpeg'
import image5 from '../images/CountriesDetailImages/image5.jpeg'
import image6 from '../images/CountriesDetailImages/image6.png'
import image7 from '../images/CountriesDetailImages/image7.jpeg'
import image8 from '../images/CountriesDetailImages/image8.jpeg'
import image9 from '../images/CountriesDetailImages/image9.png'
import image10 from '../images/CountriesDetailImages/image10.jpeg'
import image11 from '../images/CountriesDetailImages/image11.jpeg'
import image12 from '../images/CountriesDetailImages/image12.jpeg'
import image13 from '../images/CountriesDetailImages/image13.png'
import internet from '../images/CountriesDetailImages/internet.png';
import line from '../images/AboutusImages/Line 9.png';
import footercard from '../images/CountriesDetailImages/footercard.png';
import {Link } from "react-router-dom";

import '../css/CountriesDetail.css';

const CountriesDetail = () => {
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

      <img src={headerimage} alt="" className="headerimage1" />
      <div className='container01'>
        <h2 className='header1'>
          STUDY IN AUSTRALIA
        </h2>
        <img src={headerline} alt="" className="line1" />
        <p className='text1'>Australia is a modern, democratic country with great <br />
          healthcare, world-class education and geography that’s<br />
          like no place else on earth. Being a safe location with a<br />
          high standard of living, Australia is a wonderful place<br />
          to study and explore, making it the 3rd most popular<br />
          study destination in the world for international <br />
          students.</p>
      </div>
      <div>
        <img src={flag1} alt="" className="flag1" />
      </div>
      <div className='container02'>
        <div>
          <img src={box1} alt="" className="box1" />
        </div>
        <div>
          <img src={image1} alt="" className="image001" />
        </div>
        <div>
          <img src={rectangle1} alt="" className="rectangle001" />
        </div>
      </div>

      <div className='container03'>
        <div>
          <img src={box1} alt="" className="box002" />
        </div>
        <div>
          <img src={image2} alt="" className="image002" />
        </div>
        <div>
          <img src={rectangle2} alt="" className="rectangle2" />
        </div>
      </div>
      <div className='container04'>
        <h2 className='header2'>
          AUSTRALIAN EDUCATION SYSTEM
        </h2>
        <img src={headerline} alt="" className="line2" />
        <p className='text2'>Most universities are located in capital cities that rank in the top 30 most liveable <br />
          cities for students</p>
        <p className='text2'>Over $200,000,000 is spent annually on international scholarships by the Government</p>
        <p className='text2'>Australian universities are rated amongst the best in the world</p>
        <p className='text2'>A huge number of international students choose Australia each year as their <br />
          study destination, owing to its welcoming environment.</p>
      </div>

      <div className='main1' >
        <div>
          <img src={flag2} alt="" className="flag2" />
        </div>

        <div className='container05'>
          <h2 className='header003'>
            WHY STUDY IN CANADA
          </h2>
          <img src={headerline} alt="" className="line3" />
          <p className='text3'>
            Thinking about how to study in Canada from India. Canada is consistently <br />
            ranked as one of the best countries in the world, and it is currently the best<br />
            country in the world in terms of quality of life.
          </p>
          <p className='text3'>
            Study in Canada will provide you with a globally recognised education from some<br />
            of the world's best educators and academics
          </p>
          <p className='text3'>
            International tuition fees, housing, and other living expenses in Canada are<br />
            also affordable as compared to other nations
          </p>
          <p className='text3'>
            Students in Canada have the benefit of being able to work and research at the same time.
          </p>
        </div>
        <div>
          <img src={smallflag} alt="" className="smallflag1" />
        </div>
        <div className='container06'>
          <div>
            <img src={box3} alt="" className="box3" />
          </div>
          <div>
            <img src={image3} alt="" className="image3" />
          </div>
        </div>

        <div>
          <img src={smallflag} alt="" className="smallflag2" />
        </div>
        <div className='container07'>
          <div>
            <img src={box3} alt="" className="box4" />
          </div>
          <div>
            <img src={image4} alt="" className="image4" />
          </div>
        </div>
        <div className='container08'>
          <h2 className='header4'>
            CANADA EDUCATION SYSTEM
          </h2>
          <img src={headerline} alt="" className="line4" />
          <p className='text4'>Canada invests heavily in the educational system. According to the Organization for Economic <br />
            Cooperation and Development, Canada is one of the world's best education performers, ranking in<br />
            the top three countries in terms of public post-secondary education investment per capita (OECD).</p>
          <p className='text4'>Confused about the intakes in Canada? And Unlike a single intake in Indian universities, Canadian colleges and Universities offer three intakes</p>
          <p className='text4'>Fall: A popular intake among Indian students, The Fall intake starts in the month of September.</p>
          <p className='text4'>Winter: Starts in January; it’s best if you miss the September intake</p>
          <p className='text4'>Summer: Available for limited programs and colleges, the Summer intake usually starts around April and May</p>
        </div>

        <div className='container09'>
          <h2 className='header5'>
            CANADA RANKS AS ONE OF THE BEST PLACE
          </h2>
          <img src={headerline} alt="" className="line5" />
          <p className='text5'>
            With quality infrastructure, relatively less crime rates, high life expectancy and lower costs of <br />
            living than other big developed nations, their commitment to culture, diversity and innovation has <br />
            created a fantastic place to live.
          </p>
          <p className='text5'>
            Explore incredible mountains, get close to wildlife and experience a real Canadian winter
          </p>
          <p className='text5'>
            Canada’s multicultural and bilingual society is friendly and welcomes all nationalities
          </p>
          <p className='text5'>
            Living costs in Canada is approximately C$10,000 – C$12,000 per annum which is lower <br />
            than US, UK and Australia
          </p>
          <p className='text5'>
            Outstanding universities having global recognition will lead to a highly-regarded qualification
          </p>
        </div>
        <div className='container10'>
          <div>
            <img src={box3} alt="" className="box5" />
          </div>
          <div>
            <img src={image5} alt="" className="image5" />
          </div>
        </div>
      </div>

      <div className='container11'>
        <div>
          <img src={box1} alt="" className="box006" />
        </div>
        <div>
          <img src={image6} alt="" className="image6" />
        </div>
        <div>
          <img src={rectangle2} alt="" className="rectangle6" />
        </div>
      </div>
      <div>
        <img src={flag3} alt="" className="flag3" />
      </div>
      <div className='container12'>
        <h2 className='header6'>
          WHY STUDY IN UK
        </h2>
        <img src={headerline} alt="" className="line6" />
        <p className='text6'>Are you here to find out why Indian students prefer the UK as a top study destination? If<br />
          so, you have come to the right page to clarify all your queries on why you should study in <br />
          the United Kingdom</p>
        <p className='text6'>he UK is an outstanding place to study because of its excellent educational infrastructure,<br />
          top-notch distinguished teaching methodology, quality science, rich heritage, and vibrant<br />
          culture.</p>
        <p className='text6'>Here are some essential reasons that must be considered</p>
        <p className='text6'>The United Kingdom (UK) is known for its high educational standards, interactive teaching <br />
          methods, top-ranked colleges, high levels of student satisfaction, and these are the benefits<br />
          of studying in UK</p>
      </div>


      <div className='container13'>
        <h2 className='header7'>
          HOW GOOD IS THE UK EDUCATION SYSTEM?
        </h2>
        <img src={headerline} alt="" className="line7" />
        <p className='text7'>Choosing to study in UK from India is a one-of-a-kind experience that offers high-quality <br />
          education and academic excellence where you will get a chance to gain a lot of cultural<br />
          experience and values. Their high-quality courses and indomitable commitment to<br />
          education and performance will help you to excel in your area of expertise, making you<br />
          ready for the right job according to your skillset</p>
        <p className='text7'>The UK offers a variety of Popular courses in humanities, social science, art, design,<br />
          business, technology, science and more!</p>
        <p className='text7'>It takes three years to complete a Bachelor's degree and one year to finish a Masters<br />
          in UK. MSC accounting and finance in UK gives you options to pursue careers as<br />
          actuaries, economists, financial managers, financial advisors, and financial analysts.</p>
        <p className='text7'>There are a multitude of Scholarships in UK for international students to help fund their<br />
          studies in the United Kingdom</p>
        <p className='text7'>The availability of these multiple scholarships in UK for international students from<br />
          both the government and the privately held universities is driving the student growth<br />
          every year.</p>
      </div>
      <div>
        <img src={flag4} alt="" className="flag4" />
      </div>
      <div className='container14'>
        <div>
          <img src={box1} alt="" className="box007" />
        </div>
        <div>
          <img src={image7} alt="" className="image7" />
        </div>
        <div>
          <img src={rectangle2} alt="" className="rectangle7" />
        </div>
      </div>

      <div className='main2' >
        <div className='container15'>
          <img src="" alt="" />
          <h2 className='header008'>
            WHY STUDY IN USA
          </h2>
          <img src={headerline} alt="" className="line8" />
          <p className='text8'>The United States of America is home to the world's largest number of foreign <br />
            students. Many Indian students choose to study in US for a variety of reasons,<br />
            including quality education, a creative program, a multicultural atmosphere, and<br />
            numerous opportunities.</p>
          <p className='text8'>America is one of the most powerful nations in the world, it is the preferred<br />
            education destination for all international students. Studying in the United States is<br />
            always worthwhile because it provides a variety of career opportunities and would<br />
            be a perfect choice for Indian students who are always struggling to obtain the<br />
            best education possible</p>
          <p className='text8'>In the United States, there are four (4) institutions each offering varied study<br />
            choices and levels of affordability to suit every student.</p>
          <p className='text8'>• State Colleges / Universities</p>
          <p className='text8'>• Private Colleges / Universities</p>
          <p className='text8'>• Community Colleges</p>
          <p className='text8'>• Institutes of Technology</p>

        </div>
        <div className='container16'>
          <div>
            <img src={box3} alt="" className="box8" />
          </div>
          <div>
            <img src={image8} alt="" className="image8" />
          </div>
        </div>


        <div className='container17'>
          <div>
            <img src={box3} alt="" className="box009" />
          </div>
          <div>
            <img src={image9} alt="" className="image9" />
          </div>
        </div>
        <div className='container18'>
          <h2 className='header9'>
            HOW IS THE AMERICAN EDUCATION SYSTEM?
          </h2>
          <img src={headerline} alt="" className="line9" />
          <p className='text9'>The versatility provided by the number and variety of institution types<br />
            embodied by the US higher education system is one of its most appealing<br />
            features.</p>
          <p className='text9'>With over 4,500 universities and colleges in the United States, the US education system<br />
            provides ten times the number of tertiary-level study opportunities as any other nation,<br />
            making it much easier to pursue your career goals.
          </p>
          <p className='text9'>Here's a description of the United States' educational system
          </p>
          <p className='text9'>Core classes, major, minor, and electives are all part of an undergraduate degree. <br />
            Freshman, sophomore, junior, and senior are the four years
          </p>
        </div>
      </div>


      <div className='container19'>
        <h2 className='header10'>
          WHY STUDY IN NEW ZEALAND
        </h2>
        <img src={headerline} alt="" className="line10" />
        <p className='text10'>Studying in New Zealand is a fantastic idea for a variety of reasons. The amazing <br />
          Maori people, adventurous explorers from all over the world, and even the odd <br />
          hobbit call this place home</p>
        <p className='text10'>New Zealand has a lot to offer, including an excellent education system, globally<br />
          renowned qualifications, a diverse range of study options, and an unrivalled quality<br />
          of life.</p>
        <p className='text10'>When you study here, you should find a warm and supportive atmosphere as<br />
          well as an excellent support structure for international students. According<br />
          to the 2018 Global Peace Index, New Zealand is the world's second safest<br />
          nation, prompting students from all over the world to seek out opportunities<br />
          to study in New Zealand for Indian students</p>
      </div>
      <div className='container20'>
        <div>
          <img src={box3} alt="" className="box10" />
        </div>
        <div>
          <img src={image10} alt="" className="image10" />
        </div>
      </div>

      <div>
        <img src={flag5} alt="" className="flag5" />
      </div>

      <div className='container21'>
        <h2 className='header11'>
          EDUCATION SYSTEM IN NEW ZEALAND
        </h2>
        <img src={headerline} alt="" className="line11" />

        <p className='text11'>Study in New Zealand to take the most in-demand lessons. Numerous <br />
          universities in New Zealand for International students are in science and<br />
          innovation. Academic competence, qualified faculty, widely renowned<br />
          credentials, a brilliant teaching style, and a plethora of study opportunities,<br />
          New Zealand's education system will provide you with an education unlike any<br />
          other. Learning here has a multicultural bent to it, preparing students for work<br />
          all over the world. For Indian scholars, studying in New Zealand is highly<br />
          regarded owing to its high-quality education and desirable lifestyle.</p>
        <p className='text11'>To pursue MS in New Zealand, the universities have set eligibility criteria, as<br />
          per which a student must have: an equivalent diploma or certificate in the<br />
          relevant field or relevant undergraduate degree from a recognized university.</p>
      </div>
      <div className='container22'>
        <div>
          <img src={box3} alt="" className="box11" />
        </div>
        <div>
          <img src={image11} alt="" className="image11" />
        </div>
      </div>

      <div className='container23'>
        <div>
          <img src={box1} alt="" className="box12" />
        </div>
        <div>
          <img src={image12} alt="" className="image12" />
        </div>
        <div>
          <img src={rectangle2} alt="" className="rectangle12" />
        </div>
      </div>
      <div className='container24'>
        <h2 className='header12'>
          WHY STUDY IN GERMANY
        </h2>
        <img src={headerline} alt="" className="line12" />
        <p className='text12'>Each year more than 25,000 international students choose to study in <br />
          Germany and undertake research activities. They are attracted by <br />
          international study programs and excellent research opportunities. In <br />
          addition, study in Germany for Indian students allows them to be part of <br />
          an international, highly qualified community.</p>
        <p className='text12'>Universities are state-funded; therefore, generally low tuition fees are <br />
          charged. Many institutions of higher education offer international students <br />
          in Germany the opportunity to do internships or carry out research in<br />
          industry. Germany lies in the heart of Europe- which is an excellent starting<br />
          point to discover other famous European destinations. You can be in<br />
          London, Paris in no time.</p>

      </div>

      <div className='container25'>
        <h2 className='header13'>
          TOP UNIVERSITIES
        </h2>
        <img src={headerline} alt="" className="line13" />
        <p className='text13'>• ISL Sprachsule</p>
        <p className='text13'>• IUBH University of Applied Sciences</p>
        <p className='text13'>• Munich Business School</p>
        <p className='text13'>• Rheinland Privatschule</p>
        <p className='text13'>• Schiller International university</p>
        <p className='text13'>• Sprachen Berlin</p>
        <p className='text13'>• University of Applied Sciences Europe</p>
      </div>
      <div>
        <img src={flag6} alt="" className="flag6" />
      </div>
      <div className='container26'>
        <div>
          <img src={box1} alt="" className="box13" />
        </div>
        <div>
          <img src={image13} alt="" className="image13" />
        </div>
        <div>
          <img src={rectangle1} alt="" className="rectangle13" />
        </div>
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

export default CountriesDetail;