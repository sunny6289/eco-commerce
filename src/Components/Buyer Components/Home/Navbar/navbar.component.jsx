import React from 'react';
import LogoComponent from './Logo.component';
import SearchBarComponent from './Search-bar.component';
import CartBtnComponent from './CartBtn.component';
import WishlistBtnComponent from './WishlistBtn.component';
import ProfileBtnComponent from './ProfileBtn.component';

const NavbarComponent = () => {
    return (
        <>
            <div className="z-10 drop-shadow-sm fixed p-4 w-full border-gray-100 bg-slate-300 flex gap-2 justify-around flex-wrap">
                <LogoComponent />
                <SearchBarComponent />
                <CartBtnComponent />
                <WishlistBtnComponent />
                <ProfileBtnComponent />
            </div>
        </>
    );
}

export default NavbarComponent;
