import { createContext, useState } from "react";

export const UserContext = createContext({
    userType:'buyer',
    setUserType: ()=>{},
    userAuthType:'login',
    setUserAuthType: ()=>{}
})

export const UserProvider = ({children})=>{
    const [userType, setUserType] = useState('buyer');
    const [userAuthType, setUserAuthType] = useState('login');
    const value = { userType , setUserType, userAuthType, setUserAuthType};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}