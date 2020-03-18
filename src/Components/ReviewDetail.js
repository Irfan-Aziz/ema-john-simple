import React from 'react';

const ReviewDetail = (props) => {
    const {name, quantity,key,price}=props.product;
    const reviewDetailStyle={
        borderBottom: '1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'

    };
    return (
        <div style={reviewDetailStyle} className="review-detail">
            <h3 className="product-name">{name}</h3>
            <p>Quantity: {quantity}</p>
    <p><small>$ {price}</small></p>
            <button className="main-btn"
            onClick={()=>props.removeProduct(key)}
           >Remove</button>
        </div>
    );
};

export default ReviewDetail;