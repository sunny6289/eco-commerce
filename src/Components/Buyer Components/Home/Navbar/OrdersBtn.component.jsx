import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersBtnComponent = () => {
    const navigate = useNavigate();

    return (
        <>
           <div onClick={()=> navigate('/order')} className="p-1">
                <button className='border-slate-800 border-2 rounded-md px-3 py-1 text-slate-800'>Orders</button>
            </div> 
        </>
    );
}

export default OrdersBtnComponent;
