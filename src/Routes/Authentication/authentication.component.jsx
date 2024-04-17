import { useContext } from 'react';
import { UserContext } from '../../Context/user.context';
import SignIn from '../../Components/Sign In/signIn.component';
import SignUp from '../../Components/Sign Up/signUp.component';
import './authentication.styles.css';

const Authentication = () => {
    const {userType, setUserType, userAuthType} = useContext(UserContext)

    return (
        <div className="auth-page">
            <div className="auth-form-container">
                <div className="auth-as-container">
                    <p className={userType === 'buyer'? `auth-as-selected` : `userType`} onClick={()=>{setUserType('buyer')}}>Buyer</p>
                    <p className={userType === 'seller'? `auth-as-selected` : `userType`} onClick={()=>{setUserType('seller')}}>Seller</p>
                </div>
                {
                    userAuthType === 'login' ? <SignIn/> : <SignUp/>
                }
            </div>
            <div className='auth-page-image'>
                
            </div>
        </div>
    );
}

export default Authentication;
