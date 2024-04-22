import React from 'react';
import WishlistItemContainerComponent from '../../../Components/Buyer Components/Wishlist Components/WishlistItemContainer.component';

const WishlistPageComponent = () => {
    return (
        <div className='flex flex-col gap-2 md:pt-8 pt-24 justify-center items-center '>
            <WishlistItemContainerComponent/>
        </div>

    );
}

export default WishlistPageComponent;
