import { useNavigate } from "react-router-dom";



const MyOrdersComponent = ({order}) => {
    const {orderNumber, orderDate, priceDetail} = order;
    const navigate = useNavigate();

    const viewOrderDetails = ()=>{
        navigate('/order/'+orderNumber);
    }

    return (
        <>
            {/* <div className=" flex flex-col gap-6"> */}
                {/* <div className=" flex flex-col gap-2 p-2 border-b-[1px] border-slate-300">
                    <h1 className='text-2xl font-bold'>My orders</h1>
                    <p className='text-sm text-slate-600'>Check the status of recent orders, manage returns, and download invoices.</p>
                </div> */}

                {/* If user checkout multiple orders then all the items will be treated as a single order and onclicking the view order they can track all the orders in single page  */}
                {/* <div className=" flex flex-col w-full"> */}
                    <div className="flex flex-col md:flex-row gap-4 bg-gray-200 w-full justify-between md:items-center p-3 rounded-md">
                      <div className=" flex md:gap-14 gap-4 flex-col md:flex-row justify-between">
                        <div className=" flex md:flex-col gap-2 justify-between">
                            <dt>Order number</dt>
                            <dd>{orderNumber}</dd>
                        </div>
                        <div className=" flex md:flex-col gap-2 justify-between">
                            <dt>Date placed</dt>
                            <dd>{orderDate}</dd>
                        </div>
                        <div className=" flex md:flex-col gap-2 justify-between">
                            <dt>Total amount</dt>
                            <dd>${priceDetail.totalPrice}</dd>
                        </div>
                      </div>
                      <div className=" flex gap-2 flex-col md:flex-row md:w-[15rem] h-full justify-center">
                        <button onClick={viewOrderDetails} className='border-[1px] border-slate-300 w-full h-10 rounded-md bg-white'>View Order</button>
                      </div>
                </div>
        </>
    );
}

export default MyOrdersComponent;
