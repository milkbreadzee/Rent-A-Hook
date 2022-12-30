import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './ProductList.css'

const ProductList = () => {
    const [products, setProducts]  = useState([])

    useEffect(()=>{
        getProducts();
    },[])
 
    const getProducts = async()=>{
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    }

    // const editProduct = async(productId) => {
    //     await axios.update(`http://localhost:5000/products/${productId}`)
    // }
    
    const deleteProduct = async(productId) =>{
        await axios.delete(`http://localhost:5000/products/${productId}`)
    }
  return (
    <div>
        <h1>PRODUCT LIST</h1>
        <table className="protable">
            <thread class="threadpro">
                <tr>
                <th>No</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
                </tr>
            </thread>
            <tbody>
                {products.map((products,index) =>(
                     <tr key={products.uuid}>
                     <td>{index+1}</td>
                     <td>{products.name}</td>
                     <td>{products.price}</td>
                     <td>
                        {/* <Link to ={`/products/update/${products.uuid}`}>
                        <button >Edit</button>
                     </Link> */}
                     {/* <button onClick={() =>{
                        editProduct(products.name, products.price)
                     }}> Edit</button> */}
                     <button onClick={() => {
                        deleteProduct(products.uuid)
                     }}>
                        Delete
                     </button>
                     </td>
                 </tr>
                ))}
               
            </tbody>
        </table>
    </div>
  )
}

export default ProductList