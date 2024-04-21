import React from 'react';
import ProductListComponent from './ProductList/ProductList.component';

const MainComponent = () => {
    return (
        <>
            <div className="flex flex-col gap-4 p-24">
                <ProductListComponent />
                <ProductListComponent />
                <ProductListComponent />
                <ProductListComponent />
            </div>
        </>
    );
}

export default MainComponent;
