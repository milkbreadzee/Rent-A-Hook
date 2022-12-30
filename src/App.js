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
import ProductView2 from './pages/ProductView/ProductView2';
import ProductView3 from './pages/ProductView/ProductView3';
import ProductView4 from './pages/ProductView/ProductView4';
import Buynow3 from './pages/Buynow/Buynow3';
import Buynow1 from './pages/Buynow/Buynow1';
import Buynow2 from './pages/Buynow/Buynow2';
import Buynow4 from './pages/Buynow/Buynow4';
import Contact from './pages/Contact/Contact';

function App() {
  return (
   
   <div>
    
    <Login />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/login" element={<Login />} />
    <Route  path="/admindash" element={<AdminDash />}/>
    <Route  path="/productview" element={<ProductView />}/>
    <Route  path="/productview2" element={<ProductView2 />}/>
    <Route  path="/productview3" element={<ProductView3 />}/>
    <Route  path="/productview4" element={<ProductView4 />}/>
    <Route  path="/buy3" element={<Buynow3 />}/>
    <Route  path="/buy1" element={<Buynow1 />}/>
    <Route  path="/buy2" element={<Buynow2 />}/>
    <Route  path="/buy4" element={<Buynow4 />}/>
    <Route  path="/contact" element={<Contact />}/>

    </Routes>
   
    
    
    
   </div>
  );
}

export default App;
