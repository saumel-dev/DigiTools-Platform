import React, { Suspense, use } from 'react';
import Carts from './Carts';

const Carts_data = ({ cartsPromise }) => {
    const carts = use(cartsPromise);
    console.log(carts);

    return (
        <>
            <div className='grid grid-cols-3 gap-2 justify-items-center w-9/12 mx-auto mt-6'>
                {
                    carts.map((cart, index) => <Carts key={index} cart={cart}></Carts>)
                }
            </div>
        </>
    )
};

export default Carts_data;