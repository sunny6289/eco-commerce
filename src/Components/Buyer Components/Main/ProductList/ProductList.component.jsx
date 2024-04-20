import React from 'react';

const ProductListComponent = () => {
    return (
        <>
            <div className="p-2 border-2 bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 md:flex-row">
                <div className="p-2 bg-cover max-w-96">
                    <img src="https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    className=''
                    />
                </div>
                <div className="p-2 h-auto flex flex-col justify-between">
                    <div className="flex gap-5 flex-col text-wrap">
                        <h2 className='text-xl'>Product Title</h2>
                        <p className='break-words text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque sint optio, iusto provident blanditiis ex, voluptate similique distinctio maiores deleniti quam! Consequatur 
                        </p>
                        
                        <h1 className='text-xl'>Price $400</h1>

                        <span>Ratings</span>
                    </div>
                    <div className="p-2 flex gap-4 justify-center flex-col md:flex-row">
                        <button className='bg-green-700 text-white p-2 rounded-md w-full'>Buy Now <i class="fa-solid fa-bolt"></i></button>
                        <button className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Wishlist <i class="fa-solid fa-heart text-slate-100 text-lg" /></button>
                        <button className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Cart <i class="fa-solid fa-cart-shopping text-slate-100" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListComponent;
