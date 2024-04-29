import React from 'react';

const ProductCardComponent = () => {
    return (
        <div>
            <div className="p-2 border-2 w-[18rem] justify-center items-center bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2">
                    <div className="p-2 bg-cover md:max-w-[28rem]">
                        <img src="https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                            className=''
                        />
                    </div>
                <div className="p-2 h-auto flex flex-col gap-2 justify-between w-full">
                        <div className="flex gap-5 flex-col text-wrap">
                            <h2 className='text-xl'>Red T shirt</h2>
                            <p className='break-words text-wrap'>Lorem ipsum dolor sit amet.
                            </p>

                            <h1 className='text-xl'>Price: <b>$400</b></h1>
                        </div>
                        <div className="flex justify-start gap-4 items-center">
                                <label>Quantity:</label>
                                <button className='px-3 py-0 text-center bg-slate-600 text-white text-4xl rounded-md'>-</button> 
                                <span className='text-2xl'>5</span> 
                                <button className='px-2 bg-slate-600 text-white text-4xl rounded-md'>+</button>
                        </div>
                </div>
                <div className="p-2 flex gap-1 justify-center flex-col md:flex-row w-full rounded-md items-center">
                        <button className='text-white bg-green-700 p-2 rounded-md border-[1px] border-slate-50 w-full text-center'><i class="fa-solid fa-edit"></i></button>
                        <button className='text-white bg-green-700 p-2 rounded-md border-[1px] border-slate-50  w-full'><i class="fa-solid fa-trash text-slate-100 text-lg" /></button>
                    </div>
            </div>
        </div>
    );
}

export default ProductCardComponent;
