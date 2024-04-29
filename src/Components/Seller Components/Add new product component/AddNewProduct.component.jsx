import React from 'react';
import ProductCardComponent from './ProductCard.component';
import BusinessComponent from '../Business/Business.component';
import AddorEditProductFormComponent from './Add/AddorEditProductForm.component';
import './Add/AddorEditProductForm.component.css';

const AddNewProductComponent = () => {
    return (
        <div>
            <div className="">
                <div className=" p-4">
                    <button className=' text-xl text-white bg-green-700 p-2 rounded-md drop-shadow-md'>
                        <i class="fa-solid fa-plus text-xl mr-1"></i>
                        Add a new product
                    </button>
                </div>
                <div className="">
                    <AddorEditProductFormComponent />
                </div>
                <div className=" p-6 grid md:grid-cols-4 grid-cols-1 gap-4">
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                    <ProductCardComponent />
                </div>
                <div className="">
                    <BusinessComponent />
                </div>
            </div>
        </div>
    );
}

export default AddNewProductComponent;
