// Created a function to get the order data from the order context
// Properties inside the 


import React, { useContext, useEffect, useState } from 'react';
import OrdersPreviewComponent from './OrdersPreview.component';
import { useParams } from 'react-router-dom';
import { OrderContext } from '../../../Context/order.context';

const ViewOrderComponent = () => {
    const { orderId } = useParams();
    const { getOrderDetail } = useContext(OrderContext);
    const [orderDetailToShow, setOrderDetailToShow] = useState({});
    useEffect(() => {
        setOrderDetailToShow(getOrderDetail(orderId));
        // setOrderDetailToShow);
        // console.log(orderDetailToShow);
    }, [])

    console.log(orderDetailToShow);
    console.log(orderDetailToShow.orderedProduct);


    // console.log("render")
    return (
        <>
            {
                orderDetailToShow.orderedProduct !== undefined ?
                    (<div className=" max-w-[45rem] md:pt-2 pt-24 flex md:flex-row flex-col justify-between">
                        <div className="flex flex-col">
                            <span className='flex items-center gap-2 fixed bg-white py-4 px-2 w-full md:top-20 top-[11.5rem] left-0 z-10'>
                                <h2 className='text-xl font-bold'>#Order number - </h2>
                                <span>{orderDetailToShow.orderNumber}</span>
                            </span>
                            <div className=" pt-12">
                                {
                                    orderDetailToShow.orderedProduct.map((product) => <OrdersPreviewComponent key={product.productId} product={product} />)
                                }
                                
                            </div>
                        </div>
                        <div className="  md:w-[40rem] md:fixed right-10 top-40 md:border-l-2 p-4 bg-slate-100 mt-2 rounded-md">
                            <div className=" p-2 flex md:gap-14 gap-4 flex-col md:flex-row justify-between border-b-[1px] border-slate-300">
                                <div className=" flex md:flex-col gap-3 justify-between md:items-center">
                                    <dt>Subtotal</dt>
                                    <dd>${orderDetailToShow.priceDetail.subtotalPrice}</dd>
                                </div>
                                <div className=" flex md:flex-col gap-3 justify-between md:items-center">
                                    <dt>Shipping</dt>
                                    <dd>${orderDetailToShow.priceDetail.shipping}</dd>
                                </div>
                                <div className=" flex md:flex-col gap-3 justify-between md:items-center md:border-0 border-b-[1px] border-slate-400 pb-4 md:p-0">
                                    <dt>Taxes</dt>
                                    <dd>${orderDetailToShow.priceDetail.tax}</dd>
                                </div>
                                <div className=" flex md:flex-col gap-3 justify-between md:items-center">
                                    <dt className='font-bold'>Total</dt>
                                    <dd>${orderDetailToShow.priceDetail.totalPrice}</dd>
                                </div>
                            </div>
                            <div className=" flex flex-row gap-16 w-full justify-between items-center md:p-4 mt-2">
                                <div className=" flex flex-col gap-2 justify-start items-center">
                                    <dt className='text-lg '>Shipping Address</dt>
                                    <dd className='text-sm font-light md:px-2'>
                                        {orderDetailToShow.customerDetail.firstName + " " + orderDetailToShow.customerDetail.lastName} <br />
                                        {orderDetailToShow.addressDetail.landmark + ", " + orderDetailToShow.addressDetail.city + " " + orderDetailToShow.addressDetail.postalCode}<br />
                                        {orderDetailToShow.addressDetail.state + ", " + orderDetailToShow.addressDetail.country}
                                    </dd>
                                </div>
                                <div className=" flex flex-col gap-2 justify-center items-start">
                                    <dt className='text-lg'>Payment Information</dt>
                                    <span className='bg-blue-600 text-white p-1 rounded-md m-1 text-center'>Visa</span>
                                    <dd className='text-sm font-light md:px-2'>
                                        Ending with 4242
                                        <br />
                                        Expires 12 / 21</dd>
                                </div>
                            </div>
                        </div>
                    </div>) : " "
            }
        </>

    );
}



export default ViewOrderComponent;
