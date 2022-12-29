
import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import RoutesURL from '../RoutesURL';


const Header = () => {
  return (
    <div class="main">
        <nav class="navbar">

            <div className="logo">
            <h1 className='name'>Rent-a-hook </h1>
            </div>

            
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <Link to="/shop" style={{ textDecoration: 'none' }}>Shop</Link>
            <p>Blog</p>
            <p>Contact</p>

        
        <div class="icons">
        <button><AiOutlineSearch size={24}/></button>
        <button><BiUser size={24}/></button>
        <button><AiOutlineHeart size={24}/></button>
        <button><AiOutlineShoppingCart size={24}/></button>
        </div>
        </nav>
    </div>
  )
}

export default Header