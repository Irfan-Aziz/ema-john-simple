import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData';
import Product from '../Components/Product';

const ProductDetail = () => {
    const {productKey}=useParams();
    const product= fakeData.find(pd=>productKey===pd.key);
    console.log(product);
    return (
        <div>
            <h1>{productKey} details coming soon...</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;