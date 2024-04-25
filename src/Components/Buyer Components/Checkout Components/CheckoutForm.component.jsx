import React, { useContext } from 'react';
import './Checkout.style.css'
import ProductsInOrderSummaryComponent from './ProductsInOrderSummary.component';
import { ProductContext } from '../../../Context/product.context';

const CheckoutFormComponent = () => {
    const { productInPurchase, orderSubtotalPrice, orderTotalPrice } = useContext(ProductContext);

    return (
        <>
            <div className=" checkout-form w-full p-8 flex justify-evenly md:flex-row flex-col gap-5">
                <div className=" flex flex-col justify-center gap-8">
                    <div className=" flex flex-col gap-2 justify-between">
                    <h2>Contact information</h2>
                        <label>
                            Email address
                            <br />
                            <input type="text" />
                        </label>
                    </div>
                    <hr className='border-1 border-slate-400' />
                    <div className="flex flex-col gap-2">
                        <h2>Shipping information</h2>
                        <div className='flex justify-center gap-2'>
                            <label>
                                First name
                                <br />
                                <input type="text" />
                            </label>
                            <label>
                                Last name
                                <br />
                                <input type="text" />
                            </label>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                Company
                                <br />
                                <input type="text" />
                            </label>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                Address
                                <br />
                                <input type="text" />
                            </label>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                Apartment, suite, etc.
                                <br />
                                <input type="text" />
                            </label>
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <label>
                                City
                                <br />
                                <input type="text" />
                            </label>
                            <label>
                                Country
                                <br />
                                <select name="" id="" className=' w-48 focus:border-[2px] border-[1px] border-gray-400 focus:border-green-700 rounded-md p-2 outline-none'>
                                    <option value="United States" selected>United States</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Canada">Canada</option>
                                    <option value="India">India</option>
                                </select>
                            </label>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <label>
                                State / Province
                                <br />
                                <input type="text" />
                            </label>
                            <label>
                                Postal code
                                <br />
                                <input type="text" />
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label>
                                Phone
                                <br />
                                <input type="text" />
                            </label>
                        </div>
                    </div>
                    <hr className='border-1 border-slate-400' />
                    <div className="flex flex-col gap-2 justify-between">
                        <h2>Payment</h2>
                        <div className='flex justify-around gap-2'>
                            <label>
                                <input type="radio" value="Credit card" name='payment_options' />
                                Credit card
                            </label>
                            <label>
                                <input type="radio" value="PayPal" name='payment_options' />
                                PayPal
                            </label>
                            <label>
                                <input type="radio" value="eTransfer" name='payment_options' />
                                eTransfer
                            </label>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>
                                Card number
                                <br />
                                <input type="text" />
                            </label>
                            <label>
                                Name on card
                                <br />
                                <input type="text" />
                            </label>
                            <div className="flex gap-2 text-nowrap">
                                <label>
                                    Expiration date (MM/YY)
                                    <br />
                                    <input type="text" />
                                </label>
                                <label>
                                    CVV
                                    <br />
                                    <input type="text" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 md:w-[30rem]">
                    <h2>Order summary</h2>
                    <div className=" overflow-y-scroll h-[15rem] flex flex-col gap-2 md:p-4 w-full">
                        {
                            productInPurchase.map((product)=> <ProductsInOrderSummaryComponent key={product.productId} product={product} />)
                        }
                    </div>
                    <hr className='border-1 border-slate-400' />
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>{`$${orderSubtotalPrice}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>$5.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{`Taxes(18%)`}</span>
                            <span>{`$${orderTotalPrice-orderSubtotalPrice}`}</span>
                        </div>
                    </div>
                    <hr className='border-1 border-slate-400' />
                    <div className="">
                        <div className=" flex justify-between">
                                <span className=' font-bold'>Total</span>
                                <span>{`$${orderTotalPrice+5}`}</span>
                        </div>
                    </div>
                    
                    <div className="">
                        <button className='bg-green-700 text-white p-2 rounded-md w-full'>Confirm order</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutFormComponent;
