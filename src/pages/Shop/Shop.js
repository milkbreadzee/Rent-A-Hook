import React from 'react'
import Header from '../../components/Header';
import './Shop.css'
const Shop = () => {
    const [value, setValue] = React.useState('Default Sorting');

    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };
  return (
    
    <div>
        
        <div className="products">
            <h3 className='pro'>Product</h3>
            {/* <p className='texthome'>Home</p> */}
        </div>
        <div className='gawkhead'> <p> Showing all 12 results</p>
        <div className="sorting">
            <select className='dropdownboo' value={value} onChange={handleChange}>
                <option value="Default Sorting">Default Sorting</option>
                <option value="Prize: High to Low">Prize: High to Low</option>
                <option value="Prize: Low to High">Prize: Low to High</option>
            </select>
        </div>
        </div>
        <div className="items">

            <div className="item1">
                <img src="https://m.media-amazon.com/images/I/71aEvZbodJL._SX425_.jpg" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://contents.mediadecathlon.com/p51462/0d68afc1dbbf70f6199c170956cef133/p51462.jpg" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://rukminim1.flixcart.com/image/416/416/juk4gi80/fishing-rod/k/2/v/180cm-6-feet-auf-original-imaffmp9m5yfswce.jpeg?q=70" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://5.imimg.com/data5/YI/VO/IG/SELLER-34214754/fishing-nets-500x500.jpg" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://m.media-amazon.com/images/I/81uvvBNFy-L._SY550_.jpg" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://m.media-amazon.com/images/I/418lYD-RoqL._SX425_.jpg" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXnhdI3LEPWrIltf3G-tEXa6uYEiKlbIPJQ&usqp=CAU" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
             <div className="item1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXnhdI3LEPWrIltf3G-tEXa6uYEiKlbIPJQ&usqp=CAU" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXnhdI3LEPWrIltf3G-tEXa6uYEiKlbIPJQ&usqp=CAU" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXnhdI3LEPWrIltf3G-tEXa6uYEiKlbIPJQ&usqp=CAU" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXnhdI3LEPWrIltf3G-tEXa6uYEiKlbIPJQ&usqp=CAU" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            <div className="item1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXnhdI3LEPWrIltf3G-tEXa6uYEiKlbIPJQ&usqp=CAU" alt="" />
                <div className="smalltext">
                    name<br />price
                </div>
            </div>
            </div>
            
    </div>
  )
}

export default Shop