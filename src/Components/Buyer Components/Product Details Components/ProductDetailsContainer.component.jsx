import React from 'react';
import ProductDetailsComponent from './ProductDetails.component';

const ProductDetailsContainerComponent = () => {
    return (
        <div className='pt-24 p-2 flex flex-col gap-4'>
            <ProductDetailsComponent />
        </div>
    );
}

export default ProductDetailsContainerComponent;
