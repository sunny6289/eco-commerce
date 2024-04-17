import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../Context/user.context";

const defaultFieldValue = {
    email: '',
    password: ''
}

const SignIn = () => {
    const { setUserAuthType } = useContext(UserContext);
    const [formFieldValue, setFormFieldValue] = useState(defaultFieldValue);
    const {email, password} = formFieldValue;
    console.log(formFieldValue);
    const handleFormValueChange = (e)=>{
        const {name, value} = e.target;
        setFormFieldValue({...formFieldValue, [name]:value })
    }

    const onSubmitValue = ()=>{
        //After sign Up operation will be here
        resetFormField();
    }

    const resetFormField = ()=>{
        setFormFieldValue(defaultFieldValue);
    }
    return (
        <Fragment>
            <div className="auth-input-container">
                <input className='auth-input' onChange={handleFormValueChange} type='email' placeholder='Enter email' name="email" value={email}/>
                <input className='auth-input' onChange={handleFormValueChange} type='password' placeholder='Enter password' name="password" value={password}/>
            </div>
            <button onClick={onSubmitValue} className='auth-button'>Login</button>
            <p className='auth-text'>Don't have an account? <span onClick={()=> setUserAuthType('sign up')}>Sign Up</span></p>
        </Fragment>
    );
}

export default SignIn;
