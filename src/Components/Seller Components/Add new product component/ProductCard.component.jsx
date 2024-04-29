import React, { useContext } from 'react';
import { ProductContext } from '../../../Context/product.context';

const ProductCardComponent = ({product}) => {
    const { removeFromAllProduct } = useContext(ProductContext);
    const removeProduct = ()=> removeFromAllProduct(product.productId)
    return (
        <div>
            <div className="p-2 border-2 w-[18rem] justify-center items-center bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 min-h-[450px]">
                    <div className="p-2 bg-cover md:max-w-[28rem] min-h-[150px]">
                        <img src={product.productImageURL} alt={product.productName}
                            className=''
                        />
                    </div>
                <div className="p-2 h-auto flex flex-col gap-2 justify-between w-full">
                        <div className="flex gap-5 flex-col text-wrap">
                            <h2 className='text-xl'>{product.productName}</h2>
                            <p className='break-words text-wrap'>{product.productDescription}
                            </p>

                            <h1 className='text-xl'>Price: <b>${product.productPrice}</b></h1>
                        </div>
                </div>
                <div className="p-2 flex gap-1 justify-center flex-col md:flex-row w-full rounded-md items-center">
                        <button className='text-white bg-green-700 p-2 rounded-md border-[1px] border-slate-50 w-full text-center'><i class="fa-solid fa-edit"></i></button>
                        <button onClick={removeProduct} className='text-white bg-green-700 p-2 rounded-md border-[1px] border-slate-50  w-full'><i class="fa-solid fa-trash text-slate-100 text-lg" /></button>
                    </div>
            </div>
        </div>
    );
}

export default ProductCardComponent;
