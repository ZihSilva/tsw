<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutUs.module.css"

function CardItem(props) {
=======
import React from "react";
import "./AboutUs.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
>>>>>>> 9e79e278b096dff8bdcc34dab2bb580010d08adf

function CardItem(props) {
  return (
    <>
<<<<<<< HEAD
      <div className='cards-item'>
        <Link className='cards-item-link' to={props.path}>
          <figure className='cards-item-pic-wrap' data-category={props.label}>
            <img
              className='cards-item-img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{props.text}</h5>
          </div>
        </Link>
      </div>
=======
      <li className="cards-item-main">
        <div className="cards-item-link" to={props.path}>
          <figure className="cards-item-pic-wraps" data-category={props.label}>
            <img className="cards-img" alt="Travel" src={props.src} />
            <div className="social-media">
              <FaLinkedin size={32} color="blue" />
              <FaGithub size={32} color="black" />
            </div> 
            </figure>
          <div className="card-item-description">
            <div className="cards-item-info">
              <h5 className="cards-item-text">{props.text}</h5>
            </div>
            </div>
         
        </div>
      </li>
>>>>>>> 9e79e278b096dff8bdcc34dab2bb580010d08adf
    </>
  );
}

export default CardItem;
