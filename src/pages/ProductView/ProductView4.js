import React from 'react'
import Header from '../../components/Header'
import './ProductView4.css'
import Footer from '../../components/Footer'


const ProductView4 = () => {
   
  return (
    <div>
        <Header />
        <div className = "product-box">
            <div className="imgcar4">
            
            </div>
            <div className="info">
                <h2>
                Fishing Net
                </h2>
                <h3>
                ₹5/day
                </h3>
            
                <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum. Vivamus vel molestie nisipsum. Vivamus vel moles
                </p>
                <button>Buy Now</button>
            </div>
        </div>
            <Footer />        
    </div>    
  )
}

export default ProductView4