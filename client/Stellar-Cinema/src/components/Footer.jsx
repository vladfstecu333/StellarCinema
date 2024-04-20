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
        
      <span className='infos'>
        <a href='https://maps.app.goo.gl/FmoTvDAc2M7h8zL88'>
          parter, Șoseaua Alexandriei 3-5, București 052034
        </a>
        </span>
      <span className='infos'>Telefon: 0722 și-ale tale buze moi</span>

    </div>
  )
}

export default Footer
