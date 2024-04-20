import React from 'react';
import ProductListComponent from './ProductList/ProductList.component';

const MainComponent = () => {
    return (
        <>
            <div className="p-12 flex flex-col gap-4">
                <ProductListComponent />
                <ProductListComponent />
                <ProductListComponent />
                <ProductListComponent />
            </div>
        </>
    );
}

export default MainComponent;
