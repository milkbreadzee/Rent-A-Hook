import React,{useState} from 'react'
import './mostpopcard.css'
import axios from "axios"

const MostPopCard = () => {
    const [products, setProducts]  = useState();
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Reel");
    const [price, setPrice] = useState("50/day");

                // const getProducts = async(productId)=>{
                //     const response = await axios.get(`http://localhost:5000/products/${productId}`);
                //     setProducts(response.data);
                //     setName(products.name);
                //     setPrice(products.price);
                //     count = count+1;
                //     setCount(count);
                // }


  return (
    <div>
       
    </div>
  )
}

export default MostPopCard