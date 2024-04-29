import React from 'react';

const AddorEditProductFormComponent = () => {
    return (
        <div className='new-product grid md:grid-cols-4 p-4 gap-3 justify-center items-end border-b-[1px] border-slate-400'>
            <div className="">
                <label>Upload product image: </label>
                <input type="file" />
            </div>
            <div className="">
                <label>Add product name: </label>
                <input type="text" />
            </div>
            <div className="">
                <label>Add price: </label>
                <input type="number" />
            </div>
            <div className="">
                <label>Add Quantity: </label>
                <input type="number" />
            </div>
            <div className="">
                <label>Add product details: </label>
                <textarea name="" id="" cols="40" rows="10"></textarea>
            </div>
            <button className='p-2 bg-green-700 text-white rounded-md md:w-20'> Save</button>
        </div>
    );
}

export default AddorEditProductFormComponent;
