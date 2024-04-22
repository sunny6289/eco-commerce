import React from 'react';

const WishlistItemComponent = () => {
    return (
            <div className="p-2 border-2 md:w-full w-[18rem] justify-center items-center bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 md:flex-row">
                <div className="p-2 bg-cover md:max-w-[20rem]">
                    <img src="https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    className=''
                    />
                </div>
                <div className="p-2 h-auto w-full flex flex-col justify-between">
                    <div className="flex gap-5 flex-col text-wrap">
                        <h2 className='text-xl'>
                            {/* {productName} */}
                            AnyName
                        </h2>
                        <p className='break-words text-wrap'>
                            {/* {productDescription} */}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat?
                        </p>
                        
                        <h1 className='text-xl'>Price: 
                            <b>
                            {/* ${productPrice} */}
                            $400
                            </b>
                        </h1>
                    </div>
                    <div className="p-2 flex gap-2 md:justify-end flex-col md:flex-row">
                            <button className='bg-green-700 text-white p-2 rounded-md w-full'>Buy Now <i class="fa-solid fa-bolt"></i></button>
                            <button className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Cart <i class="fa-solid fa-cart-shopping text-slate-100" /></button>
                            <button className='px-2 py-2 bg-slate-600 text-white text-xl rounded-md'>Remove</button>
                        </div>
                    </div>
                </div>
    );
}

export default WishlistItemComponent;
