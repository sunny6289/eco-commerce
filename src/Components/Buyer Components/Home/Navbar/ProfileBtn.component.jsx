import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../../Context/user.context';

const ProfileBtnComponent = () => {
    const {isProfileCardOpen, setIsProfileCardOpen} = useContext(UserContext);

    return (
        <>
           <div className="p-1">
                <button onClick={() => setIsProfileCardOpen(!isProfileCardOpen)} id='profileCardBtn' className='px-1 border-2 border-slate-800 rounded-full'>
                    <i class="fa-solid fa-user text-slate-800 text-2xl" />
                </button>
            </div> 
        </>
    );
}

export default ProfileBtnComponent;
