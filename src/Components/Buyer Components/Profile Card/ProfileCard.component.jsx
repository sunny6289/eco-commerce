import React from 'react';
import OrdersBtnComponent from '../Home/Navbar/OrdersBtn.component';
import SignOutBtnComponent from '../Home/Navbar/SignOutBtn.component';

const ProfileCardComponent = () => {
    return (
        <div style={{
            width: 'fit-content',
            backgroundColor: '#c5e8fa',
            position: 'absolute',
            right: '10px',
            zIndex: 2,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            borderRadius : '6px',
            alignItems: 'center'
        }} className='profile-card-container fixed md:top-24 top-52 z-20'>
            <div className='profile-img' style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'black',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
            }}>
                P
            </div>
            <h3 className='profile-name' style={{
                fontSize: '20px',
                fontWeight: 550,
            }}>Profile Name</h3>
            <OrdersBtnComponent/>
            <SignOutBtnComponent/>
        </div>
    );
}

export default ProfileCardComponent;
