import React, { useEffect } from 'react';
import {useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
import product from './Product';
import fakeData from '../fakeData';
import ReviewDetail from './ReviewDetail';
import Cart from './Cart';
import happyImage from '../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';
import { auth } from 'firebase';

const Review = () => {
    const [cart,setCart]= useState([]);
    const [orderPlaced, setOrderPlaced]=useState(false);
    const auth=useAuth();

    const handlePlaceOrder=()=>{
       // console.log('clicked');
       setCart([]);
       setOrderPlaced(true);
       processOrder();
    }
    const removeProduct=(productKey)=>{
        //console.log('remove clicked',productKey);
        const newCart=cart.filter(pd=>pd.key!==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
    const savedCart=getDatabaseCart();
    const productKeys=Object.keys(savedCart);
    const cartProduct=productKeys.map(key=>
        {
            const product= fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key];
            return product;
        });
        setCart(cartProduct);
    console.log(cartProduct);
}
 ,[]   )
 let thankYou;
 if(orderPlaced){
    thankYou= <img src={happyImage} alt=""/>
 }
    return (
        <div className="shop-container">
           
      <div className="product-container">
          
      {cart.map(pd=> <ReviewDetail 
            key={pd.key}
            removeProduct={removeProduct}
           product={pd}
          
            ></ReviewDetail>)}
            {thankYou}
            {
                !cart.length&& <h1>You have not added anything</h1>
            }
      </div>
      <div className="cart-container">
          <Cart cart={cart}>
              <Link to="shipment">
              { auth.user ?
                  <button  className="main-btn">Proceed Checkout</button>
                  :
                  <button  className="main-btn">Log in to Order</button>
                  }
              </Link>
          </Cart>
      </div>
        </div>
    );
};

export default Review;