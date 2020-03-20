import React, {  useState, useRef, useEffect } from 'react';
import logo from '../../src/images/logo.png'
import './Header.css';
import { useAuth } from './useAuth';
//import { UserContext } from '../App';
/*const usePrevious=value=>{
    const prev=useRef();
    useEffect(()=>{
        console.log(value);
        prev.current=value;
    },[value])
    return prev.current;
}*/
const Header = () => {
   const auth=useAuth();
   console.log(auth);
    return (
        <div className="header">
           <img src={logo} alt=""/>
    
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Order Review</a>
               <a href="/manage">Manage Inventory</a>
    <span style={{color:'brown'}}>{}</span>
           </nav>
        </div>
    );
};

export default Header;