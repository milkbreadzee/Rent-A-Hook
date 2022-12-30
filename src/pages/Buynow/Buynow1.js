import { element } from 'prop-types';
import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './Buynow.css'
const Buynow1 = () => {
    
  return (
    <div>
        <Header />
    <div className='mainbuy3'>
        
        <div className="buy3">
            <div className="buy31">
                <div className="buy311">
                    <div className="item11">
                        <h3>ITEM</h3>
                        <p id="0">TAIL FISHING REEL</p>
                    </div>
                    <div className="item11">
                        <h3>COST</h3>
                        <p id="1">₹ 20</p>
                    </div>
                    <div className="item11">
                        <h3>QUNATITY</h3>
                        <p id="1">2</p>
                    </div>
                    <div className="item11">
                        <h3>No OF DAYS</h3>
                        <p id="3">10 days</p>
                    </div>
                    <div className="item11">
                        <h3>TOTAL</h3>
                        <p id="4">₹ 200</p>
                    </div>
                    
                </div>
                <div className="buy3buttons">
                    <button className="clearall" onClick={()=>{document.getElementById('0').innerText='';
                            document.getElementById('1').innerText='';
                            document.getElementById('2').innerText='no items selected';
                            document.getElementById('3').innerText='';
                            document.getElementById('4').innerText='';}}>
                    CLEAR ALL</button>
                    {/* <button>UPDATE</button> */}
                </div>
            </div>
            <div className="buy3info">
                <div className="subtotal">
                    <p>SUBTOTAL        ₹ 200 </p>
                    <p>SHIPPING             </p>
                    <p>TOTAL             ₹ 200</p>
                </div>
                <button>PROCCED TO CHECKOUT</button>
            </div>
        </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default Buynow1