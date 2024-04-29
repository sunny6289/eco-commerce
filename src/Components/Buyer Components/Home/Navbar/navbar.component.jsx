import React from 'react';
import LogoComponent from './Logo.component';
import SearchBarComponent from './Search-bar.component';
import CategoryComponent from './Category.component';
import CartBtnComponent from './CartBtn.component';
import WishlistBtnComponent from './WishlistBtn.component';
import ProfileBtnComponent from './ProfileBtn.component';
import NewOrdersBtnComponent from '../../../Seller Components/Seller Navbar Buttons/NewOrdersBtn.component';
import AllOrdersBtnComponent from '../../../Seller Components/Seller Navbar Buttons/AllOrdersBtn.component';

const NavbarComponent = () => {
    return (
        <>
            <div className="z-10 drop-shadow-sm fixed p-4 w-full border-gray-100 bg-slate-300 flex gap-2 justify-around flex-wrap">
                <LogoComponent />
                <SearchBarComponent />
                {/* <CategoryComponent />
                <CartBtnComponent />
                <WishlistBtnComponent /> */}
                <NewOrdersBtnComponent />
                <AllOrdersBtnComponent />
                <ProfileBtnComponent />
            </div>
        </>
    );
}

export default NavbarComponent;
