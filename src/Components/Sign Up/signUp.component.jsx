import { Fragment, useContext } from 'react';
import { UserContext } from '../../Context/user.context';

const SignUp = () => {
    const { setUserAuthType } = useContext(UserContext);
    return (
        <Fragment>
            <div className="auth-input-container">
                <input className='auth-input' type='email' placeholder='Enter email' />
                <input className='auth-input' type='password' placeholder='Enter password' />
            </div>
            <button className='auth-button'>Sign Up</button>
            <p className='auth-text'>Have an account? <span onClick={()=> setUserAuthType('login')}>Sign In</span></p>
        </Fragment>
    );
}

export default SignUp;
