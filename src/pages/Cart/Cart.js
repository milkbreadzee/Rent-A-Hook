import React from 'react'
import Header from '../../components/Header'
import './Cart.css'
const Cart = () => {
  return (
    <div>
        <Header />
        <ul className='cartul'>
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
          <li>Cart Totals</li>
        </ul>
        <div className="cartitem">
          <img src="https://blog.campermate.com.au/wp-content/uploads/sites/3/2019/06/al04QA92oIAJAVB4oqxrvm6jg-1.jpg" alt="" />
          <p> $120.00</p>
          <p> 1 </p>
          <p> $120.00</p>
            
        </div>
        <div className="cartbuttons">
              <div className="coupoun">
                <input type="text" className="coupouninput" placeholder='Coupon Code'/>
              </div>
              <button className="clear">Clear</button>
              
            </div>
        <div className="carttotals">
          <div className="subtotal">Sub Total       $120.00</div>
          <div className="shipping">Shipping        <span>Address</span></div>
          <div className="total">Total      $120.00</div>
        </div>
        <button>Proceed to Checkout</button>

    </div>
  )
}

export default Cart