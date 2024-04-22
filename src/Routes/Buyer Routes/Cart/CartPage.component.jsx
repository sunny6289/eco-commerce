import React, { useContext } from 'react';
// import CartItemComponent from './CartItem.component';
import CartItemContainerComponent from '../../../Components/Buyer Components/Cart Components/CartItemContainer.component';
import { ProductContext } from '../../../Context/product.context';
import ProfileCardComponent from '../../../Components/Buyer Components/Profile Card/ProfileCard.component';
import { UserContext } from '../../../Context/user.context';

const CartComponent = () => {
    const { totalItem, totalPrice, productInCart } = useContext(ProductContext);
    const { isProfileCardOpen } = useContext(UserContext);
    return (
        <div className='p-24 flex flex-col gap-4'>
            {
                    isProfileCardOpen && <ProfileCardComponent />
            }
            <div className="flex flex-col gap-8">
            <CartItemContainerComponent/>
            {
                productInCart.length ? 
                (<div className="p-2 text-left mt-4">
                    <h3 className=' text-2xl font-bold pb-2'>Price Details</h3>
                    <hr className=' border border-gray-500' />
                    <div className=" flex justify-between md:flex-row flex-col">
                        <div className=" p-4 text-xl flex flex-col gap-4">
                            <p>{`Items: ${totalItem}`}</p>
                            <p>Delivery Charges: 5</p>
                            <p className=' font-bold'>Total Amount: ${totalPrice}</p>
                        </div>
                        <div className=" flex justify-end items-end p-4">
                            <button className='bg-green-700 text-white p-2 rounded-md w-full'>Continue</button>
                        </div>

                    </div>
                </div>) : ""
            }
            </div>
        </div>

    );
}

export default CartComponent;
