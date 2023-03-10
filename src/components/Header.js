
import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import RoutesURL from '../RoutesURL';
import {FiLogOut} from "react-icons/fi"


const Header = () => {
  return (
    <div className="main">
        <nav className="navbar">

            <div className="logo">
              <div className="logo1">
                
              </div>
            <h1 className='name'>Rent-a-hook </h1>
            </div>

            
            <Link to="/" style={{ textDecoration: 'none', }}>Home</Link>
            <Link to="/shop" style={{ textDecoration: 'none' }}>Shop</Link>
            <p>Blog</p>
            <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>

        
        <div className="icons">
        <button><AiOutlineSearch size={24}/></button>
        <button><BiUser size={24}/></button>
        <button><AiOutlineHeart size={24}/></button>
        <Link to="/cart"><button><AiOutlineShoppingCart size={24}/></button></Link>
        <Link to="/login"><button><FiLogOut size={24}/></button></Link>
        </div>
        </nav>
    </div>
  )
}

export default Header