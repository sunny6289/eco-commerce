import { createContext, useState } from "react";

export const UserContext = createContext({
    login: false,
    setLogin: ()=>{},
    isProfileCardOpen: false,
    sellerAddProduct: false,
    setIsProfileCardOpen: ()=>{},
    setSellerAddProduct: ()=>{}
})

export const UserProvider = ({children})=>{
    const [login, setLogin] = useState(false);
    const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
    const [sellerAddProduct, setSellerAddProduct] = useState(false);
    const value = {login, setLogin, sellerAddProduct, setSellerAddProduct, isProfileCardOpen, setIsProfileCardOpen};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}