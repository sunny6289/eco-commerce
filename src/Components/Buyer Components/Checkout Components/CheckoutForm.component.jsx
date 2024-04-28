// Now create onChange methods for all the inputs and get values from the user 
// then use the "placeOrder" function in the confirm order button 
// then console log the value of order list to check, whether it is working or not


import React, { useContext, useEffect, useState } from 'react';
import './Checkout.style.css'
import ProductsInOrderSummaryComponent from './ProductsInOrderSummary.component';
import { ProductContext } from '../../../Context/product.context';
import { OrderContext } from '../../../Context/order.context';
import { useNavigate } from 'react-router-dom';

const CheckoutFormComponent = () => {
    const navigate = useNavigate();
    const { productInPurchase, orderSubtotalPrice, orderTotalPrice } = useContext(ProductContext);
    const { insertOrderInList } = useContext(OrderContext);
    const [orderNumber, setOrderNumber] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [customerLandmark, setCustomerLandmark] = useState('');
    const [customerCountry, setCustomerCountry] = useState('');
    const [customerState, setCustomerState] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerPostalCode, setCustomerPostalCode] = useState(0);
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState(0);

    useEffect(()=>{
        const getCurrentDate = () => {
            const currentDate = new Date();
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const day = currentDate.getDate();
            const month = monthNames[currentDate.getMonth()];
            const year = currentDate.getFullYear();
    
            const formattedDate = `${month} ${day}, ${year}`;
            setOrderDate(formattedDate);
        }
        const generateOrderNumber= ()=>{
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const currentDate = new Date();
            const dayOfWeek = weekday[currentDate.getDay()];
            setOrderNumber(`${dayOfWeek.slice(0, 3).toUpperCase()}${Date.now() % 100000}`);
        }
        getCurrentDate();
        generateOrderNumber();
    },[])

    const setInitialValues = ()=>{
        setCustomerCity('');
        setCustomerState('');
        setCustomerCountry('');
        setCustomerLandmark('');
        setCustomerPostalCode('');
        setCustomerFirstName('');
        setCustomerLastName('');
        setCustomerEmail('');
        setCustomerPhoneNumber('');
    }

    const placeOrder = () => {
        if (customerCity && customerCountry && customerEmail && customerFirstName && customerLandmark && customerLastName && customerPhoneNumber && customerPostalCode && customerState) {
            const order = {
                orderNumber: orderNumber,
                orderedProduct: productInPurchase,
                orderDate: orderDate,
                addressDetail: {
                    country: customerCountry,
                    city: customerCity,
                    state: customerState,
                    landmark: customerLandmark,
                    postalCode: customerPostalCode
                },
                priceDetail: {
                    shipping: 5,
                    totalPrice: orderTotalPrice,
                    subtotalPrice: orderSubtotalPrice,
                    tax: orderTotalPrice - orderSubtotalPrice,
                },
                customerDetail: {
                    firstName: customerFirstName,
                    lastName: customerLastName,
                    email: customerEmail,
                    phoneNumber: customerPhoneNumber
                }
            }
            insertOrderInList(order);
            setInitialValues();
            navigate('/');
        }else{
            alert("All fields are required");
            return;
        }
    }

    return (
        <>
            <div className=" checkout-form w-full p-8 flex justify-evenly md:flex-row flex-col gap-5">
                <div className=" flex flex-col justify-center gap-8">
                    <div className=" flex flex-col gap-2 justify-between">
                        <h2>Contact information</h2>
                        <label>
                            Email address
                            <br />
                            <input onChange={(e) => setCustomerEmail(e.target.value)} value={customerEmail} type="text" />
                        </label>
                    </div>
                    <hr className='border-1 border-slate-400' />
                    <div className="flex flex-col gap-2">
                        <h2>Shipping information</h2>
                        <div className='flex justify-center gap-2'>
                            <label>
                                First name
                                <br />
                                <input onChange={(e) => setCustomerFirstName(e.target.value)} value={customerFirstName} type="text" />
                            </label>
                            <label>
                                Last name
                                <br />
                                <input onChange={(e) => setCustomerLastName(e.target.value)} value={customerLastName} type="text" />
                            </label>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                Landmark (Apartment, street, etc.)
                                <br />
                                <input onChange={(e) => setCustomerLandmark(e.target.value)} value={customerLandmark} type="text" />
                            </label>
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <label>
                                City
                                <br />
                                <input onChange={(e) => setCustomerCity(e.target.value)} value={customerCity} type="text" />
                            </label>
                            <label>
                                Country
                                <br />
                                <input onChange={(e) => setCustomerCountry(e.target.value)} value={customerCountry} type="text" />
                            </label>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <label>
                                State
                                <br />
                                <input onChange={(e) => setCustomerState(e.target.value)} value={customerState} type="text" />
                            </label>
                            <label>
                                Postal code
                                <br />
                                <input onChange={(e) => setCustomerPostalCode(e.target.value)} value={customerPostalCode} type="text" />
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label>
                                Phone
                                <br />
                                <input onChange={(e) => setCustomerPhoneNumber(e.target.value)} value={customerPhoneNumber} type="text" />
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
                            productInPurchase.map((product) => <ProductsInOrderSummaryComponent key={product.productId} product={product} />)
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
                            <span>{`$${orderTotalPrice - orderSubtotalPrice}`}</span>
                        </div>
                    </div>
                    <hr className='border-1 border-slate-400' />
                    <div className="">
                        <div className=" flex justify-between">
                            <span className=' font-bold'>Total</span>
                            <span>{`$${orderTotalPrice + 5}`}</span>
                        </div>
                    </div>

                    <div className="">
                        <button onClick={placeOrder} className='bg-green-700 text-white p-2 rounded-md w-full'>Confirm order</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutFormComponent;
