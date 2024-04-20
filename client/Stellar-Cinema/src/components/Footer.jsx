import React from 'react';
import "./Footer.css"
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className='infos social'>
        <FaYoutube />
        <FaInstagram/>
        <FaTiktok/>
        <FaThreads/>
      </div>
        
      <span className='infos'>parter, Șoseaua Alexandriei 3-5, București 052034</span>
      <span className='infos'>Telefon: 0722 si-ale tale buze moi</span>

    </div>
  )
}

export default Footer
