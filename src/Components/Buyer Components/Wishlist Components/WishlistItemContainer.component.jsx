import React, { useContext } from 'react';
import WishlistItemComponent from './WishlistItem.component';
import { ProductContext } from '../../../Context/product.context';


const WishlistItemContainerComponent = () => {
    const { productInWishlist } = useContext(ProductContext);
    return (
        <div className='flex flex-col gap-4 md:pt-8 pt-24 justify-center items-center'>
            {
                productInWishlist.length ? 
                productInWishlist.map((product)=> <WishlistItemComponent key={product.productId} product={product}/>) : <h2 style={{
                    fontSize: '50px',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: '80px',
                    color: 'green'
                }}>Wishlist is Empty</h2>
            }
        </div>

    );
}

export default WishlistItemContainerComponent;
