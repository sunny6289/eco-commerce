import React, { useState } from 'react';

const CartItemComponent = () => {
    //Just for demo purpose
    let [quantity, setQuantity] = useState(1)
    
    return (
        <>
            <div className="p-2 border-2 bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 md:flex-row">
                <div className="p-2 bg-cover max-w-[20rem]">
                    <img src="https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    className=''
                    />
                </div>
                <div className="p-2 h-auto flex flex-col justify-between">
                    <div className="flex gap-5 flex-col text-wrap">
                        <h2 className='text-xl'>Product Title</h2>
                        <p className='break-words text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque sint optio, iusto provident blanditiis ex, voluptate similique distinctio maiores deleniti quam! Consequatur 
                        </p>
                        
                        <h1 className='text-xl'>Price: <b>$400</b></h1>
                    </div>
                    <div className="p-2 flex gap-2 justify-center flex-col md:flex-row">
                        <div className=" text-center flex justify-center gap-4 items-center">
                            <label>Quantity: </label>
                            <button onClick={() => {quantity<=1 ? setQuantity(quantity) : setQuantity(quantity-1)}} className='px-3 py-0 text-center bg-slate-600 text-white text-4xl rounded-md'>-</button> 
                            <span className='text-2xl'>{quantity}</span> 
                            <button onClick={() => setQuantity(quantity+1)} className='px-2 bg-slate-600 text-white text-4xl rounded-md'>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItemComponent;
