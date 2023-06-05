import React, {useEffect} from 'react';
import './footer.scss';
import video2 from '../../Assests/video(2).mp4';
import {FiSend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer=()=> {

  
  useEffect(()=>{
    Aos.init({duration:2000})
    }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'> 
      <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
        <div data-aos="fade-up" className='text'>
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
             SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

       <div className='footerCard flex'>
       <div className='footerIntro flex'>
       <div className="logoDiv">
        <a href='#' className='logo flex'>
          <MdOutlineTravelExplore className='icon'/>
          Travel with us! </a>
       </div>

       <div data-aos="fade-up" className="footerParagraph">

Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab
Travel witj us
About Us, Investor Relations, Careers, MMT Foundation, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us
ABOUT THE SITE
Customer Support, Payment Security, Privacy Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home, Report Security Issues
       </div>

       <div data-aos="fade-up"className="footerSocials flex">
        <AiOutlineTwitter className='icon'/>
        <AiOutlineYoutube className='icon'/>
        <AiOutlineInstagram className='icon'/>
        <FaTripadvisor className='icon'/>
       </div>
       </div>

       <div className="footerLinks grid">


       <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
        <span className='groupTitle'>OUR SERVICES</span>

        <li className="footerList flex">
         Services <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
         Insurance <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
       Agency <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
       Tourism <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
         Payment <FiChevronRight className='icon'/>
        </li>
        </div>



       <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
        <span className='groupTitle'>PARTNERS</span>

        <li className="footerList flex">
         Bookings <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
         Rentcars <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
       HotelWorld <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
        Trivago <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
         TripAdvisor <FiChevronRight className='icon'/>
        </li>
        </div>



        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
        <span className='groupTitle'>LAST MINUTES</span>

        <li className="footerList flex">
         London <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
        California <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
       Indonesia <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
        Europe <FiChevronRight className='icon'/>
        </li>

        <li className="footerList flex">
         Oceania <FiChevronRight className='icon'/>
        </li>
        </div>
       </div>

       <div className="footerDiv flex">
       <small>BEST WEBSITE THEME</small>
       <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
       </div>
       </div>
      </div>
    </section>
  )
}
export default Footer