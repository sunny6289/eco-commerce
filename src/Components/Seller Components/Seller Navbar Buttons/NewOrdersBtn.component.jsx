import React from 'react';

const NewOrdersBtnComponent = () => {
    return (
        <>
            <div className="p-1">
                <button className='border-slate-800 border-2 rounded-md px-3 py-1 text-slate-800'>New orders
                <span className='px-2 py-[2px] ml-1 text-white rounded-[50rem] bg-green-800'>5</span>
                </button>
            </div> 
        </>
    );
}

export default NewOrdersBtnComponent;
