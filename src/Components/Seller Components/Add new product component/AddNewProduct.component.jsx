import React, { useContext } from 'react';
import ProductCardComponent from './ProductCard.component';
import BusinessComponent from '../Business/Business.component';
import AddorEditProductFormComponent from './Add/AddorEditProductForm.component';
import './Add/AddorEditProductForm.component.css';
import { UserContext } from '../../../Context/user.context';
import { ProductContext } from '../../../Context/product.context';

const AddNewProductComponent = () => {
    const { sellerAddProduct, setSellerAddProduct } = useContext(UserContext);
    const { allProducts } = useContext(ProductContext);

    return (
        <div>
            <div className="">
                <div className=" p-4">
                    <button onClick={()=> setSellerAddProduct(true)} className=' text-xl text-white bg-green-700 p-2 rounded-md drop-shadow-md'>
                        <i class="fa-solid fa-plus text-xl mr-1"></i>
                        Add a new product
                    </button>
                </div>
                {
                    sellerAddProduct && (<div className="">
                    <AddorEditProductFormComponent />
                </div>)
                }
                <div className=" p-6 grid md:grid-cols-4 grid-cols-1 gap-4">
                    {
                        allProducts.length ? allProducts.map((product)=> <ProductCardComponent key={product.productId} product={product}/>) : ""
                    }
                </div>
                <div className="">
                    <BusinessComponent />
                </div>
            </div>
        </div>
    );
}

export default AddNewProductComponent;
