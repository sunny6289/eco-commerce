import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../Context/product.context';
import { Link } from 'react-router-dom';

const CartItemComponent = ({product}) => {
    const [quantity, setQuantity ] = useState(0);
    const { productId, productName, productDescription, productPrice, productImageURL} = product;
    const { productInCart, removeProductFromCart, decreaseQuantity, increaseQuantity } = useContext(ProductContext);
    useEffect(()=>{
        const currProduct = productInCart.find((cartProduct)=> cartProduct.productId === productId);
        setQuantity(currProduct.quantity);
    },[]);

    const increaseAmnt = ()=>{
        setQuantity(quantity+1);
        increaseQuantity(productId);
    }
    const decreaseAmnt = ()=>{
        setQuantity(quantity-1);
        decreaseQuantity(productId);
    }
    const removeProduct = ()=>{
        removeProductFromCart(productId);
    }
    return (
        
            <div className="p-2 border-2 md:w-full w-[18rem] justify-center items-center bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 md:flex-row">
                <Link to={`/${productId}`}>
                <div className="p-2 bg-cover md:max-w-[20rem]">
                    <img src={productImageURL} alt=""
                    className=''
                    />
                </div>
                </Link>
                <div className="p-2 h-auto w-full flex flex-col justify-between">
                <Link to={`/${productId}`}>
                    <div className="flex gap-5 flex-col text-wrap">
                        <h2 className='text-xl'>{productName}</h2>
                        <p className='break-words text-wrap'>{productDescription}
                        </p>
                        
                        <h1 className='text-xl'>Price: <b>${productPrice}</b></h1>
                    </div>
                    </Link>
                    <div className="p-2 flex gap-2 justify-center flex-col md:flex-row">
                        <div className=" text-center flex md:flex-nowrap flex-wrap justify-center gap-4 items-center">
                                <label>Quantity: </label>
                                <div className="flex justify-center gap-4 items-center">
                                <button onClick={decreaseAmnt} className='px-3 py-0 text-center bg-slate-600 text-white text-4xl rounded-md'>-</button> 
                                <span className='text-2xl'>{quantity}</span> 
                                <button onClick={increaseAmnt} className='px-2 bg-slate-600 text-white text-4xl rounded-md'>+</button>
                                </div>
                                <div className="">
                                    <button onClick={removeProduct} className='px-2 py-2 bg-slate-600 text-white text-xl rounded-md'>Remove</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CartItemComponent;
