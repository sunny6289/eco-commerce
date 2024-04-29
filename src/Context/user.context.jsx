import { createContext, useState } from "react";

export const UserContext = createContext({
    userType:'buyer',
    setUserType: ()=>{},
    userAuthType:'login',
    setUserAuthType: ()=>{},
    isProfileCardOpen: false,
    sellerAddProduct: false,
    setIsProfileCardOpen: ()=>{},
    setSellerAddProduct: ()=>{}
})

export const UserProvider = ({children})=>{
    const [userType, setUserType] = useState('buyer');
    const [userAuthType, setUserAuthType] = useState('login');
    const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
    const [sellerAddProduct, setSellerAddProduct] = useState(false);
    const value = {sellerAddProduct, userType , setUserType,setSellerAddProduct, userAuthType, setUserAuthType, isProfileCardOpen, setIsProfileCardOpen};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}