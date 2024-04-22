import React from 'react';
import { Link } from 'react-router-dom';

const WishlistBtnComponent = () => {
    return (
        <Link to={'/wishlist'}>
            <div className="p-1">
                <button className='p-1'><i class="fa-solid fa-heart text-slate-800 text-2xl" /></button>
            </div>
        </Link>
    );
}

export default WishlistBtnComponent;
