import { createContext, useEffect, useState } from "react";


export const OrderContext = createContext({
    orderList: [],
    insertOrderInList: ()=>{},
    getOrderDetail: ()=>{},
    totalQuantity: 0,
    totalSale: 0
})

export const OrderProvider = ({children})=>{
    const [orderList, setOrderList] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalSale, setTotalSale] = useState(0);

    useEffect(()=>{
        const { orderedProduct } = orderList;
        let sale = 0;
        let quantity = 0;
        for (let index = 0; index < orderList.length; index++) {
            sale += orderedProduct.reduce((acc,product)=> acc+= Number(product.productPrice*product.quantity),0);
            quantity += orderedProduct.reduce((acc,product)=> acc+= product.quantity,0);
        }
        setTotalSale(sale);
        setTotalQuantity(quantity);
    },[orderList])

    const insertOrderInList = (orderDetails)=> setOrderList([...orderList,{...orderDetails}]);
    const getOrderDetail = (orderId) => orderList.find((order)=>order.orderNumber === orderId);

    const value = {orderList, insertOrderInList, getOrderDetail, totalQuantity, totalSale}
    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}