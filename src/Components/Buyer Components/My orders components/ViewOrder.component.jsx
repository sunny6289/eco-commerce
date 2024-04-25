import React from 'react';
import OrdersPreviewComponent from './OrdersPreview.component';

const ViewOrderComponent = () => {
    return (
        <>
            <div className=" max-w-[45rem] md:pt-2 pt-24 flex md:flex-row flex-col justify-between">
                <div className="flex flex-col">
                    <span className='flex items-center gap-2 fixed bg-white py-4 px-2 w-full md:top-20 top-[11.5rem] left-0 z-10'>
                    <h2 className='text-xl font-bold'>#Order number - </h2>
                    <span>WU8990033999</span> 
                    </span>
                    <div className=" pt-12">
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    <OrdersPreviewComponent />
                    </div>
                </div>
                <div className="  md:w-[40rem] md:fixed right-10 top-40 md:border-l-2 p-4 bg-slate-100 mt-2 rounded-md">
                    <div className=" p-2 flex md:gap-14 gap-4 flex-col md:flex-row justify-between border-b-[1px] border-slate-300">
                            <div className=" flex md:flex-col gap-3 justify-between md:items-center">
                                <dt>Subtotal</dt>
                                <dd>$72.00</dd>
                            </div>
                            <div className=" flex md:flex-col gap-3 justify-between md:items-center">
                                <dt>Shipping</dt>
                                <dd>$8.00</dd>
                            </div>
                            <div className=" flex md:flex-col gap-3 justify-between md:items-center md:border-0 border-b-[1px] border-slate-400 pb-4 md:p-0">
                                <dt>Taxes</dt>
                                <dd>$6.40</dd>
                            </div>
                            <div className=" flex md:flex-col gap-3 justify-between md:items-center">
                                <dt className='font-bold'>Total</dt>
                                <dd>$86.40</dd>
                            </div>
                    </div>
                    <div className=" flex flex-row gap-16 w-full justify-between items-center md:p-4 mt-2">
                        <div className=" flex flex-col gap-2 justify-start items-center">
                            <dt className='text-lg '>Shipping Address</dt>
                            <dd className='text-sm font-light md:px-2'>
                                Kristin Watson <br />
                                7363 Cynthia Pass <br />
                                Toronto, ON N3Y 4H8
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
            </div>
        </>
    );
}

export default ViewOrderComponent;
