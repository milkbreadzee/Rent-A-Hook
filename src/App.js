import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop';
import Login from "./pages/Login/Login"

import RoutesURL from './RoutesURL';
import {Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import AdminDash from './pages/AdminDash/AdminDash';
import ProductView from './pages/ProductView/ProductView';
import Cart from './pages/Cart/Cart';



function App() {
  return (
   
   <div>
    
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/login" element={<Login />} />
    <Route  path="/admindash" element={<AdminDash />}/>
    <Route  path="/productview" element={<ProductView />}/>
    <Route  path="/cart" element={<Cart />}/>
    </Routes>
   
    
    
    
   </div>
  );
}

export default App;
