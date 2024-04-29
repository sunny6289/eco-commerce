import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../Context/user.context';
import { ProductContext } from '../../../../Context/product.context';


const AddorEditProductFormComponent = () => {
    const { setSellerAddProduct } = useContext(UserContext);
    const { allProducts, setAllProducts } = useContext(ProductContext);
    const [ productName, setProductName ] = useState('');
    const [ productId, setProductId ] = useState('');
    const [ productImageURL, setProductImageURL ] = useState(null);
    const [ productPrice, setProductPrice ] = useState('');
    const [ productDescription, setProductDescription ] = useState('');

    useEffect(()=>{
        const generateProductId= ()=>{
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const currentDate = new Date();
            const dayOfWeek = weekday[currentDate.getDay()];
            setProductId(`${Date.now() % 100000}${dayOfWeek.slice(0, 3).toUpperCase()}`);
        }
        generateProductId();
    },[])

    const addProduct = ()=>{
        const productInfo = {
            productId: productId,
            productName: productName,
            productImageURL: productImageURL,
            productPrice: productPrice,
            productDescription: productDescription
        }
        setAllProducts([...allProducts,{...productInfo}]);
        setProductId('');
        setProductPrice('');
        setProductImageURL('');
        setProductName('');
        setProductDescription('');
        setSellerAddProduct(false)
    }

    const onImageChange = (event)=>{
        if (event.target.files && event.target.files[0]) {
            setProductImageURL(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <div className='new-product grid md:grid-cols-4 p-4 gap-3 justify-center items-end border-b-[1px] border-slate-400'>
            <div className="">
                <label>Upload product image: </label>
                <input accept="image/*" onChange={onImageChange} type="file"/>
            </div>
            <div className="">
                <label>Add product name: </label>
                <input onChange={(e)=>setProductName(e.target.value)} type="text" value={productName} />
            </div>
            <div className="">
                <label>Add price: </label>
                <input onChange={(e)=>setProductPrice(e.target.value)} type="text" value={productPrice} />
            </div>
            <div className="">
                <label>Add product details: </label>
                <textarea onChange={(e)=>setProductDescription(e.target.value)} name="" id="" cols="40" rows="10" value={productDescription}></textarea>
            </div>
            <div className='flex gap-7'>
                <button onClick={addProduct} className='p-2 bg-green-700 text-white rounded-md md:w-20'> Save</button>
                <button onClick={() => setSellerAddProduct(false)} className='p-2 bg-red-700 text-white rounded-md md:w-20'> Cancel</button>
            </div>
        </div>
    );
}

export default AddorEditProductFormComponent;
