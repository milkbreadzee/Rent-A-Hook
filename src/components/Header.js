
import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Header = () => {
  return (
    <div class="main">
        <nav class="navbar">

            <div className="logo">
            <h1>Rent-a-hook </h1>
            </div>
           
            <p>home</p>
            <p>shop</p>
            <p>about</p>
            <p>Pages</p>
            <p>Blog</p>
            <p>Contact</p>

        
        <div class="icons">
        <AiOutlineSearch />
        <BiUser />
        <AiOutlineHeart />
        <AiOutlineShoppingCart />
        </div>
        </nav>
    </div>
  )
}

export default Header