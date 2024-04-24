import React from 'react';

const ProductsInOrderSummaryComponent = () => {
    return (
        <div className="flex bg-white rounded-md p-2 drop-shadow-md">
                            <div className="p-2 bg-cover w-full h-16">
                                <img 
                                src="https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                                className=' md:max-w-[6rem]'
                                />
                            </div>
                            <div className="p-2 h-auto w-full flex justify-between">
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
                                <div className=" flex items-end gap-1">
                                    <label>Q: </label>
                                    <select name="" id="" className='border-2 '>
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button 
                                // onClick={removeProduct} 
                                className='text-slate-600 text-xl  rounded-md'>
                                    <i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
    );
}

export default ProductsInOrderSummaryComponent;
