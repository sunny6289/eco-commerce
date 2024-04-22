import React from 'react';
import { Link } from 'react-router-dom';
const LogoComponent = () => {
    return (
        <>
            <Link to={'/'}>
                <div className="text-xl text-green-700 font-extrabold leading-3 drop-shadow-lg">
                    <span className='text-3xl'>eCo</span><br />Commerce
                </div>
            </Link>
        </>
    );
}

export default LogoComponent;
