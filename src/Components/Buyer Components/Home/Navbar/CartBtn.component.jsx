import React from 'react';
import { Link } from 'react-router-dom';

const CartBtnComponent = () => {
    return (
        <>
        <Link to={'/cart'}>
           <div className="p-1">
                <button className='p-1'><i class="fa-solid fa-cart-shopping text-slate-800 text-2xl" /></button>
            </div>  
        </Link>
        </>
    );
}

export default CartBtnComponent;
