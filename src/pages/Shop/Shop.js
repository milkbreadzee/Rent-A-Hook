import React from 'react'
import Header from '../../components/Header';
import './Shop.css'
import {TfiLayoutGrid2Alt} from "react-icons/tfi"
import Footer from '../../components/Footer';
const Shop = () => {
    const [value, setValue] = React.useState('Default Sorting');

    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };
  return (
    
    <div>
        <Header />
        <div className="products">
           
            <h3 className='pro'>Product</h3>
            {/* <p className='texthome'>Home</p> */}
        </div>
        <div className='gawkhead'> 
        <p> <TfiLayoutGrid2Alt /> Showing all 12 results</p>
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
                <div className='imgdiv'>
                <img src="https://m.media-amazon.com/images/I/71aEvZbodJL._SX425_.jpg" alt="" />
                </div>
                <div className="smalltext">
                    Tail fishing Reel<br />₹35/day
                </div>
            </div>
            <div className="item1">
                <div className="imgdiv">
                <img src="https://contents.mediadecathlon.com/p51462/0d68afc1dbbf70f6199c170956cef133/p51462.jpg" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Reel<br />₹30/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="https://rukminim1.flixcart.com/image/416/416/juk4gi80/fishing-rod/k/2/v/180cm-6-feet-auf-original-imaffmp9m5yfswce.jpeg?q=70" alt="" />
                </div>
                <div className="smalltext">

                    Fishing Rod<br />₹30/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="https://5.imimg.com/data5/YI/VO/IG/SELLER-34214754/fishing-nets-500x500.jpg" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Net<br />₹15/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="https://m.media-amazon.com/images/I/81uvvBNFy-L._SY550_.jpg" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Bait<br />₹20/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="https://m.media-amazon.com/images/I/418lYD-RoqL._SX425_.jpg" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Hook<br />₹20/day
                </div>
            </div>
            <div className="item1">
                <div className='imgdiv'>
                <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Boat<br />₹150/day
                </div>
            </div>
             <div className="item1">
             <div className="imgdiv">
                <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Boots<br />₹20/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E-U5qYCpeI3vmtOFqwK0iRIjYtqcXKXE0-m9ZiqAYw&s" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Box<br />₹25/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="smalltext">
                    Bait Bucket<br />₹20/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAfQMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAOBAAAgIBAQUEBwYGAwAAAAAAAAECAxEEBRIhMUETUWGBIjJxcpHB0QYUIyRioUJSgrHS4TM0kv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7MAAAAANV99Wnhv2zUV4mc5qEJSlySyzkddqLNTc7HJ+lxXXdQF1dtuEX+HXn3n8iNLbl+eEYLyZSyt3OS83xyedulzQVdx25fnjCt+TRJp25XJ4tqcfGLyc4rYt8MpntjxLK68cAdlRqqdQs1TUvDqbjh69ZKqxPMl3PqmdHsraj1Uuysw5YzGS6hFqAAAAAAHkpKEXKTSS5tsD0EOzaemr5Sc3+lEaW2oL1aZP2ywBt2zf2WkcFzn/AGOXsnwXgix1+teqlvOKgksYzkrL5rdfIK1SlhZyanY88zVbLek1HLNT3k8Z4hEp2Z/hRvosc4bsoppFfGUjdprHvcG8oo34Ulhk7ZMnXqqHyxPDIGG5cOCfElaRuE4TT4ppgduCHo46iTV18sb8c7ik2uPHuWMciYQAABo1l/3bTys3d5rkjnr9XO+W9ZLefTuXkdNOEbIOE0nF80yk1mxbI5lpXvL+VviBWu0wlYzGyudUt2yMoy7msGGQpZNyyQ7U3z5IlsxaT5oCulPdWEmzTvyf8JaOqL5xRg9LXLmgK3fcZZM42Q3lKOYy8Cb9xq6IfcYdG/iBjVe+KcXJNcuRLomnhxee9PoaY6THVr+o3woaafDPf3gdZo9bRPT1p2xU91ZTeOOCWpJrKaa8DjsOJlG2UHmLafgwOwBQbP2pbG6Fd0nOE3jLfFMvwgAAMZwjOO7OKku5rJDt2RorePY7j/Q8ftyJwAprPs9S/wDjvsj7UmaJfZ2xerqYv2wa+Z0AA5SnZOpvldGqVL7Gx1y3pNccJ93ibVsHW9Xp/wD3L/EtdB6G0tpV99kJrzgvoWIHPR+z979a+uPsTf0PNRsT7tprbp6re3It4VeMvu5nREHWNX6mjSris9rZ7q5fF4+AEGvYMnXFy1G7JpNrc5P4iWw7Y+pfCXti19S8AHO2bN1VS41Ka/Q8/wCyHOvdeJJxfdJYOuPHFSWGk14gctodLPUauCivRi05PuR1R4oqKxFJLwPQAAAAAAAAK5fh7fa6XafPnGX0ZYldtD8PX7Pv6K11v2Si8fukWIHkpKEXKTxFLLfcQtmqVsbNZNYle8xT6QXqr5+ZhtWTvdOhg2pXy9NrpBc/oWCSikorCXBJAegAAAAAAAAAAAAAAAr9twb2bZOPrUuNq/paZOhJSgpJ8Gso8trVtU65erOLi/YyqWosr2FXCH/Yl+Xj7ye78mwNuzfzWr1Oufqt9lV7seb82WZq0tEdNp66YL0YRSNoAAAAAAAAAAAAAAAAHj5HPaK7Uanatas0rVEZ2WRnCScc8s+zKfxLvVt9juQbUrGoLHNZ5vyWX5CuuNdqhCKjGNaSS6IDeAAAAAAAAAAAAAAAAAANMuOqguig358F9TJv8xH3Hn4o1XWdjqa7JyUanFwbfJPKxn9zDRXPVzs1CWKn6FT/AJkucvN/2AmAAAAAAAAAAAAAAAAAADGcYzW7OKlF801lM9SUUkkklySAA9AAAAAAAAAAH//Z" alt="" />
                </div>
                <div className="smalltext">
                    Fishing Hat<br />₹15/day
                </div>
            </div>
            <div className="item1">
            <div className="imgdiv">
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQI6jwiJMxt9Y4dTobqhJV1wcSmkQiFzs_jk5xncM5OaEiXFtJEbmp2Yx6xRAP9z0qewoQN6T67ry7z&usqp=CAc" alt="" />
                </div>
                <div className="smalltext">
                    Automatic FIshing Rod<br />₹45/day
                </div>
            </div>
            </div>
            <Footer />
    </div>
  )
}

export default Shop