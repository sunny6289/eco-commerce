import React, { useContext } from 'react';
import MyOrdersComponent from './MyOrders.component';
import { OrderContext } from '../../../Context/order.context';
import { useNavigate } from 'react-router-dom';
import ProfileCardComponent from '../Profile Card/ProfileCard.component';
import { UserContext } from '../../../Context/user.context';

const MyOrdersContainerComponent = () => {
    const { isProfileCardOpen } = useContext(UserContext);
    const { orderList } = useContext(OrderContext);
    const navigate = useNavigate();
    const gotoHome = ()=> navigate('/');
    return (
        <div className='flex flex-col md:pt-20 md:mt-12 pt-32 p-2 justify-center items-center gap-12 w-full'>
            
            <div className="w-full flex flex-col items-center justify-between">
            {
                    isProfileCardOpen && <ProfileCardComponent />
            }
                <div className=" fixed md:top-20 top-40 md:left-20 flex flex-col gap-2 border-b-[1px] border-slate-300 items-start  w-full p-8 bg-white">
                        <h1 className='text-2xl font-bold'>My orders</h1>
                        <p className='text-sm text-slate-600'>Check the status of recent orders, manage returns, and download invoices.</p>
                </div>
                <div className="flex flex-col gap-4 w-full md:items-center md:p-24 mt-32 md:mt-0">
                    {
                        orderList.length ? 
                        orderList.map((order)=> <MyOrdersComponent key={order.orderNumber} order={order} />)
                        : (<div style={{
                            marginTop: "30vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "30px"
                        }}><h2 style={{
                            fontSize: "40px",
                            fontWeight: "700",
                            color : "#000"
                        }}>No products ordered yet :( </h2>
                            <button style={{
                            padding: "10px",
                            color: "#fff",
                            backgroundColor: "#000",
                            borderRadius:"10px"
                        }} onClick={gotoHome}>Shop Now</button></div>)
                    }

                </div>
            </div>
        </div>
    );
}

export default MyOrdersContainerComponent;
