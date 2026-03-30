import React, { use } from 'react';
import writing from '../../assets/products/design-tool.png'
const Carts = ({cart}) => {
    const {name, description, price, period, tag, tagType, features, icon} = cart;
    return (
        <>
           <div>
            <div className='card w-96 flex bg-gray-400 shadow-sm'>
                <div className='bg-blue-300 badge m-2 justify-end'>
                    <p>{tag}</p>
                </div>
            </div>
           </div>
        </>
    );
};

export default Carts;