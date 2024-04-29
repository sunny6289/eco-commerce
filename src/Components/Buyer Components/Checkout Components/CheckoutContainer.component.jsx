import React, { useContext } from 'react';
import CheckoutFormComponent from './CheckoutForm.component';
import { ProductContext } from '../../../Context/product.context';
import MessageScreenComponent from '../../Message screen/MessageScreen.component';
import ProfileCardComponent from '../Profile Card/ProfileCard.component';
import { UserContext } from '../../../Context/user.context';

const CheckoutContainerComponent = () => {
    const { isProfileCardOpen } = useContext(UserContext)
    const { productInPurchase } = useContext(ProductContext);
    return (
        <div className=' bg-slate-100 rounded-md drop-shadow-md pt-24 mt-16 md:mt-5'>
            {
                    isProfileCardOpen && <ProfileCardComponent />
            }
            {
                productInPurchase.length ?
                <CheckoutFormComponent />
                : <MessageScreenComponent/>
            }
        </div>
    );
}

export default CheckoutContainerComponent;
