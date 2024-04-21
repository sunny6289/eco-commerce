import { createContext, useState } from "react";

export const UserContext = createContext({
    userType:'buyer',
    setUserType: ()=>{},
    userAuthType:'login',
    setUserAuthType: ()=>{},
    isProfileCardOpen: false,
    setIsProfileCardOpen: ()=>{}
})

export const UserProvider = ({children})=>{
    const [userType, setUserType] = useState('buyer');
    const [userAuthType, setUserAuthType] = useState('login');
    const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
    const value = { userType , setUserType, userAuthType, setUserAuthType, isProfileCardOpen, setIsProfileCardOpen};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}