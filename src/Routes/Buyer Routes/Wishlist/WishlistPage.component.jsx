import React, {useContext} from 'react';
import WishlistItemContainerComponent from '../../../Components/Buyer Components/Wishlist Components/WishlistItemContainer.component';
import ProfileCardComponent from '../../../Components/Buyer Components/Profile Card/ProfileCard.component';
import { UserContext } from '../../../Context/user.context';

const WishlistPageComponent = () => {
    const { isProfileCardOpen } = useContext(UserContext);

    return (
        <div className='p-24 flex flex-col gap-4'>
            {
                    isProfileCardOpen && <ProfileCardComponent />
            }
            <div className="flex flex-col gap-8">
                <WishlistItemContainerComponent />
            </div>
        </div>
    );
}

export default WishlistPageComponent;
