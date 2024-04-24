import React, { useContext } from 'react';
import ProductListContainerComponent from '../Home/ProductList Container/ProductListContainer.component';
import { UserContext } from '../../../Context/user.context';
import ProfileCardComponent from '../Profile Card/ProfileCard.component';
import CheckoutContainerComponent from '../Checkout Components/CheckoutContainer.component';

const MainComponent = () => {
    const { isProfileCardOpen } = useContext(UserContext);
    return (
        <>
            <div className="pt-24 p-2 flex flex-col gap-4">
                {
                    isProfileCardOpen && <ProfileCardComponent/>
                }
                {/* <ProductListContainerComponent /> */}
                <CheckoutContainerComponent />
            </div>
        </>
    );
}

export default MainComponent;
