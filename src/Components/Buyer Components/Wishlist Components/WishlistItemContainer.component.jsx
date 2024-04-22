import React from 'react';
import WishlistItemComponent from './WishlistItem.component';

const WishlistItemContainerComponent = () => {
    return (
        <div className='flex flex-col gap-4 md:pt-8 pt-24 justify-center items-center'>
            <WishlistItemComponent />
        </div>
    );
}

export default WishlistItemContainerComponent;
