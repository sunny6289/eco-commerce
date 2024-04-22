import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../../Context/product.context';

const SearchBarComponent = () => {
    const [searchBarVal, setSearchBarVal] = useState('');
    const { productToShowFromSearch } = useContext(ProductContext);
    const searchBardInputHandler = (e)=>{
        setSearchBarVal(e.target.value.toLowerCase());
    }
    const displayProducts = ()=> productToShowFromSearch(searchBarVal);
    return (
        <>
            <div className="flex gap-1 p-1">
                <input onChange={searchBardInputHandler}  type="text" placeholder='Search products' className='rounded-md w-56 px-2 outline-none' value={searchBarVal}/>
                <button onClick={displayProducts} className='px-3 py-1 bg-slate-600 rounded-md'><i class="fa-solid fa-magnifying-glass text-white" /></button>
            </div>
        </>
    );
}

export default SearchBarComponent;
