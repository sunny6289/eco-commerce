import React from 'react';
import NavbarComponent from './Navbar/navbar.component';
import { Outlet } from 'react-router-dom';

const HomeComponent = () => {
    return (
        <div className='flex flex-col'>
            <div>
                <NavbarComponent />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default HomeComponent;
