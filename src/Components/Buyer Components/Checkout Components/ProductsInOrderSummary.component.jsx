import React from 'react';

const ProductsInOrderSummaryComponent = () => {
    return (
        <div className="flex bg-white rounded-md p-1 md:p-2 drop-shadow-md justify-center items-center">
            <div className="flex p-1 md:p-2 bg-cover w-full h-20">
                <img 
                src="https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className=' md:max-w-[35rem] max-w-[8rem]'
                />
            </div>
            <div className="p-2 h-auto w-full flex flex-col items-start md:gap-4 gap-1">
                <div className="flex gap-2 flex-col text-wrap">
                    <h2 className='text-lg'>
                        {/* {productName} */}
                        anyname
                    </h2>

                    <h1>Price:
                        <b>
                            {/* ${productPrice} */}
                            $400
                        </b>
                    </h1>
                </div>
                <div className=" flex md:items-center items-end md:gap-4 gap-2">
                    <label>Q: </label>
                    <div className="flex justify-center gap-2 items-center">
                        <button 
                        // onClick={decreaseAmnt} 
                        className='px-2 text-center bg-slate-600 text-white text-xl rounded-md'>-</button> 
                        <span className='text-xl'>
                            {/* {quantity} */}1
                        </span> 
                        <button 
                        // onClick={increaseAmnt} 
                        className='px-2 bg-slate-600 text-white text-xl rounded-md'>+</button>
                    </div>
                    <div>
                        <button 
                        // onClick={removeProduct} 
                        className='text-slate-600 text-2xl rounded-md'>
                        <i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default ProductsInOrderSummaryComponent;
