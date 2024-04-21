import React, { useContext } from 'react';
// import ProductListComponent from './ProductList/ProductList.component';
import ProductListContainerComponent from '../Home/ProductList Container/ProductListContainer.component';
import { UserContext } from '../../../Context/user.context';
import ProfileCardComponent from '../Profile Card/ProfileCard.component';

const MainComponent = () => {
    const { isProfileCardOpen } = useContext(UserContext);
    return (
        <>
            <div className="p-12 flex flex-col gap-4">
                {
                    isProfileCardOpen && <ProfileCardComponent/>
                }
                <ProductListContainerComponent />
            </div>
        </>
    );
}

export default MainComponent;
