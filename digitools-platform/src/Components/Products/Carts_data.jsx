import React, { Suspense, use } from 'react';
import Carts from './Carts';

const   Carts_data = ({ cartsPromise, setCartCount, cartCount}) => {
    const carts = use(cartsPromise);

    return (
        <>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center w-9/12 mx-auto mt-6'>
                {
                    carts.map((cart, index) => <Carts cartCount={cartCount} setCartCount={setCartCount} key={index} cart={cart}></Carts>)
                }
            </div>
        </>
    )
};

export default Carts_data;