import React from 'react';

const OrdersPreviewComponent = () => {
    return (
        <div className="flex flex-row-reverse md:flex-row bg-white rounded-md p-2 border-b-2 border-slate-200 items-start">
                            <div className="flex p-2 md:p-2 bg-cover items-start">
                                <img 
                                src="https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                                className=' md:max-w-[15rem] md:max-h-[10rem] max-w-[5rem] max-h-[5rem]'
                                />
                            </div>
                            <div className="p-2 h-auto w-full flex flex-col items-start md:gap-4 gap-1">
                                <div className="flex gap-2 flex-col text-wrap">
                                    <h2 className='text-lg'>
                                        {/* {productName} */}
                                        anyname
                                    </h2>

                                    <h2 className='md:block hidden'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto totam alias nulla harum, voluptate expedita officiis dolores ducimus sed!
                                    </h2>

                                    <h1>
                                        <b>
                                            {/* ${productPrice} */}
                                            $400
                                        </b>
                                    </h1>
                                    <div className='flex gap-2 justify-center items-center md:justify-start'>
                                        <span className=' text-blue-600'>View Product</span>
                                        <span className=' text-slate-300 text-2xl font-thin'>|</span>
                                        <span className=' text-blue-600'>Buy Again</span>
                                    </div>
                                    <h2>
                                        <span>Out for delivery</span>
                                    </h2>
                                </div>    
                            </div>
                        </div>
    );
}

export default OrdersPreviewComponent;
