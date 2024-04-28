import React, { useContext, useEffect, useState } from 'react';
import ReviewsRatingsComponent from './Reviews&Ratings.component';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../../Context/product.context';


const ProductDetailsComponent = () => {
    const { productToDisplayId } = useParams();
    const navigate = useNavigate();
    const { insertProductInCart, insertProductInWishlist, productToShow, insertProductInPurchase, PURCHASE_FROM_PAGE } = useContext(ProductContext);
    const [ productToDisplayName, setProductToDisplayName ] = useState('');
    const [ productToDisplayDescription, setProductToDisplayDescription ] = useState('');
    const [ productToDisplayPrice, setProductToDisplayPrice ] = useState('');
    const [ productToDisplayImageURL, setProductToDisplayImageURL ] = useState('');
    const [ product, setProduct ] = useState({});

    // console.log(productToDisplayId);
    useEffect(()=>{
        const productToDisplay = productToShow.find((product)=> product.productId === productToDisplayId);
        setProduct({...productToDisplay})
        const { productImageURL, productName, productDescription, productPrice } = productToDisplay;
        setProductToDisplayName(productName);
        setProductToDisplayDescription(productDescription);
        setProductToDisplayPrice(productPrice);
        setProductToDisplayImageURL(productImageURL)
    },[productToDisplayId]);
    const addToCart = ()=> insertProductInCart(product);
    const addToWishlist = () => insertProductInWishlist(product);
    const addToPurchase = ()=>{
        insertProductInPurchase(product, PURCHASE_FROM_PAGE.main);
        navigate('/purchase');
    }

    return (
        <div className="md:pt-8 pt-24 p-2 h-full border-2 w-full justify-center items-center md:items-start bg-slate-100 rounded-md drop-shadow-md flex md:flex-row flex-col md:justify-around">
                <div className="p-2 bg-cover flex flex-col gap-4">
                    <img src={productToDisplayImageURL} alt=""
                    className='md:max-w-[45rem]'
                    />

                    {/* made a separate component for ratings and used in bottom for responsiveness */}
                    <div className=" w-full md:flex flex-col gap-4 hidden">
                            <ReviewsRatingsComponent />
                    </div>
                </div>
                <div className="p-2 md:h-screen h-full w-full flex flex-col justify-evenly">
                    <div className=" p-8 flex gap-5 flex-col text-wrap justify-between h-full">
                        <h2 className='text-xl'>
                            {productToDisplayName} 
                        </h2>
                        <p className='break-words text-wrap'>
                            {productToDisplayDescription}
                        </p>
                        
                        <h1 className='text-xl'>Price: 
                            <b>
                            {` $${productToDisplayPrice}`}
                            
                            </b>
                        </h1>
                        <div className=" w-[15rem]">
                            <h2 className=' text-xl font-bold'>Product Details</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nobis inventore delectus hic quasi iure cumque corrupti, natus ab suscipit!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odio quia fugiat optio doloribus minus ipsam qui deserunt distinctio nulla!

                            </p>
                        </div>
                        <div className=" w-[15rem]">
                            <h2 className=' text-xl font-bold'>Seller</h2>
                            <p>                               
                                TBL Online4.2
                                7 Days Replacement Policy?
                                GST invoice available?
                            </p>
                        </div>
                        <div className=" w-full flex flex-col gap-4 md:hidden">
                            <ReviewsRatingsComponent />
                        </div>
                        
                    </div>
                    <div className="p-2 flex gap-2 md:justify-end flex-col md:flex-row">
                            <button onClick={addToPurchase} className='bg-green-700 text-white p-2 rounded-md w-full'>Buy Now <i class="fa-solid fa-bolt"></i></button>
                            <button 
                            onClick={addToCart} 
                            className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Cart <i class="fa-solid fa-cart-shopping text-slate-100" /></button>
                            <button 
                            onClick={addToWishlist} 
                            className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Wishlist <i class="fa-solid fa-heart text-slate-100 text-lg" /></button>

                        </div>
                    </div>
            </div>
    );
}

export default ProductDetailsComponent;
