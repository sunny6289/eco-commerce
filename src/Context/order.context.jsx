import { createContext, useState } from "react";


export const OrderContext = createContext({
    orderList: [],
    insertOrderInList: ()=>{},
    getOrderDetail: ()=>{}
})

export const OrderProvider = ({children})=>{
    const [orderList, setOrderList] = useState([]);
    const insertOrderInList = (orderDetails)=> setOrderList([...orderList,{...orderDetails}]);
    const getOrderDetail = (orderId) => orderList.find((order)=>order.orderNumber === orderId);


    const value = {orderList, insertOrderInList, getOrderDetail}
    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}