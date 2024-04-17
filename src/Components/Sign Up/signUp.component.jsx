import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../../Context/user.context';

const defaultFieldValue = {
    email: '',
    password: ''
}

const SignUp = () => {
    const { setUserAuthType } = useContext(UserContext);
    const [ formFieldValue, setFormFieldValue ] = useState(defaultFieldValue);
    const { email, password } = formFieldValue;
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
                <input className='auth-input' onChange={handleFormValueChange} type='email' placeholder='Enter email' name='email' value={email}/>
                <input className='auth-input' onChange={handleFormValueChange} type='password' placeholder='Enter password' name='password' value={password} />
            </div>
            <button onClick={onSubmitValue} className='auth-button'>Sign Up</button>
            <p className='auth-text'>Have an account? <span onClick={()=> setUserAuthType('login')}>Sign In</span></p>
        </Fragment>
    );
}

export default SignUp;
