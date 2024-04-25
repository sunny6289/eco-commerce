import React, { useContext } from 'react';
import CheckoutFormComponent from './CheckoutForm.component';
import { ProductContext } from '../../../Context/product.context';
import MessageScreenComponent from '../../Message screen/MessageScreen.component';

const CheckoutContainerComponent = () => {
    const { productInPurchase } = useContext(ProductContext);
    return (
        <div className=' bg-slate-100 rounded-md drop-shadow-md pt-20 mt-2'>
            {
                productInPurchase.length ?
                <CheckoutFormComponent />
                : <MessageScreenComponent/>
            }
        </div>
    );
}

export default CheckoutContainerComponent;
