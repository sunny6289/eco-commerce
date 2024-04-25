import React from 'react';
import MyOrdersComponent from './MyOrders.component';

const MyOrdersContainerComponent = () => {
    return (
        <div className='flex flex-col md:pt-8 pt-24 p-2 justify-center items-center gap-12 w-full'>
            <div className="w-full flex flex-col items-center justify-between">
                <div className=" fixed md:top-20 top-40 md:left-20 flex flex-col gap-2 border-b-[1px] border-slate-300 items-start  w-full p-8 bg-white">
                        <h1 className='text-2xl font-bold'>My orders</h1>
                        <p className='text-sm text-slate-600'>Check the status of recent orders, manage returns, and download invoices.</p>
                </div>
                <div className="flex flex-col gap-4 w-full md:items-center md:p-24 mt-32 md:mt-0">
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                    <MyOrdersComponent />
                </div>
            </div>
        </div>
    );
}

export default MyOrdersContainerComponent;
