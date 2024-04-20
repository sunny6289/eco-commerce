import React from 'react';

const SearchBarComponent = () => {
    return (
        <>
            <div className="flex gap-1 p-1">
                <input type="text" placeholder='Search products' className='rounded-md w-56 px-1 outline-none'/>
                <button className='px-3 py-1 bg-slate-600 rounded-md'><i class="fa-solid fa-magnifying-glass text-white" /></button>
            </div>
        </>
    );
}

export default SearchBarComponent;
