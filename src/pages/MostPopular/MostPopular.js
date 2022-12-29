import React from 'react'
import './MostPopular.css'
const MostPopular = () => {
  return (
    <div>
        <div className="mostpop">
            <h3>Most Popular</h3>
        </div>
        <div className="popfilter">
            <p>Landing Net</p>
            <p>Fishing Reels</p>
            <p>Baitcasing</p>
            <p>Pliers</p>
        </div>
        <div className="popcont">
            <div className="pop1">
                <img src="https://psdtowpwork.com/html/fisto/assets/images/product/1.png" alt="" />
                <div className="poptexts">
                    Name<br />
                    price
                </div>
            </div>
            <div className="pop1">
                <img src="https://psdtowpwork.com/html/fisto/assets/images/product/1.png" alt="" />
                <div className="poptexts">
                    Name<br />
                    price
                </div>
            </div>
            <div className="pop1">
                <img src="https://psdtowpwork.com/html/fisto/assets/images/product/1.png" alt="" />
                <div className="poptexts">
                    Name<br />
                    price
                </div>
            </div>
            <div className="pop1">
                <img src="https://psdtowpwork.com/html/fisto/assets/images/product/1.png" alt="" />
                <div className="poptexts">
                    Name<br />
                    price
                </div>
            </div>
        </div>
    </div>
  )
}

export default MostPopular