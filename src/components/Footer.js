import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineInstagram } from 'react-icons/ai';


import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import './Footer.css'


const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="boo1">
              <h3>
                Rent-A-Hook
              </h3>
              <div className='Links-footer'>
                <Link to="/" style={{ textDecoration: 'none',  color: 'black'}}>
                  Home
                </Link>  
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                  About
                </Link>  
                <Link to="/shop" style={{ textDecoration: 'none',  color: 'black'}}>
                  Shop
                </Link>  
                <Link to="/" style={{ textDecoration: 'none',  color: 'black'}}>
                  Blog
                </Link>  
              </div>
            </div>
            <div className="boo2">
              <p>
                Socials
              </p>
              <div  className="footer-icons">
                <AiOutlineInstagram size={30}/>
                <AiFillFacebook size={30}/>
                <AiOutlineTwitter size={30}/>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer