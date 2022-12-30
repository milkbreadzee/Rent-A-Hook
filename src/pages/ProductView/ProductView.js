import React from 'react'
import Header from '../../components/Header'
import './ProductView.css'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


const ProductView = () => {
   
  return (
    <div>
        <Header />
        <div className = "product-box">
            <div className="imgcar">
            
            </div>
            <div className="info">
                <h2>
                Tail fishing Reel
                </h2>
                <h3>
                  ₹20/day
                </h3>
            
                <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum. Vivamus vel molestie nisipsum. Vivamus vel moles
                </p>
                <Link to="/buy1">
                <button>Buy Now</button>
                </Link>
            </div>
        </div>
            <Footer />        
    </div>    
  )
}

export default ProductView