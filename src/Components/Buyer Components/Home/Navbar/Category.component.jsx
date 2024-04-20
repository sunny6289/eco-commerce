import React from 'react';

const CategoryComponent = () => {
    return (
        <>
        <div className="p-1">
            <select name="Category" id="" className='outline-none p-2 rounded-md text-slate-800'>
                <option value="" disabled selected>Category</option>
                <option value="demo1" >demo1</option>
                <option value="demo2">demo2</option>
                <option value="demo3">demo3</option>
                <option value="demo4">demo4</option>
                <option value="demo5">demo5</option>
            </select>
        </div>    
        </>
    );
}

export default CategoryComponent;
