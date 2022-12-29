import React from 'react'
import "./NewProduct.css"
const NewProduct = () => {
  return (
    <div>
        <h1>New Product</h1>
        <div className="choices">
            <p>All</p>
            <p>Landing Net</p>
            <p>Fishing Reels</p>
            <p>Bait</p>
            <p>Rods 1</p>
        </div>
        <div className="products"></div>
    </div>
  )
}

export default NewProduct