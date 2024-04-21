import React from 'react';
import CartItemComponent from './CartItem.component';

const CartComponent = () => {
    return (
        <>
            <CartItemComponent />
            <CartItemComponent />
            <CartItemComponent />
            <CartItemComponent />
            <CartItemComponent />

            <div className="p-2 mt-4">
                <h3 className=' text-2xl font-bold pb-2'>Price Details</h3>
                <hr className=' border border-gray-500' />
                <div className=" flex justify-between">
                    <div className=" p-4 text-xl flex flex-col gap-4">
                        <p>Items: 5</p>
                        <p>Delivery Charges: 5</p>
                        <p className=' font-bold'>Total Amount: $1000</p>
                    </div>
                    <div className=" flex justify-end items-end p-4">
                        <button className='bg-green-700 text-white p-2 rounded-md w-full'>Continue</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CartComponent;
