import React, { useContext } from 'react';
import { ProductContext } from '../../../Context/product.context';

const WishlistItemComponent = ({product}) => {
    const { productId, productName, productDescription, productPrice, productImageURL } = product;
    const { insertProductInCart, removeProductFromWishlist } = useContext(ProductContext);
    const removeProduct = ()=> removeProductFromWishlist(productId);
    const addToCart = ()=> {
        insertProductInCart(product);
        // removeProductFromWishlist(productId);
    }

    return (
            <div className="p-2 border-2 md:w-full w-[18rem] justify-center items-center bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 md:flex-row">
                <div className="p-2 bg-cover md:max-w-[20rem]">
                    <img src={productImageURL} alt=""
                    className=''
                    />
                </div>
                <div className="p-2 h-auto w-full flex flex-col justify-between">
                    <div className="flex gap-5 flex-col text-wrap">
                        <h2 className='text-xl'>
                            {productName}
                        </h2>
                        <p className='break-words text-wrap'>
                            {productDescription}
                        </p>
                        
                        <h1 className='text-xl'>Price: 
                            <b>
                            ${productPrice}
                            </b>
                        </h1>
                    </div>
                    <div className="p-2 flex gap-2 md:justify-end flex-col md:flex-row">
                            <button className='bg-green-700 text-white p-2 rounded-md w-full'>Buy Now <i class="fa-solid fa-bolt"></i></button>
                            <button onClick={addToCart} className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Cart <i class="fa-solid fa-cart-shopping text-slate-100" /></button>
                            <button onClick={removeProduct} className='px-2 py-2 bg-slate-600 text-white text-xl rounded-md'>Remove</button>
                        </div>
                    </div>
            </div>
    );
}

export default WishlistItemComponent;
