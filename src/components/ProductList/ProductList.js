import React from 'react';
import Product from '../Product/Product.js';

export default function ProductList(props) {
    return(
        props.productList.length >0 ?
        props.productList.map((product,i)=>{
        return <Product product ={product} key={i} incrementQuantity= {props.incrementQuantity} index={i}
        decrementQuality={props.decrementQuality} remove={props.remove}/>
        })
        :<h1>No products exits in the cart</h1>
    )
}
