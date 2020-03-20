import React from 'react';
import { useAuth } from './useAuth';


const Cart = (props) => {
    
    const cart=props.cart;
   const auth=useAuth();
    console.log(auth.user);
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price*product.quantity;
    }
    let shipping=0;
    if(total>45){
        shipping=0;
    }else if(total>30){
        shipping=4.99;

    }else if(total>0){
        shipping=12.99;
    }
    const tax=(total/10).toFixed(2);
    const grandTotal=(total+shipping+Number(tax)).toFixed(2);
    const formatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);

    }
    return (
        <div>
            <h5>Order Summary</h5>
    <h6>Items Ordered :{cart.length}</h6> 
    <p>Product Price:{formatNumber(total)}</p>
    <p><small>shipping cost: {shipping}</small></p>
    <p><small>Tax: {tax}</small></p>
    <h6>Total Price: {grandTotal}</h6>
    <br/>
    {
        props.children
    }
    {
        <p>{}</p>
    }
        </div>
    );
};

export default Cart;