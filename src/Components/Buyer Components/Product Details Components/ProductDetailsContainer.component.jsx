import React, { useContext } from 'react';
import ProductDetailsComponent from './ProductDetails.component';
import ProfileCardComponent from '../Profile Card/ProfileCard.component';
import { UserContext } from '../../../Context/user.context';

const ProductDetailsContainerComponent = () => {
    const { isProfileCardOpen } = useContext(UserContext)
    
    return (
        <div className='pt-24 p-2 flex flex-col gap-4'>
            {
                    isProfileCardOpen && <ProfileCardComponent />
            }
            <ProductDetailsComponent />
        </div>
    );
}

export default ProductDetailsContainerComponent;
