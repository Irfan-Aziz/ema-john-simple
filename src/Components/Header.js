import React, {  useState, useRef, useEffect } from 'react';
import logo from '../../src/images/logo.png'
import './Header.css';
import { useAuth } from './useAuth';
import { Link } from 'react-router-dom';
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
    {   
        auth.user && <span style={{color:'brown'}}>{auth.user.name}</span>
        
        }
        {
            auth.user? <a href="/login">Sign Out</a>
            : <a href="/login">Sign In</a>
        }
           </nav>
        </div>
    );
};

export default Header;