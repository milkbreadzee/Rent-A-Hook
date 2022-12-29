import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="boo1">
              <h3>
                Rent-A-Hook
              </h3>
              <div>
                <Link to="/">
                  Home
                </Link>  
              </div>
            </div>
            <div className="boo2">
              
            </div>
        </div>
    </div>
    
  )
}

export default Footer