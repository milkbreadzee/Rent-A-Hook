
import React from 'react'
import './Header.css'
import { IconButton } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Header = () => {
  return (
    <div class="main">
        <nav class="navbar">

            <div className="logo">
            <h1 className='name'>Rent-a-hook </h1>
            </div>
           
            <p>home</p>
            <p>shop</p>
            <p>about</p>
            <p>Pages</p>
            <p>Blog</p>
            <p>Contact</p>

        
        <div class="icons">
        {/* <IconButton className='searchicon' icon={<SearchIcon size={32} />}> </IconButton> */}
        <AiOutlineSearch size={24}/>
        <BiUser size={24}/>
        <AiOutlineHeart size={24}/>
        <AiOutlineShoppingCart size={24}/>
        </div>
        </nav>
    </div>
  )
}

export default Header