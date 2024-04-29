import React, { useContext } from 'react';
import { OrderContext } from '../../../Context/order.context';

const BusinessComponent = () => {
    const { totalQuantity, totalSale } = useContext(OrderContext);

    return (
        <div>
            <h2 className=' text-2xl p-4 border-b-[1px] border-slate-500'>Business</h2>
            <div className=" flex md:gap-4 gap-4 flex-col justify-between p-8">
                <div className=" flex gap-2 justify-between">
                    <dt className=' font-bold'>Total Sell</dt>
                    <dd>{totalQuantity} pieces</dd>
                </div>
                <div className=" flex gap-2 justify-between">
                    <dt className=' font-bold'>Total Earnings</dt>
                    <dd>${totalSale}</dd>
                </div>
            </div>
        </div>
    );
}

export default BusinessComponent;
