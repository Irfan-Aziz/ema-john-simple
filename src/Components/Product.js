import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import {Link} from 'react-router-dom';

const product = (props) => {
    const{img,name,seller,price,stock,key}=props.product;
    //console.log(props);
    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
            <h4 className="product-name:"><Link to={"/Product/"+key}>{name}</Link></h4>
            
            <br/>
    <p><small>by: {seller}</small></p>
    <br/>
    <p>${price}</p>
    <p><small>Only {stock} left in stock-Order soon</small></p>

      {props.showAddToCart&&<button className="main-btn"
          onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
    }
            </div>
            
    
        </div>
    );
};

export default product;