import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyOrdersContainerComponent from '../../../Components/Buyer Components/My orders components/MyOrdersContainer.component';
import ViewOrderComponent from '../../../Components/Buyer Components/My orders components/ViewOrder.component';

const OrderPageComponent = () => {
    return (
        <Routes>
            <Route index element={<MyOrdersContainerComponent/>}/>
            <Route path=':orderId' element={<ViewOrderComponent/>}/>
        </Routes>
    );
}

export default OrderPageComponent;
