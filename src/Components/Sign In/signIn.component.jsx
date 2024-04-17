import { Fragment, useContext } from "react";
import { UserContext } from "../../Context/user.context";


const SignIn = () => {
    const { setUserAuthType } = useContext(UserContext);
    return (
        <Fragment>
            <div className="auth-input-container">
                <input className='auth-input' type='email' placeholder='Enter email' />
                <input className='auth-input' type='password' placeholder='Enter password' />
            </div>
            <button className='auth-button'>Login</button>
            <p className='auth-text'>Don't have an account? <span onClick={()=> setUserAuthType('sign up')}>Sign Up</span></p>
        </Fragment>
    );
}

export default SignIn;
