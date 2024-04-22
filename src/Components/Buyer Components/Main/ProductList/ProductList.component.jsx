import React, { useContext } from 'react';
import { ProductContext } from '../../../../Context/product.context';

const ProductListComponent = ({ product }) => {
    const { productName, productDescription, productPrice, productImageURL, productRating } = product;
    const { insertProductInCart } = useContext(ProductContext);

    const addToCart = ()=> insertProductInCart(product);
    return (
        <>
            <div className="p-2 border-2 bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 md:flex-row">
                <div className="p-2 bg-cover max-w-[29rem]">
                    <img src={productImageURL} alt=""
                    className=''
                    />
                </div>
                <div className="p-2 h-auto flex flex-col justify-between w-full">
                    <div className="flex gap-5 flex-col text-wrap">
                        <h2 className='text-xl'>{productName}</h2>
                        <p className='break-words text-wrap'>{productDescription}
                        </p>
                        
                        <h1 className='text-xl'>Price: <b>${productPrice}</b></h1>

                        <span>Ratings:
                            <br /> 
                            <i class="fa-solid fa-star text-2xl"></i>
                            <i class="fa-solid fa-star text-2xl"></i>
                            <i class="fa-solid fa-star text-2xl"></i>
                            <i class="fa-solid fa-star text-2xl"></i>
                            <i class="fa-regular fa-star text-2xl"></i>
                        </span>
                    </div>
                    <div className="p-2 flex gap-2 justify-center flex-col md:flex-row">
                        <button className='bg-green-700 text-white p-2 rounded-md w-full'>Buy Now <i class="fa-solid fa-bolt"></i></button>
                        <button className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Wishlist <i class="fa-solid fa-heart text-slate-100 text-lg" /></button>
                        <button onClick={addToCart} className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Cart <i class="fa-solid fa-cart-shopping text-slate-100" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListComponent;
